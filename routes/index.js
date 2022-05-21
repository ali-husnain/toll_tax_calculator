
//routes
const tollRouter = require('./toll');

module.exports = [
    {
        "url": "/api/toll",
        "actions": tollRouter,
    }
]