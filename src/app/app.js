import React from 'react'
import { render } from 'react-dom'
import { createHashHistory, createHistory, useBasename } from 'history'
import { Router, Route, Link } from 'react-router'
import Radium from 'radium'
import data from './data'

import Index from './components/Index'
import HeaderMenu from './components/HeaderMenu'

const history = createHashHistory({
  queryKey: false
});

// const history = useBasename(createHistory)({
//   basename: '/'
// })

class Category extends React.Component {
  render() {
    const category = data.lookupCategory(this.props.params.category)

    return (
      <div>
        {this.props.children || (
          <p>{category.description}</p>
        )}
      </div>
    )
  }
}

class CategorySidebar extends React.Component {
  render() {
    const category = data.lookupCategory(this.props.params.category)

    return (
      <div>
        <h2>{category.name}</h2>
        <ul>
          {category.items.map((item, index) => (
            <li key={index}>
              <Link to={`/${category.name}/${item.name}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

class Item extends React.Component {
  render() {
    const { category, item } = this.props.params
    const menuItem = data.lookupItem(category, item)

    return (
      <div>
        <h1>{menuItem.name}</h1>
        <a href={menuItem.price} target='_blank'>bandcamp</a>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    const { content, sidebar } = this.props

    return (
      <div>
        <div className="Sidebar">
          <HeaderMenu />
        </div>
        <div className="Sidebar">
          {sidebar}
        </div>
        <div className="Content">
          {content || <Index />}
        </div>
      </div>
    )
  }
}

render((
  <Router history={history}>
    <Route path="/" component={App}>
      <Route path=":category" components={{ content: Category, sidebar: CategorySidebar }}>
        <Route path=":item" component={Item} />
      </Route>
    </Route>
  </Router>
), document.getElementById('app'))
