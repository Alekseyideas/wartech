import * as actionTypes from './actions'

const initialState = {
  books: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_BOOK:
      return {
        ...state,
        books: {
          ...state.books
        }
      }
    case actionTypes.REMOVE_BOOK:
      return {
        ...state
      }
    default:
      return state
  }
}

export default reducer
