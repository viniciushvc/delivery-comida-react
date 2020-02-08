import { Server, Model, Factory } from 'miragejs'
import faker from 'faker'

export function makeServer(environment = 'development') {
  return new Server({
    environment,

    models: {
      category: Model,
      restaurant: Model,
    },

    factories: {
      category: Factory.extend({
        name: faker.name.findName(),
      }),
      restaurant: Factory.extend({
        name: faker.name.findName(),
      }),
    },

    seeds(server) {
      server.createList('category', 5)
      server.createList('restaurant', 5)
    },

    routes() {
      this.namespace = 'api'

      this.get('/categories')
      this.get('/restaurants')
    },
  })
}
