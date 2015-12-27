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
      <div style={{background: '#ddd'}}>
        <div style={{padding: '10px'}}>
          <h2>{category.name}</h2>
          <p>{category.description}</p>
        </div>
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
      </div>
    )
  }
}

const selected = { 
  background: '#ccc',
}

const styles = {
  ul: {
    listStyle: 'none',
    margin: '0',
    padding: '0',
    display: 'flex',
    flexFlow: 'row wrap',
    position: 'relative',

  },
  li: {
    flex: '1 0px',
    position: 'relative',
    width: '100%',
    paddingBottom: '25%',
  },
  a: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: '0 10px',
  }
}

module.exports = Radium(List)
