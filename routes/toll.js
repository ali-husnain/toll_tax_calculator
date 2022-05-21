const express = require('express');
const router = express.Router();

const tollController = require('../src/toll/toll_controller');

router.post('/add-entry', function (request, response, next) {
  tollController.createEntryRecord(request, response, next);
});

router.post('/calculate-tax/:entryId', function (request, response, next) {
  tollController.calculateVehicleTax(request, response, next);
});


module.exports = router;
