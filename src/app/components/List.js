import React from 'react'
import { Link } from 'react-router'
import data from './../data'
import Ink from 'react-ink'

import Clearfix from './Clearfix'

class List extends React.Component {
  render() {
    const category = data.lookupCategory(this.props.params.category)

    return (
      <div style={{background: '#ddd'}}>
        <div style={{padding: '10px'}}>
          <h2>{category.name}</h2>
          <p>{category.description}</p>
        </div>
        <Clearfix>
          <ul style={ul}>
            {category.items.map((item, index) => (
              <li style={li} key={index}>
                <Link to={`/${category.name}/${item.name}`} style={a} activeStyle={selected}>
                  {item.name}
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
  maxWidth: '25%',
}

const a = { 
  position: 'relative',
  padding: '10px',
  display: 'block',
}

const selected = { 
  background: '#ccc',
}

module.exports = List
