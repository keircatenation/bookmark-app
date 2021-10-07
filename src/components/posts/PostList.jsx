import React from 'react'
import PostSummary from "./PostSummary"

export default function PostList (props) {

    return (
        <div className="row">
            {[1,2,3,4].map(post => (
                <PostSummary key={post} link={post} title={"Title"} summary={post}/>
            ))}
        </div>
    )

}