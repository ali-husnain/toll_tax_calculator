const filepath = '../../database/entries.json';
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');
const Common = require('../utils/common');

const TollService = {

   create: async (body) => {
    const entry = { uuid: uuidv4(), ...body };
    const recordData = await fs.readFileSync(path.resolve(__dirname,filepath)).toString();
    const fileData = JSON.parse(recordData);
    fileData.push(entry);
    fs.writeFile(path.resolve(__dirname, filepath), JSON.stringify(fileData), function (err, data) { 
            if (err) console.log(err);
    });

    return entry;
  },

  calculateTax: async(entry) => {
    const base_rate = 20;
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
    const recordData = await fs.readFileSync(path.resolve(__dirname,filepath)).toString();
    const fileData = JSON.parse(recordData);
    fileData[entryIndex]["exit_interchange"] = entry.interchange;
    fileData[entryIndex]["exit_date_time"] = entry.date_time;
    const returnData = fileData[entryIndex];
    fs.writeFile(path.resolve(__dirname, filepath), JSON.stringify(fileData), function (err, data) { 
            if (err) console.log(err);
    });
    return returnData;
  }

};

module.exports = TollService;