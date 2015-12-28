import React from 'react'
import Radium from 'radium'

import Header from './Header'
import Index from './Index'
import Footer from './Footer'

class Wrapper extends React.Component {
  render() {
    const { content, sidebar } = this.props

    return (
      <div style={styles.wrapper}>
        <Header/>
        {sidebar || <Index/>}
        {content}
        <Footer/>
      </div>
    )
  }
}

const styles = {
  wrapper: {
    display: 'flex',
    flexFlow: 'row wrap',
  },
}

module.exports = Radium(Wrapper)
