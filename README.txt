For Testing.......

Step 1: npm install

Step 2: See PNG Images to understand both apis


Create Two Apis

1. POST: http://localhost:8001/api/toll/add-entry

Payload: Json type

{
    "interchange": "Zero Point",
    "number_plate": "GAE-324",
    "date_time": "Sat, 21 May 2022 19:55:47 GMT"
}

Response: json

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


2. POST: http://localhost:8001/api/toll/calculate-tax/:entryId


Payload: Json type

{
    "interchange": "Raiwand Interchange",
    "number_plate": "GAE-324",
    "date_time": "Sat, 21 May 2022 19:55:47 GMT"
}

Response: json

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
