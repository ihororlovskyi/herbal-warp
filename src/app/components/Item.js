import React from 'react'
import data from './../data'

class Item extends React.Component {
  render() {
    const { category, item } = this.props.params
    const menuItem = data.lookupItem(category, item)

    return (
      <div style={{background: '#ccc', padding: '10px'}}>
        <h1>{menuItem.name}</h1>
        <a href={menuItem.bandcamp} target='_blank'>bandcamp</a>
      </div>
    )
  }
}

module.exports = Item
