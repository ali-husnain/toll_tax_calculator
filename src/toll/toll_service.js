const { v4: uuidv4 } = require('uuid');
const path = require('path');
const filepath = path.resolve(__dirname,'../../database/entries.json');
const Common = require('../utils/common');
const { readFilePro, writeFilePro } = require('../utils/fsPro');
const TAXBASERATE = 20;

const TollService = {

   create: async (body) => {
    const entry = { uuid: uuidv4(), ...body };
    const fileData = await readFilePro(filepath);
    const recordedData = JSON.parse(fileData);
    recordedData.push(entry);
    await writeFilePro(filepath, JSON.stringify(recordedData));
    return entry
  },

  calculateTax: async(entry) => {
    const base_rate = TAXBASERATE;
    const distance_cost = Common.getDistanceCharges(entry);
    const subtotal = (distance_cost + base_rate);
    const discount = parseFloat((Common.getDiscount(entry) * subtotal).toFixed(2));
    const total_tax = parseFloat(subtotal - discount);
    
    return {
        base_rate,
        distance_cost,
        subtotal,
        discount,
        total_tax
    };
  },
  
  update: async(entry, entryIndex)=>{
    const recordData = await readFilePro(filepath);
    const fileData = JSON.parse(recordData);
    fileData[entryIndex]["exit_interchange"] = entry.interchange;
    fileData[entryIndex]["exit_date_time"] = entry.date_time;
    const returnData = fileData[entryIndex];
    await writeFilePro(filepath, JSON.stringify(fileData));
    return returnData;
  }

};

module.exports = TollService;