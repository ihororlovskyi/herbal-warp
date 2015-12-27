import React from 'react'

import Index from './Index'
import HeaderMenu from './HeaderMenu'
import Footer from './Footer'

class App extends React.Component {
  render() {
    const { content, sidebar } = this.props

    return (
      <div>
        <HeaderMenu />
        {sidebar || <Index />}
        {content}
        <Footer />
      </div>
    )
  }
}

module.exports = App

