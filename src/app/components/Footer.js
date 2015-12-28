import React from 'react'
import Radium from 'radium'

class Footer extends React.Component {
  render() {
    return (
      <div style={styles.footer}>
        <div>Site is under construction, sorry for any inconvenience</div>
        <div>Sentimony Records 2006 - 2015 © All rights reserved</div>
      </div>
    )
  }
}

const styles = {
  footer: {
    flex: '1 100%',
    textAlign: 'center',
    background: '#bbb',
    padding: '10px',
    // maxWidth: '800px',
    // margin: '0 auto',
    // boxSizing: 'border-box',

    '@media (min-width: 600px)': {
      order: '4',
    },
  },
}

module.exports = Radium(Footer)
