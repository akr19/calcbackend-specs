var expect = require('chai').expect;
var request = require('request');

var url = process.env.URL || 'http://localhost:8000'


describe('server response', function () {
  it('should return 200', function (done) {
    var options = { url: url };
    request.get(options, function (err, res, body) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
  it('should return proper content in body', function (done) {
    var options = { url: url };
    request.get(options, function (err, res, body) {
      expect(res.body).to.equal('Hello world\n');
      done();
    });
  });
});
