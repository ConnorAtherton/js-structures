var assert = require('assert');
var throttle = require('../src/throttle');

describe('throttle', function() {
  it ('should work', function(done) {
    var counter = 0;
    var incr = function(){
      counter++;
    };
    var throttledIncr = throttle(incr, 30);

    throttledIncr();
    throttledIncr();

    setTimeout(function(){
      assert.equal(counter, 2)
      done()
    }, 60);
  })

  it ('throttle functions return values', function(done) {
    var counter = 0;
    var incr = function(){ return ++counter; };
    var throttledIncr = throttle(incr, 32);
    var result = throttledIncr();

    setTimeout(function(){
      assert.equal(result, 1)
      assert.equal(counter, 1)
      done()
    }, 4);
  })

  it("won't execute more than once within the threshold", function(done) {
    var counter = 0;
    var incr = function(){
      counter++;
    };
    var throttledIncr = throttle(incr, 30);

    throttledIncr();
    throttledIncr();

    setTimeout(function(){
      assert.equal(counter, 1)
      done()
    }, 24);
  });

  it('gets called with correct context set', function(done) {
    var ctx;

    var throttled = throttle(function() {
      ctx = this;
    }, 10);

    throttled.call(11);
    throttled.call(22);

    setTimeout(function() {
      assert.equal(ctx, 22);
      done();
    }, 20)
  });

  it('gets called with arguments', function(done) {
    var args;

    var throttled = throttle(function() {
      args = [].slice.call(arguments);
    }, 10);

    throttled(11, 22, 33);
    throttled(22, 33, 44);

    setTimeout(function() {
      assert.deepEqual(args, [22, 33, 44]);
      done();
    }, 25);
  });
});
