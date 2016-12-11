import React from 'react'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'

import './style.scss'
import iconEagle from '../../static/img/svg-icons/native-american-eagle.svg'

class Footer extends React.Component {
    render() {
        const {location} = this.props
        const {route} = this.props
        const page = route.page.data

        return (
            <div className='footer'>
                <div className='footer__copyright'>2006 - 2016 © { config.siteTitle }</div>
                <div className='footer__powered'>
                    powered by
                    <a href='http://rooooster.com' className='footer__powered-link' target='_blank'>
                        <img className='footer__powered-svg' src={ prefixLink(iconEagle) }/>
                        <span className='footer__powered-fx'>Rooster Studio</span>
                    </a>
                </div>
            </div>
        );
    }
}

Footer.propTypes = {
    location: React.PropTypes.object,
    page: React.PropTypes.object,
}

export default Footer
