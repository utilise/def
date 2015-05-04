var expect = require('chai').expect
  , def = require('./')

describe('def', function() {
  it('should define prop and return it', function() {
    var o = {}
    expect(def(o, 'a', 5)).to.eql(5)
    expect(o.a).to.eql(5)
  })
})