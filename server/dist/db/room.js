'use strict';

var nedb = require('nedb');
var path = require('path');
module.exports = new nedb({ filename: path.join(__dirname, '..', '..', 'db', 'roomDB.json'), autoload: true });