import { Category } from '../types'

const Categoryctions = {
  select: id => ({
    type: Category.SELECT,
    payload: { id },
  }),
  get: categories => ({
    type: Category.GET,
    payload: { categories },
  }),
  requestGet: () => ({
    type: Category.REQUEST_GET,
  }),
}

export default Categoryctions
