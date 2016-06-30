import assert from 'assert'
import sort from '../../dist/sort/heap'

describe('Sort::Heapsort', function() {
  it('will sort an array', function() {
    let arr = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7];

    let sorted = sort(arr);

    assert.deepEqual(sorted, [1, 2, 3, 4, 7, 8, 9, 10, 14, 16]);
  });
});
