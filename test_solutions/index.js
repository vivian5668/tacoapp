/* globals it: true} */
/* globals describe: true} */
// --- Above are JSHint's Linter Settings for this particular file --- //

/*
  Mocha is launching this page. Kind of like how we launch node or nodemon.
  Because Mocha launches this page, functions like "describe()" and "it()"
  are available to us.
*/

var expect = require('chai').expect;
var request = require('supertest');
var app = require('../index');
// chai is the testing module that performs these assertions. (eg: does this function give this result?)
// supertests will perform http RESTful routings. Thus simulating a front-end user on our site.
// app is our application back-end.


// +--------------------------+
// |      Out First Test      |
// +--------------------------+
describe('GET /', function() { // describe is a part of Mocha. The string is entirely for readability. Shows up in the terminal when the test is ran.
  // Define a test. The next 4 lines are the test
  it('should return a 200 response', function(done) { // "it" is a part of mocha. The string we pass in shows up in the terminal. Does not change the end result. Entirely for debugging/readability
    request(app).get('/') // We pass our application into supertest so that supertest can do a GET on '/'
    .expect(200, done); // expect is a part of chai. We tell chai what we want when it comes back.
  });
})

