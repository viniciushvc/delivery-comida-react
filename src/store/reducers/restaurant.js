import { Restaurant } from '../types'

const INITIAL_STATE = {
  restaurants: [],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Restaurant.GET:
      return {
        ...state,
        restaurants: action.payload.restaurants,
      }
    default:
      return state
  }
}
