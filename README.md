# For Testing

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