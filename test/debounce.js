// it('debounce', function() {
//     var counter = 0;
//     var incr = function(){ counter++; };
//     var debouncedIncr = _.debounce(incr, 32);
//     debouncedIncr();
//     debouncedIncr();
//
//     _.delay(debouncedIncr, 16);
//     _.delay(function(){
//       equal(counter, 1, 'incr was debounced');
//       start();
//     }, 96);
//  });
//
//  asyncTest('debounce asap recursively', 2, function() {
//     var counter = 0;
//     var debouncedIncr = _.debounce(function(){
//       counter++;
//       if (counter < 10) debouncedIncr();
//     }, 32, true);
//     debouncedIncr();
//     equal(counter, 1, 'incr was called immediately');
//     _.delay(function(){ equal(counter, 1, 'incr was debounced'); start(); }, 96);
//   });
