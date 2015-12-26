import React from 'react'
import { IndexLink, Link } from 'react-router'
import data from './../data'

class HeaderMenu extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <li><IndexLink to={'/'} activeStyle={selected}>home</IndexLink></li>
          {data.getAll().map((category, index) => (
            <li key={index}>
              <Link to={`/${category.name}`} activeStyle={selected}>{category.name}</Link>
            </li>
          ))}
        </nav>
      </div>
    )
  }
}

const selected = { color: '#f5a623' }

module.exports = HeaderMenu
