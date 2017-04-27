/* globals it: true} */
/* globals describe: true} */
/* globals before: true */
// --- Above are JSHint's Linter Settings for this particular file --- //
var expect = require('chai').expect;
var request = require('supertest');
var app = require('../index');
var db = require('../models');


