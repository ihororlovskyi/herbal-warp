import React from 'react'
import { prefixLink } from 'gatsby-helpers'

import './style.scss'
import iconEagle from '../../static/img/svg-icons/native-american-eagle.svg'

class Footer extends React.Component {
    render() {

        return (
            <div className='footer'>
                <div className='footer__copyright'>2006 - 2017 © Sentimony Records</div>
                <div className='footer__powered'>
                    <span>Web Development By</span>
                    <a href='http://ihororlovskyi.com' className='footer__powered-link' target='_blank'>
                        <img className='footer__powered-svg' src={ prefixLink(iconEagle) }/>
                        <span className='footer__powered-fx'>Ihor Orlovskyi</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default Footer
