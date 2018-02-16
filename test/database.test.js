/* globals it: true} */
/* globals describe: true} */
/* globals before: true */
// --- Above are JSHint's Linter Settings for this particular file --- //
var expect = require('chai').expect;
var request = require('supertest');
var app = require('../index');
var db = require('../models');

before(function (done) {
	db.sequelize.sync({ force: true}).then(function() {
		done(); //make sure database is clean. empty
	});
});


describe('GET/tacos', function() {
	it('should return a 200 response', function(done) {
		request(app).get('/tacos')
			.expect(200, done);
	});
})

describe('POST/tocos', function() {
	it('should create a taco and redirect to /tocas after positing a valid taco', function(done) {
		request(app).post('/tacos')
			.type('form')
			.send({
				name: 'Cheesy Gordita Crunch',
				amount: 6000
			})
			.expect('Location', '/tacos') //expect is now function of SuperTest
			.expect(302, done)
	})
})

describe('DELETE/tacos/:id', function() {
	it('should retunr a 200 responose on deleting a valid taco', function(done) {
		request(app).delete('/tacos/1')
			.end(function(err, response) {
				expect(response.statusCode).to.equal(200); //this is not the same expect, when it finishes, do some JS
				expect(response.body).to.have.property('msg'); //these expects are only put into end()
				expect(response.body.msg).to.equal('success');
				done();
			})
	})
})

//if you want to test database

// describe('taco database', function() {
// 	it('should create a taco in database', function() {
// 		db.create({

// 		})
// 		db.find({

// 		}).then(function(data) {

// 		})
// 	})
// })





