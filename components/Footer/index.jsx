import React from 'react'
import { prefixLink } from 'gatsby-helpers'

import './style.scss'
import iconEagle from '../../static/img/svg-icons/native-american-eagle.svg'

class Footer extends React.Component {
  render() {

    return (
      <div className='footer'>
        <div className='footer__wrapper'>

          <div className='footer__copyright'>
            <div>2006 - 2017 © Sentimony Records</div>
            <div>All Rights Reserved</div>
          </div>

          <div className='footer__powered'>
            <span>Web Development By</span>
            <a href='https://ihororlovskyi.com' className='footer__powered-link' target='_blank'>
              <img className='footer__powered-svg' src={ prefixLink(iconEagle) }/>
              <span className='footer__powered-fx'>Ihor Orlovskyi</span>
            </a>
          </div>

          <nav className='footer__versions'>
            <a href='https://sentimony.com'>nuxt</a>
            <a href='https://gatsby.sentimony.com' className='is-selected'>gatsby</a>
            <a href='https://jekyll.sentimony.com'>jekyll</a>
          </nav>

        </div>
      </div>
    );
  }
}

export default Footer
