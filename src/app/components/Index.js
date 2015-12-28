import React from 'react'
import Radium from 'radium'

class Index extends React.Component {
  render() {
    return (
      <div style={styles.index}>
        <h2>Sentimony Records</h2>
        <p>Electronic psychedelic chill-out music label from Kyiv, Ukraine.</p>
      </div>
    )
  }
}

const styles = {
  index: {
    background: '#ddd',
    padding: '10px',
    width: '100%',
    // maxWidth: '800px',
    // margin: '0 auto',
    // boxSizing: 'border-box',

    '@media (min-width: 600px)': {
      order: '3',
    },
  },
}

module.exports = Radium(Index)
