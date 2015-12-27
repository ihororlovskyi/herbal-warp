import React from 'react'
import { IndexLink, Link } from 'react-router'
import data from './../data'
import Ink from 'react-ink'

import Clearfix from './Clearfix'

class HeaderMenu extends React.Component {
  render() {
    return (
      <div>
        <Clearfix>
          <ul style={ul}>

            <li style={li}>
              <IndexLink to={'/'} style={a} activeStyle={selected}>
                home
                <Ink/>
              </IndexLink>
            </li>

            {data.getAll().map((category, index) => (
              <li key={index} style={li}>
                <Link to={`/${category.name}`} style={a} activeStyle={selected}>
                  {category.name}
                  <Ink/>
                </Link>
              </li>
            ))}

          </ul>
        </Clearfix>
      </div>
    )
  }
}

const ul = { 
  listStyle: 'none',
  margin: '0',
  padding: '0',
}

const li = { 
  float: 'left',
}

const a = {
  position: 'relative',
  padding: '10px',
  display: 'block',
}

const selected = { 
  background: '#ddd',
}

module.exports = HeaderMenu
