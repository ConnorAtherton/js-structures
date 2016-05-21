import assert from 'assert'
import omit from '../../dist/object/omit'

describe('object', function() {
  describe('omit', function() {
    it('omits keys correctly', () => {
      let obj = {a: 1, b: 2, c: 3}
      assert.deepEqual(omit(obj, ['a']), {b: 2, c: 3})
    })
  })
});
