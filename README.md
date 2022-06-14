# Description

## Introduction

```bash
Imagine a government department that is responsible for collecting tolls on a major road in
Lahore, like the ring road. Tolls are a tax calculated by the agency to keep the road maintained,
and therefore all vehicles that enter the ring road have to pay a toll tax.
Tolls are calculated based on the following:
1. Entry Point
2. Exit Point
3. Day of the week
4. Number plate in the format (LLL-NNN) where L is a letter and N is a number.
5. Special discount days
Rules:
1. Toll tax has a base rate of rupees 20 - this is a base rate that is added to the cost the
moment a vehicle enters.
2. For all distance traveled, the customer will be charge 0.2 rupees per KM
3. The distance rate will be 1.5x on weekends (Sat/Sun) - determine at exit point
4. For Mon and Wed, cars with even number in number plate will be given 10% discount,
and for Tues and Thurs, cars with odd number in number plate will be given 10%
discount - for Fri/Sat/Sun no difference on number plate - based on entry date/time
5. On 3 national holidays discount will be given of 50% (23rd march, 14th August, and 25th
December)
6. The actual toll is collected when the vehicle exits the road.
```

# Installation & Run Application 

### Step 1: npm install
### Step 2: npm run start
### Step 3: See screenshots to understand apis working

&nbsp;
&nbsp;
&nbsp;

# Apis Detail:

## 1. POST: http://localhost:8001/api/toll/vehicle-enter

### Payload: JSON
```
{
    "interchange": "Zero Point",
    "number_plate": "GAE-324",
    "date_time": "Sat, 21 May 2022 19:55:47 GMT"
}
```

### Response: JSON
```
{
    "code": 200,
    "status": "success",
    "message": "Enterance record added successfully.",
    "data": {
        "uuid": "97f87658-5ef4-4ae1-b3bd-0009f3a3312d",
        "interchange": "Zero point",
        "number_plate": "GAE-324",
        "date_time": "Sat, 21 May 2022 17:55:47 GMT"
    }
}
```
&nbsp;
&nbsp;
&nbsp;

## 2. POST: http://localhost:8001/api/toll/vehicle-exit/:entryId


### Payload: JSON
```
{
    "interchange": "Raiwand Interchange",
    "number_plate": "GAE-324",
    "date_time": "Sat, 21 May 2022 19:55:47 GMT"
}
```

### Response: JSON
```
{
    "code": 200,
    "status": "success",
    "message": "Calculated tax.",
    "data": {
        "base_rate": 20,
        "distance_cost": 8.7,
        "subtotal": 28.7,
        "discount": 0,
        "total_tax": 28.7
    }
}
```

&nbsp;
&nbsp;
&nbsp;

# Screenshots:
![ScreenShot](/screenshots/vehicle-enter.png)

![ScreenShot](/screenshots/vehicle-exit.png)
