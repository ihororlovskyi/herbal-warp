import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import Ink from 'react-ink'
import HeaderLogo from '../HeaderLogo'
import MainMenu from '../MainMenu'
import SocNav from '../SocNav'

import './style.scss'

class Header extends React.Component {
    render() {
        const {location} = this.props
        const {route} = this.props
        const page = route.page.data

        return (
            <div className='header'>
                <div className='header__wrapper'>
                    <HeaderLogo {...this.props} />
                    <MainMenu {...this.props} />
                    <SocNav {...this.props} />
                </div>
            </div>
        );
    }
}

Header.propTypes = {
    location: React.PropTypes.object,
    page: React.PropTypes.object,
}

export default Header
