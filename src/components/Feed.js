import React from 'react'
import '../css/Feed.css'
import Post from './Post'
import QuerBox from './QuerBox'

function Feed() {
    return (
        <div className="feed">
        <QuerBox/>
        <Post/>
        </div>
    )
}

export default Feed
