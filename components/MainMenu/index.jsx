import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import Ink from 'react-ink'

import './style.scss'
import iconSentimonyRecordsLogo from '../../static/img/svg-icons/sentimony-records-logo.svg'
import iconDiscography from '../../static/img/svg-icons/kokopelli.svg'
import iconBandcamp from '../../static/img/svg-icons/bandcamp.svg'
import iconFacebook from '../../static/img/svg-icons/facebook.svg'
import iconGithub from '../../static/img/svg-icons/github.svg'
import iconEvevt from '../../static/img/svg-icons/event.svg'
import iconDiscogs from '../../static/img/svg-icons/discogs.svg'
import iconYoutube from '../../static/img/svg-icons/youtube.svg'

class MainMenu extends React.Component {
    render() {
        const {location} = this.props
        const {route} = this.props
        const page = route.page.data

        return (
            <div className='mainmenu'>
                <div className='mainmenu__container'>

                    <Link to={ prefixLink('/')} className='mainmenu__link mainmenu__link--logo' activeClassName='is-selected' onlyActiveOnIndex>
                        <img className='mainmenu__link-svg' src={ prefixLink(iconSentimonyRecordsLogo) }/>
                        <span className='mainmenu__link-name'>
                            <span className='mainmenu__logo-title'>{ config.siteTitle }</span>
                            <span className='mainmenu__logo-subtitle'>{ config.siteDescr }</span>
                        </span>
                        <Ink />
                    </Link>

                    <Link to={ prefixLink('/releases/')} className='mainmenu__link' activeClassName='is-selected'>
                        <img className='mainmenu__link-svg' style={{display:'none'}} src={ prefixLink(iconDiscogs) }/>
                        <span className='mainmenu__link-name'>Releases</span>
                        <Ink />
                    </Link> 

                    <Link to={ prefixLink('/artists/')} className={`mainmenu__link ${ location.pathname.indexOf(prefixLink('/artists/')) == 0 ? 'is-selected' : '' }`} style={{display:'none'}}>
                        <img className='mainmenu__link-svg' style={{display:'none'}} src={ prefixLink(iconDiscography) }/>
                        <span className='mainmenu__link-name'>Artists</span>
                        <Ink />
                    </Link> 

                    <Link to={ prefixLink('/events/')} className={`mainmenu__link ${ location.pathname.indexOf(prefixLink('/events/')) == 0 ? 'is-selected' : '' }`} style={{display:'none'}}>
                        <img className='mainmenu__link-svg' style={{display:'none'}} src={ prefixLink(iconEvevt) }/>
                        <span className='mainmenu__link-name'>Events</span>
                        <Ink />
                    </Link> 

                    <div className='mainmenu__social-nav'>

                        <a href={ config.siteYoutubeUrl } className='mainmenu__link' target='_blank'>
                            <img className='mainmenu__link-svg' src={ prefixLink(iconYoutube) }/>
                            <span className='mainmenu__link-name'>youtube</span>
                        </a>

                        <a href={ config.siteFacebookUrl } className='mainmenu__link' target='_blank'>
                            <img className='mainmenu__link-svg' src={ prefixLink(iconFacebook) }/>
                            <span className='mainmenu__link-name'>facebook</span>
                        </a>

                        <a href={ config.siteBandcampUrl } className='mainmenu__link' target='_blank'>
                            <img className='mainmenu__link-svg' src={ prefixLink(iconBandcamp) }/>
                            <span className='mainmenu__link-name'>bandcamp</span>
                        </a>

                    </div>

                </div>

            </div>
        );
    }
}

MainMenu.propTypes = {
    location: React.PropTypes.object,
    page: React.PropTypes.object,
}

export default MainMenu
