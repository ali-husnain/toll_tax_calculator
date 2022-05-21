const tollService = require('./toll_service');
const responder = require('../utils/responder');
const filepath = '../../database/entries.json';
const fs = require('fs');
const path = require('path');

let TollController = {

  createEntryRecord: async (request, response, next) => {
    try {
      const body = request.body;
      const detail = await tollService.create(body);
      responder.sendResponse(response, 200, "success", detail, "Enterance record added successfully.");
    } catch (error) {
      return next(error);
    }
  },

  calculateVehicleTax: async (request, response, next) => {
    try {
      const id = request.params.entryId;
      if(!id) {
          responder.sendResponse(response, 403, "error", null, "Id not found");
          return;
      }
      const recordedData = await fs.readFileSync(path.resolve(__dirname,filepath)).toString();
      const entryIndex = JSON.parse(recordedData).findIndex((record)=> record.uuid == id);
      if(entryIndex === -1) {
          responder.sendResponse(response, 404, "error", null, "Entry not found");
          return;
      }
      const body = request.body;
      const entry = await tollService.update(body, entryIndex);
      const tax = await tollService.calculateTax(entry);
      responder.sendResponse(response, 200, "success", tax, "Calculated tax.");
    } catch (error) {
      return next(error);
    }
  }

};

module.exports = TollController;
