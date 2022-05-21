const express = require('express');
const app = express();
require('./core/app_config')(app,  express);

//default route
app.get('/', (request, response) => {
  response.send('Server running...');
});

// other routes
const routes = require('./routes/');
routes.forEach((route)=>{
  app.use(route.url, route.actions);
});

//error handling
require('./core/error_handler')(app);

// Starting server
app.listen(8001);
