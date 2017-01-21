import React from 'react'

import './style.scss'

class YoutubeIframe extends React.Component {
    render() {

        return (
            <div className='youtube-iframe'>
                <iframe className='youtube-iframe__iframe' src='https://www.youtube.com/embed/videoseries?list=PLp2GaPnw5O3NDR31aD0msR3f6soE9gVWk' allowFullScreen />
            </div>
        );
    }
}

export default YoutubeIframe
