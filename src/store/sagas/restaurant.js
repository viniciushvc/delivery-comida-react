import { all, takeLatest, put } from 'redux-saga/effects'

import RestaurantActions from '../actions/restaurant'

import { Restaurant } from '../types'

import api from '../../services/api'

function* getRestaurantsSaga() {
  try {
    const { data } = yield api.get('/restaurants')

    yield put(RestaurantActions.get(data.restaurants))
  } catch (err) {
    console.log(err)
  }
}

export function* getRestaurants() {
  yield all([yield takeLatest(Restaurant.REQUEST_GET, getRestaurantsSaga)])
}
