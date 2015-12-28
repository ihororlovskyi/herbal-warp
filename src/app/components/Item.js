import React from 'react'
import Radium from 'radium'
import data from './../data'

class Item extends React.Component {
  render() {
    const { category, item } = this.props.params
    const menuItem = data.lookupItem(category, item)

    return (
      <div style={styles.item}>
        <h1>{menuItem.name}</h1>
        <a href={menuItem.bandcamp} target='_blank'>bandcamp</a>
      </div>
    )
  }
}

const styles = {
  item: {
    // flex: '1 100%',
    // background: '#ccc',
    // maxWidth: '800px',
    // margin: '0 auto',
    // boxSizing: 'border-box',
  },
}

module.exports = Radium(Item)
