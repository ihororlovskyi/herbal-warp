import React from 'react'
import { Link } from 'react-router'
import data from './../data'
import Ink from 'react-ink'
import Radium from 'radium'

class List extends React.Component {
  render() {
    const category = data.lookupCategory(this.props.params.category)

    return (
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
    )
  }
}

const selected = { 
  background: '#ccc',
}

const styles = {
  ul: {
    flex: '1 100%',
    listStyle: 'none',
    margin: '0',
    padding: '0 40px 0 0',
    // display: 'flex',
    // flexFlow: 'row wrap',
    // position: 'relative',
    background: '#ccc',
    // width: '200px',

    '@media (min-width: 600px)': {
      flex: '1 auto',
      order: '2',
      padding: '0',
    },
  },
  li: {
    // flex: '1 0px',
    // position: 'relative',
    // width: '100%',
    // paddingBottom: '20%',
    // overflow: 'hidden',
  },
  a: {
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0,
    background: '#ddd',
    position: 'relative',
    padding: '10px',
    display: 'block',
  }
}

module.exports = Radium(List)
