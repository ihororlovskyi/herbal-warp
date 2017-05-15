import React from 'react'

import './style.scss'

class Youtube extends React.Component {
    render() {

        return (
            <div className='youtube'>
                <div className='youtube__wrapper'>
                    <iframe className='youtube__iframe' src='https://www.youtube.com/embed/videoseries?list=PLp2GaPnw5O3PWcqMkLjyj8lMroqjzVpDn' allowFullScreen />
                </div>
            </div>
        );
    }
}

export default Youtube
