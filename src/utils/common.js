const PERKMCHARGES = 0.2;
const Common = {

  interChangesKm: ()=> {
        return {
            "Zero Point": 0,
            "NS Interchange": 5,
            "Ph4 Interchange": 10,
            "Ferozpur Interchange": 17,
            "Lake City Interchange": 24,
            "Raiwand Interchange": 29,
            "Bahria Interchange": 34
        };
  },
  
  getDistanceCharges: (entry) => {
      const distanceCharges = parseFloat(
          (
              PERKMCHARGES * (Common.interChangesKm()[entry.exit_interchange] - Common.interChangesKm()[entry.interchange])
          ).toFixed(2)
      );
      if (["Saturday", "Sunday"].includes(Common.getDayFromDate(entry.exit_date_time))) {
          return 1.5 * distanceCharges
      }
      return distanceCharges;
  },
  
  getDiscount: (entry)=> {
      const specialDay = Common.getDate(entry.date_time) + " " + Common.getMonthFromDate(entry.date_time);
      const weekDay = Common.getDayFromDate(entry.date_time);
      const vehicleDigitNum = entry.number_plate.split("-")[1];
      if (
          (["Monday", "Wednesday"].includes(weekDay) && vehicleDigitNum % 2 === 0)
          || (["Tuesday", "Thursday"].includes(weekDay) && vehicleDigitNum % 2 !== 0)
      ) {
          return 0.1; //10% discount
      } else if (["23 March", "14 August","25 December"].includes(specialDay)) {
          return 0.5;
      }
      return 0; //no discount
  },
    
  getDayFromDate: (dateString) => {
        switch (new Date(dateString).getDay()) {
            case 0:
                return "Sunday";
            case 1:
                return "Monday";
            case 2:
                return "Tuesday";
            case 3:
                return "Wednesday";
            case 4:
                return "Thursday";
            case 5:
                return "Friday";
            case 6:
                return "Saturday";
        }
    },
    
    getMonthFromDate: (dateString)=> {
        return new Date(dateString).toLocaleString('default', { month: 'long' });
    },

    getDate: (dateString)=> {
        return new Date(dateString).getUTCDate();
    }
};

module.exports = Common;
