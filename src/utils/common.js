const PERKMCHARGES = 0.2; //20% charges

const INTERCHANGESGAP = {
    "Zero Point": 0,
    "NS Interchange": 5,
    "Ph4 Interchange": 10,
    "Ferozpur Interchange": 17,
    "Lake City Interchange": 24,
    "Raiwand Interchange": 29,
    "Bahria Interchange": 34
};

const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const Common = {
  
  getDistanceCharges: (entry) => {
      const distanceCharges = parseFloat(
        (PERKMCHARGES * (INTERCHANGESGAP[entry.exit_interchange] - INTERCHANGESGAP[entry.interchange])).toFixed(2)
      );
      
      const currentDay = WEEKDAYS[new Date(entry.exit_date_time).getDay()];
      if (["Saturday", "Sunday"].includes(currentDay)) {
        return 1.5 * distanceCharges
      }
      return distanceCharges;
  },
  
  getDiscount: (entry)=> {
      const specialDay = Common.getDate(entry.date_time) + " " + Common.getMonthFromDate(entry.date_time);
      const currentDay = WEEKDAYS[new Date(entry.date_time).getDay()];
      const vehicleDigitNum = entry.number_plate.split("-")[1];
      
      if (["23 March", "14 August", "25 December"].includes(specialDay)) {
          return 0.5; //50% discount
      }
      
      if (
          (["Monday", "Wednesday"].includes(currentDay) && vehicleDigitNum % 2 === 0)
          || (["Tuesday", "Thursday"].includes(currentDay) && vehicleDigitNum % 2 !== 0)
      ) {
          return 0.1; //10% discount
      }
      
      return 0; //no discount
  },
    
    
  getMonthFromDate: (dateString)=> {
    return new Date(dateString).toLocaleString('default', { month: 'long' });
  },

  getDate: (dateString)=> {
    return new Date(dateString).getUTCDate();
  }
};

module.exports = Common;
