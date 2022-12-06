var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var session = require("express-session")
var MySQLStore = require("express-mysql-session")(session)
var passport = require("passport")
var flash = require('connect-flash');
const cors=require("cors");
require("dotenv").config()

var user_route = require('./routes/user_route')
var account_route = require('./routes/account_route')
var history_route = require('./routes/hist_route')
var session_connection = require("./config/session_database")


var app = express();
const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}
app.use(cors(corsOptions))

var session_store = new MySQLStore({
  expiration: 1000*60*60*24*30,
  createDatabaseTable: true,
  schema: {
    tableName: "session_infomation",
    columnNames: {
      session_id: "session_id",
      expires: "expires",
      data: "data"
    }
  }
}, session_connection)


app.use(session({
  secret: process.env.SESSION_SECRET,
  store: session_store,
  saveUninitialized:false,
  cookie: { maxAge: 1000*60*60*24*30 },
  resave: false
}));


app.use(flash());
app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cookieParser());


app.use(passport.initialize())
app.use(passport.session())
require('./config/passport')


app.use('/user', user_route)
app.use('/account', account_route)
app.use('/history', history_route)

module.exports = app;