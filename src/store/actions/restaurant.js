import { Restaurant } from '../types'

const RestaurantActions = {
  select: id => ({
    type: Restaurant.SELECT,
    payload: { id },
  }),
  get: restaurants => ({
    type: Restaurant.GET,
    payload: { restaurants },
  }),
  requestGet: () => ({
    type: Restaurant.REQUEST_GET,
  }),
}

export default RestaurantActions
