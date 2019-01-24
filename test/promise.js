const assert = require('assert')
const sum = function() {
  const arr = Array.from(arguments)

  return arr.length ? arr.reduce((a, b) => a + b) : 0
}
describe('#hello.js', () => {
  before(function() {
    console.info('before')
  })
  after(function() {
    console.info('after')
  })
  beforeEach(function() {
    console.log('  beforeEach:')
  })

  afterEach(function() {
    console.log('  afterEach.')
  })
  describe('#sum()', () => {
    it('sum() should return 0', () => {
      assert.strictEqual(sum(), 0)
    })

    it('sum(1) should return 1', () => {
      assert.strictEqual(sum(1), 1)
    })

    it('sum(1, 2) should return 3', () => {
      assert.strictEqual(sum(1, 2), 3)
    })

    it('sum(1, 2, 3) should return 6', () => {
      assert.strictEqual(sum(1, 2, 3), 6)
    })
  })
})
