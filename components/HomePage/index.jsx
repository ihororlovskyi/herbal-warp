import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'

import './style.scss'
import logoIrkNew from '../../static/img/svg-icons/deer2.svg'
import logoIrkOld from '../../static/img/svg-icons/deer1.svg'
import logoSentimonyRecords from '../../static/img/svg-icons/sentimony-records.svg'

class HomePage extends React.Component {
    render() {
        const {route} = this.props
        const page = route.page.data

        return (
            <div className='homepage'>

                <img className='homepage__logo' style={{display:'none'}} src={ prefixLink(logoIrkNew) } alt='{ config.siteTitle } Logo' />
                <img className='homepage__logo' style={{display:'none'}} src={ prefixLink(logoIrkOld) } alt='{ config.siteTitle } Logo' />
                <img className='homepage__logo' style={{display:'block'}} src={ prefixLink(logoSentimonyRecords) } alt='{ config.siteTitle } Logo' />

                <h1 className='homepage__title'>{ config.siteTitle }</h1>
                <h2 className='homepage__description'>{ config.siteDescr }</h2>

                <div dangerouslySetInnerHTML={{ __html: page.body}} />

            </div>
        );
    }
}

HomePage.propTypes = {
    page: React.PropTypes.object,
}

export default HomePage
