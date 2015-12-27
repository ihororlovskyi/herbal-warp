import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <div style={footer}>
        Sentimony Records © 2006 - 2015
      </div>
    )
  }
}

const footer = {
  padding: '10px',
  background: '#bbb',
}

module.exports = Footer
