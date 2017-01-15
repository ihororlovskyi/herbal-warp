import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import Ink from 'react-ink'

import './style.scss'
import iconSentimonyRecordsLogo from '../../static/img/svg-icons/sentimony-records-logo.svg'

class HeaderLogo extends React.Component {
    render() {

        return (
            <Link to={ prefixLink('/')} className='header-logo' activeClassName='is-selected' onlyActiveOnIndex>
                <img className='header-logo__icon' src={ prefixLink(iconSentimonyRecordsLogo) }/>
                <div className='header-logo__name'>
                    <div className='header-logo__name-title'>{ config.siteTitle }</div>
                    <div className='header-logo__name-subtitle'>{ config.siteDescr }</div>
                </div>
                <Ink />
            </Link>
        );
    }
}

export default HeaderLogo
