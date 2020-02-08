import { all, takeLatest, put } from 'redux-saga/effects'

import CategoryActions from '../actions/category'

import { Category } from '../types'

import api from '../../services/api'

function* getCategoriesSaga() {
  try {
    const { data } = yield api.get('/categories')

    yield put(CategoryActions.get(data.categories))
  } catch (err) {
    console.log(err)
  }
}

export function* getCategories() {
  yield all([yield takeLatest(Category.REQUEST_GET, getCategoriesSaga)])
}
