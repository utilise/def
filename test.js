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

  it('should define property on host if shadow', function() {
    var o = { host: { nodeName: 'div' }}
    def(o, 'api', 'yes')
    expect(o.host.api).to.eql('yes')
  })

  it('should use function name if available', function() {
    var o = {}
    def(o, function api(){})
    expect(o.api).to.be.a('function')
    o.api()
  })
})