// var assert = require('assert');
// var debounce = require('../dist/debounce');

// describe('debounce', function() {
//   it('debounces functions that are executed straight away', function(done) {
//       var counter = 0;
//       var incr = function(){ counter++; };
//       var debounced = debounce(incr, 32);

//       debounced();
//       debounced();

//       setTimeout(function() {
//         assert.equal(counter, 1);
//         done();
//       }, 32);
//   });

//   it('debounces functions when triggered after a certain time', function(done) {
//       var counter = 0;
//       var incr = function(){ counter++; };
//       var debounced = debounce(incr, 10);

//       // call it initially
//       debounced();

//       setTimeout(function() {
//         // call it 5 ms in and expect it to be debounced
//         debounced();
//       }, 5);

//       setTimeout(function() {
//         assert.equal(counter, 1);
//         done();
//       }, 20);
//    });

//   it('gets called with the correct context set', function(done) {
//     var ctx;
//     var debounced = debounce(function test() {
//       ctx = this;
//     }, 20);

//     debounced.call(11);
//     debounced.call(22);

//     setTimeout(function() {
//       assert.equal(ctx, 22);
//       done();
//     }, 45);
//   });

//  // it('debounces recursively', function(done) {
//  //    var counter = 0;
//  //    var debounced = debounce(function(){
//  //      counter++;
//  //      if (counter < 10) debounced();
//  //    }, 10);

//  //    debounced();

//  //    setTimeout(function() {
//  //      assert.equal(counter, 1);
//  //      // equal(counter, 1, 'incr was debounced');
//  //      done();
//  //    }, 96);
//  //  });
// });
