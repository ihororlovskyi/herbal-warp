import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'

import './style.scss'
import logoSentimonyRecords from '../../static/img/svg-icons/sentimony-records.svg'

class HomePage extends React.Component {
    render() {
        const {route} = this.props
        const page = route.page.data

        return (
            <div className='homepage'>

                <img className='homepage__logo' src={ prefixLink(logoSentimonyRecords) } alt='{ config.siteTitle } Logo' style={{display:'none'}}/>

                <h1 className='homepage__title' style={{display:'none'}}>{ config.siteTitle }</h1>
                <h2 className='homepage__description' style={{display:'none'}}>{ config.siteDescr }</h2>

                <div dangerouslySetInnerHTML={{ __html: page.body}} />

            </div>
        );
    }
}

HomePage.propTypes = {
    page: React.PropTypes.object,
}

export default HomePage
