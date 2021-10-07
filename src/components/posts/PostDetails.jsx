import React from 'react'

export default function PostDetails(props) {
    const id = props.match.params.id;
    console.log(props)
    const post = {
        title: "React!",
        notes: "sdkgh ajdf;g ajfgahfgadfja",
        link: "heck.com"
    }

    return (
        <div className="container section post-details">
            <div className="card-content">
                <span className="card-titl">
                    <a href={post.link} target="_blank" title={post.link} alt={props.post.link}>{props.post.title}</a>
                </span>
                <p className="flow-text">{post.notes}</p>
            </div>
            <div className="card-action">
                <p>user name - Date</p>
            </div>
        </div>
    )

}