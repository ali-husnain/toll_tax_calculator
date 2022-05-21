const morgan = require('morgan');
const bodyParser = require('body-parser');

module.exports = (app, express) => {
    //packaging...
    app.use(morgan('tiny'))
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
}