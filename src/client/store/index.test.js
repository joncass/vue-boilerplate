import { actions } from './index'
import { mutations } from './index'
import store from './index'

describe('the store', () => {
  it('should have the correct initial state', () => {
    expect(store.state).toEqual({ count: 0 })
  })

  it('should contain the actions', () => {
    const storeActionKeys = Object.keys(store._actions)
    const actionKeys = Object.keys(actions)
    expect(storeActionKeys).toEqual(actionKeys)
  })

  it('should contain the mutations', () => {
    const storeMutationKeys = Object.keys(store._mutations)
    const mutationKeys = Object.keys(mutations)
    expect(storeMutationKeys).toEqual(mutationKeys)
  })
})

describe('The increment mutation', () => {
  it('should increment', () => {
    const state = { count: 6 }
    mutations.INCREMENT(state)
    expect(state.count).toEqual(7)
  })
})

describe('The decrement mutation', () => {
  it('should decrement', () => {
    const state = { count: 0 }
    mutations.DECREMENT(state)
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

    actions.incrementAsync(commitHelper)
    // Since the increment is async, we expect no effect at this point
    expect(commits).toEqual([])

    setTimeout(() => {
      // After 201 ms, an INCREMENT commit should have taken place
      expect(commits).toEqual(['INCREMENT'])
    }, 201)
  })
})
