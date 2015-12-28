import React from 'react'
import Radium from 'radium'

import Header from './Header'
import PageAbout from './PageAbout'
import Footer from './Footer'

class Wrapper extends React.Component {
  render() {
    const { content, sidebar } = this.props

    return (
      <div style={styles.wrapper}>
        <Header/>
        {sidebar || <PageAbout/>}
        {content}
        <Footer/>
      </div>
    )
  }
}

const styles = {
  wrapper: {
    maxWidth: '800px',
    margin: '0 auto',
  },
}

module.exports = Radium(Wrapper)
