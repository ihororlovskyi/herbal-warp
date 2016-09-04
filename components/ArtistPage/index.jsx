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
                    <img className='artist-page__cover' src={ prefixLink(`../..${ post.path }cover.jpg`) } alt={ post.title } />
                    <h1 className='artist-page__title'>{ post.title }</h1>
                    <div dangerouslySetInnerHTML={ {    __html: post.body} } />

                    <ul>
                        { !!post.website ? <li><a href={ post.website } target='_blank'>website</a></li> : '' }
                        { !!post.bandcamp ? <li><a href={ post.bandcamp } target='_blank'>bandcamp</a></li> : '' }
                        { !!post.soundcloud ? <li><a href={ post.soundcloud } target='_blank'>soundcloud</a></li> : '' }
                        { !!post.facebook ? <li><a href={ post.facebook } target='_blank'>facebook</a></li> : '' }
                        { !!post.mixcloud ? <li><a href={ post.mixcloud } target='_blank'>mixcloud</a></li> : '' }
                        { !!post.youtube ? <li><a href={ post.youtube } target='_blank'>youtube</a></li> : '' }
                        { !!post.discogs ? <li><a href={ post.discogs } target='_blank'>discogs</a></li> : '' }
                    </ul>
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
