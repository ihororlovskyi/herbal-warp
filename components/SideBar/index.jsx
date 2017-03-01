import React from 'react'
import Youtube from '../Youtube'

import './style.scss'

class SideBar extends React.Component {
    render() {

        return (
            <div className='sidebar'>
                <Youtube {...this.props} />
                <div className='sidebar__title'>Follow Us</div>
            </div>
        );
    }
}

export default SideBar
