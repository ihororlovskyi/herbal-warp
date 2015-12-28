import React from 'react'
import Radium from 'radium'
import data from './../data'

class Category extends React.Component {
  render() {
    const category = data.lookupCategory(this.props.params.category)

    return (
      <div style={styles.footer}>
        {this.props.children}
      </div>
    )
  }
}

const styles = {
  footer: {
    flex: '1 100%',
    // textAlign: 'center',
    background: '#ccc',
    padding: '10px',

    '@media (min-width: 600px)': {
      flex: '4 0px',
      order: '3',
    },
    // padding: '10px',
    // maxWidth: '800px',
    // margin: '0 auto',
    // boxSizing: 'border-box',
  },
}

module.exports = Radium(Category)
