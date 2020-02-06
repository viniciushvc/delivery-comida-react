import { Category } from '../types'

const INITIAL_STATE = {
  categories: [],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Category.GET:
      return {
        ...state,
        categories: action.payload.categories,
      }

    default:
      return state
  }
}
