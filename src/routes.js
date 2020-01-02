import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import { Home, Categories } from './pages'

import { Header } from './components'

export default function Routes() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/categories" component={Categories} />
        <Route path="/categories/new" component={Categories} />
      </Switch>
    </Router>
  )
}
