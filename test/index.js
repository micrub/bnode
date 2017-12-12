import { expect } from 'chai'
import Core from '../src/index'

describe('"Core" module exports', () => {
  it('should an instance of "Object".', () => {
    expect(Core).to.be.instanceOf(Object)
  })
  it('should have `bitcoin` property.', () => {
    expect(Core.bitcoin).to.be.instanceOf(Object)
  })
  it('should have `bitcoinlib` property.', () => {
    expect(Core.bitcoinlib).to.be.instanceOf(Object)
  })
})

