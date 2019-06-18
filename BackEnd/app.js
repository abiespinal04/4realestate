const express = require('express');
const app = express();
const Sequelize = require('sequelize');
const morgan = require('morgan');
const bodyParser = require('body-parser');
// const StudentRoute = require('./api/routes/student')
const ClientRoute = require('./api/routes/clients')

//DATABASE
const db = require('./config/dabase')


//TEST DB
db.authenticate().
    then(() => console.log('Database connection successful'))
    .catch((error) => console.log('Database connection failed', error))

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use((req, res, next) => {
    /*
    //This header allows access to only the specified client
    // res.header('Access-Control-Allow-Origin', 'http:/my-cool-page.com');
    */
    //This header allows access to every client domain
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
      if(req.method === 'OPTIONS'){
          res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
          return res.status(200).json({});
      }
      next();
});


app.use('/clients', ClientRoute)


module.exports = app;