import store from './index'

describe('the counter', () => {
  it('should have the correct initial state', () => {
    expect(store.state).toEqual({ count: 0 })
  })

  it('should contain the actions', () => {
    const actions = Object.keys(store.actions)
    expect(actions).toEqual(['incrementAsync'])
  })

  it('should contain the mutations', () => {
    const mutations = Object.keys(store.mutations)
    expect(mutations).toEqual(['INCREMENT', 'DECREMENT'])
  })
})

describe('The increment mutation', () => {
  it('should increment', () => {
    const state = { count: 6 }
    store.mutations.INCREMENT(state)
    expect(state.count).toEqual(7)
  })
})

describe('The decrement mutation', () => {
  it('should decrement', () => {
    const state = { count: 0 }
    store.mutations.DECREMENT(state)
    expect(state.count).toEqual(-1)
  })
})

describe('The async increment action', () => {
  it('should increment asynchrnoously', () => {
    // Stub out a function to keep track of what commits the action would make
    const commits = []
    const commitHelper = (action) => {
      commits.push(action)
    }

    store.actions.incrementAsync(commitHelper)
    // Since the increment is async, we expect no effect at this point
    expect(commits).toEqual([])

    setTimeout(() => {
      // After 201 ms, an INCREMENT commit should have taken place
      expect(commits).toEqual(['INCREMENT'])
    }, 201)
  })
})
