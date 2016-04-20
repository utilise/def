var expect = require('chai').expect
  , def = require('./')

describe('def', function() {
  it('should define prop and return it', function() {
    var o = {}
    expect(def(o, 'a', 5)).to.eql(5)
    expect(o.a).to.eql(5)
  })

  it('should define writable property', function() {
    var o = {}
    expect(def(o, 'a', 5, 1)).to.eql(5)
    o.a = 6
    expect(o.a).to.eql(6)
  })

})