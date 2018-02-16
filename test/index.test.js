/* globals it: true} */
/* globals describe: true} */
// --- Above are JSHint's Linter Settings for this particular file --- //

var expect = require('chai').expect;
var request = require('supertest');
var app = require('../index'); //app is now nickname of our server


//now we write a test
describe('GET /', function () {
	it('should return a response 200', function(done) {
		request(app).get('/')
		  .expect(200,done);
	});
})