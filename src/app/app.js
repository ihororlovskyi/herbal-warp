import React from 'react'
import { render } from 'react-dom'
import { createHashHistory, createHistory, useBasename } from 'history'
import { Router, Route, Link } from 'react-router'
import Radium from 'radium'

import App from './components/App'
import Index from './components/Index'
import HeaderMenu from './components/HeaderMenu'
import Category from './components/Category'
import List from './components/List'
import Item from './components/Item'
import Footer from './components/Footer'

const history = createHashHistory({
  queryKey: false
});

// const history = useBasename(createHistory)({
//   basename: '/'
// })

render((
  <Router history={history}>
    <Route path="/" component={App}>
      <Route path=":category" components={{ content: Category, sidebar: List }}>
        <Route path=":item" component={Item} />
      </Route>
    </Route>
  </Router>
), document.getElementById('app'))
