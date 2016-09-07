import React from 'react'
import { RouteHandler, Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access'
import { config } from 'config'
import ArtistList from '../ArtistList'

import './style.scss'

class ReleasePage extends React.Component {
    render() {
        const {route} = this.props
        const post = route.page.data

        return (
            <div className='artist-page'>
                <div className='artist-page__sidebar'>
                    <ArtistList {...this.props} />
                </div>
                <div className='artist-page__content'>

                    <div className='artist-page__thumbnail'>
                        <img className='artist-page__cover' src={ prefixLink(`${ post.path }${ post.key }.jpg`) } alt={ post.title } />
                    </div>

                    <h1 className='artist-page__title'>{ post.title }</h1>

                    <div className='artist-page__location'>{ post.location }</div>

                    { !!post.soundcloudTrack ? '' : <iframe className='artist-page__iframe-soundcloud' scrolling='no' src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${ post.soundcloudTrack }&amp;color=00aabb&amp;auto_play=true&amp;show_artwork=true&amp;download=true&amp;sharing=false&amp;hide_related=true&amp;show_comments=true&amp;show_user=false&amp;show_reposts=false&amp`} /> }
                    { !!post.bandcampLabelTrack ? <iframe className='artist-page__iframe-bandcamp' src={`https://bandcamp.com/EmbeddedPlayer/size=large/bgcol=222222/linkcol=4ec5ec/tracklist=false/artwork=small/track=${ post.bandcampLabelTrack }/transparent=true/`} seamless /> : '' }

                    <ul className='artist-page__soc-ul'>
                        { !!post.soundcloud ? <li className='artist-page__soc-li'><a className='artist-page__soc-a' href={ post.soundcloud } target='_blank'>sc</a></li> : '' }
                        { !!post.facebook ? <li className='artist-page__soc-li'><a className='artist-page__soc-a' href={ post.facebook } target='_blank'>fb</a></li> : '' }
                        { !!post.mixcloud ? <li className='artist-page__soc-li' style={{display:'none'}}><a className='artist-page__soc-a' href={ post.mixcloud } target='_blank'>mc</a></li> : '' }
                        { !!post.youtube ? <li className='artist-page__soc-li' style={{display:'none'}}><a className='artist-page__soc-a' href={ post.youtube } target='_blank'>yt</a></li> : '' }
                        { !!post.discogs ? <li className='artist-page__soc-li' style={{display:'none'}}><a className='artist-page__soc-a' href={ post.discogs } target='_blank'>dc</a></li> : '' }
                        { !!post.bandcamp ? <li className='artist-page__soc-li'><a className='artist-page__soc-a' href={ post.bandcamp } target='_blank'>bc</a></li> : '' }
                        { !!post.website ? <li className='artist-page__soc-li'><a className='artist-page__soc-a' href={ post.website } target='_blank'>ws</a></li> : '' }
                    </ul>

                    <div dangerouslySetInnerHTML={ {    __html: post.body} } />

                </div>
            </div>
        );
    }
}

ReleasePage.propTypes = {
    post: React.PropTypes.object,
    pages: React.PropTypes.array,
}

export default ReleasePage
