import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import { Login, Home } from './pages'

import { Header } from './components'

export default function Routes() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Home} />
        <Route path="/category/:id" component={Home} />
      </Switch>
    </Router>
  )
}
