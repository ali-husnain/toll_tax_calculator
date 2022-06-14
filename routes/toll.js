const express = require('express');
const router = express.Router();

const tollController = require('../src/toll/toll_controller');

router.post('/vehicle-enter', function (request, response, next) {
  tollController.addVehicleEntry(request, response, next);
});

router.post('/vehicle-exit/:entryId', function (request, response, next) {
  tollController.exitVehicleWithTax(request, response, next);
});


module.exports = router;
