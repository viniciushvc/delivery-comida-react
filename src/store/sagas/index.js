import { all, fork } from 'redux-saga/effects'

import { getCategories } from './category'
import { getRestaurants } from './restaurant'

export default function* rootSaga() {
  yield all([fork(getCategories), fork(getRestaurants)])
}
