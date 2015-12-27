import React from 'react'
import data from './../data'

class Category extends React.Component {
  render() {
    const category = data.lookupCategory(this.props.params.category)

    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

module.exports = Category
