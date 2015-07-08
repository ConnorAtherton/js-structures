// var nativeSortCalled;
// var oldSort = Array.prototype.sort;
// var assert = require('assert');
// var sort = require('./');

// describe('sort', function() {

//   it('will sort an array', function() {
//     var arr = [5, 1, 2, 4, 3];
//     var sorted = sort(arr);
//     assert(!nativeSortCalled);
//     assert.deepEqual(sorted, [1, 2, 3, 4, 5]);
//   });

//   it('sorts better than n^2', function() {
//     var arr = [];
//     for (var i = 0; i < 10000; i++) {
//       arr.push(Math.random());
//     }
//     sorted = sort(arr);
//     var lastNumber = sorted[0];
//     for (i = 1; i < 10000; i++) {
//       if (lastNumber > sorted[i]) {
//         throw new Error("array isn't sorted");
//       }
//       lastNumber = sorted[i];
//     }
//   });
// });
