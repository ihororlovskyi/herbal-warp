import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import Ink from 'react-ink'

import './style.scss'
import iconSentimonyRecordsLogo from '../../static/img/svg-icons/sentimony-records-logo.svg'

class SideBar extends React.Component {
    render() {

        return (
            <div className='sidebar'>
                <div className='sidebar__title'>Follow Us</div>

                <script src="https://apis.google.com/js/platform.js"></script>

                <script>
                  function onYtEvent(payload) {
                    if (payload.eventType == 'subscribe') {
                      // Add code to handle subscribe event.
                    } else if (payload.eventType == 'unsubscribe') {
                      // Add code to handle unsubscribe event.
                    }
                    if (window.console) { // for debugging only
                      window.console.log('YT event: ', payload);
                    }
                  }
                </script>

                <div class="g-ytsubscribe" data-channelid="UCMvuVxLPE5VBjw0YH1uE4ig" data-layout="full" data-count="default" data-onytevent="onYtEvent"></div>

            </div>
        );
    }
}

export default SideBar
