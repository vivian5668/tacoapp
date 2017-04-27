/* globals it: true} */
/* globals describe: true} */
/* globals before: true */
// --- Above are JSHint's Linter Settings for this particular file --- //
var expect = require('chai').expect;
var request = require('supertest');
var app = require('../index');
var db = require('../models');

// +------------------------------+
// |      Using a DB / Setup      |
// +------------------------------+

before(function(done) { // Will run before our tests run. Useful for ensuring the database is ready for our tests!
  db.sequelize.sync({force: true}) // sequelize.sync is a part of sequelize. We pass in force:true to have migrations sync up
  .then(function() {
    done(); // created by the 'before()' function to let it know that the promise callback is done. Because a-sync.
  })
})


// +----------------------+
// |      GET /tacos      |
// +----------------------+

describe('GET /tacos', function() {
  it('should return a 200 response', function(done) {
    request(app).get('/tacos')
    .expect(200, done);
  });
});

// +-----------------------+
// |      POST /tacos      |
// +-----------------------+

describe('POST /tacos', function() {
  it('should create and redirect to /tacos after posting a valid taco', function(done) {
    request(app).post('/tacos')
    .type('form') //  sets the type of data we can send to the app. We want form submittion
    .send({ // set the data in the 'form' type.
      name: 'Cheesy Gordita Crunch',
      amount: 6000
    })
    .expect('Location', '/tacos') // Our location should change to /tacos. So we ask if this is what happened
    .expect(302, done); // 302 is a status code for redirecting. A second assertion on what is essentially the same task.
  });
});

// +-------------------------+
// |      DELETE /tacos      |
// +-------------------------+

describe('DELETE /tacos/:id', function() {
  it('should return a 200 response on deleting a valid taco', function(done) {
    request(app).delete('/tacos/1') // send a DELETE to the /taco/1 route
    .end(function(err, response) { // We use end() so we can access the response message body. Else, we have no other easy way to do so
      expect(response.statusCode).to.equal(200); // We use methods this time to assert our tests. These are BDD (behavior driven development);
      expect(response.body).to.have.property('msg');
      expect(response.body.msg).to.equal('success');
      done(); // call done() so that it() knows we are finished.
    });
  });
});


