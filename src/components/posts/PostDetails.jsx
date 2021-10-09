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
        <div className="container section card">
            <div className="card-content">
                <span className="card-title">
                <a href={post.link}>{post.title}</a>
                </span>
                <p className="flow-text">{post.notes}</p>
            </div>
            <div className="card-action">
                <p>User Name - Date</p>
            </div>
        </div>
    )

}