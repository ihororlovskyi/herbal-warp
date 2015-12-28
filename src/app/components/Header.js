import React from 'react'
import Radium from 'radium'
import { IndexLink, Link } from 'react-router'
import data from './../data'
import Ink from 'react-ink'

import Clearfix from './Clearfix'

class Header extends React.Component {
  render() {
    return (
      <div style={styles.header}>
        <ul style={styles.ul}>
          <Clearfix>

            <li style={styles.li}>
              <IndexLink to={'/'} style={styles.a} activeStyle={selected}>
                home
                <Ink/>
              </IndexLink>
            </li>

            {data.getAll().map((category, index) => (
              <li key={index} style={styles.li}>
                <Link to={`/${category.name}`} style={styles.a} activeStyle={selected}>
                  {category.name}
                  <Ink/>
                </Link>
              </li>
            ))}

          </Clearfix>
        </ul>
      </div>
    )
  }
}

const selected = { 
  background: '#ddd',
}

const styles = {
  header: {
    flex: '1 100%',

    '@media (min-width: 600px)': {
      order: '1',
    },
  },
  ul: {
    listStyle: 'none',
    margin: '0',
    padding: '0',
    // maxWidth: '800px',
  },
  li: {
    float: 'left',
  },
  a: {
    position: 'relative',
    padding: '10px',
    display: 'block',
  },
}

module.exports = Radium(Header)
