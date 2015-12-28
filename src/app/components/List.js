import React from 'react'
import { Link } from 'react-router'
import data from './../data'
import Ink from 'react-ink'
import Radium from 'radium'

import Clearfix from './Clearfix'

class List extends React.Component {
  render() {
    const category = data.lookupCategory(this.props.params.category)

    return (
      <Clearfix>
        <ul style={styles.ul}>
          {category.items.map((item, index) => (
            <li style={styles.li} key={index}>
              <Link to={`/${category.name}/${item.name}`} style={styles.a} activeStyle={selected}>
                {item.name}
                <Ink/>
              </Link>
            </li>
          ))}
        </ul>
      </Clearfix>
    )
  }
}

const selected = { 
  background: '#ccc',
}

const styles = {
  ul: {
    listStyle: 'none',
    margin: '0 -10px',
    padding: '0',

    '@media (min-width: 600px)': {
    },
  },
  li: {
    position: 'relative',
    float: 'left',
    width: '25%',
    overflow: 'hidden',
    paddingBottom: '25%',
  },
  a: {
    position: 'absolute',
    top: '10px',
    left: '10px',
    right: '10px',
    bottom: '10px',
    background: '#ddd',
    // padding: '10px',
    display: 'block',
    // boxSizing: 'border-box',
  }
}

module.exports = Radium(List)
