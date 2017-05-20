import store from './index'

describe('the store', () => {
  it('should have the correct initial state', () => {
    expect(store.state).toEqual({ counter: { count: 0 }})
  })
})
