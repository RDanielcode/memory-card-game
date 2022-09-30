export const initialState = {
  fail: false,
  good: false,
  finish: false
}

export const actionTypes = {
  fail: 'FAIL',
  good: 'GOOD',
  finish: 'FINISH',
  initial: 'INITIAL',
  intro: 'INTRO'
}

const reducerObj = (state) => ({
  [actionTypes.fail]: {
    ...state,
    fail: true
  },

  [actionTypes.good]: {
    ...state,
    good: true
  },

  [actionTypes.finish]: {
    ...state,
    finish: true
  },

  [actionTypes.initial]: {
    ...initialState
  },

  [actionTypes.intro]: {
    ...state,
    intro: true
  }
})

export const reducer = (state, action) => {
  return reducerObj(state)?.[action.type] ?? (state)
}
