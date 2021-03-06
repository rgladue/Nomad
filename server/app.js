var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');



const db = require('./configs/db.config');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const citiesRouter = require('./routes/cities');
const userInputsRouter = require('./routes/userInputs');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/userinputs', userInputsRouter(db));
app.use('/cities', citiesRouter(db));
app.use('/users', usersRouter(db));

module.exports = app;
