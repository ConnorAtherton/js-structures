import assert from 'assert'
import * as encoding from '../../dist/strings/encoding'

describe('encoding', function() {
  describe('runLength', () => {
    [
      ["3[a]2[bc]", "aaabcbc"],
      ["3[a2[c]]", "accaccacc"],
      ["2[abc]3[cd]ef", "abcabccdcdcdef"],
    ].forEach(([encoded, decoded]) => {
      it(`can decode ${encoded}`, () => {
        assert.deepEqual(
          encoding.runLength.decode(encoded),
          decoded
        )
      })
    })
  })
})

