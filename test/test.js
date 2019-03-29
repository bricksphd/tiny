var assert = require('assert');
var tiny = require("../index.js");
describe('#tiny()', function () {
  it('should remove spaces from a string', function () {
    assert.equal(tiny("hello there"), "hellothere");
  });
});
