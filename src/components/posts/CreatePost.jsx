import React, { useState } from 'react'

export default function CreatePost(props) {
    const [post, setPosts] = useState({
        title:"",
        link:"",
        summary:"",
        notes:""
    })
    const handleChange = e => {
        setPosts({
            ...post,
            [e.target.id]: e.target.value
        })
    }
    const handleSubmit = e =>{
        e.preventDefault();
        console.log("post", post)
    }

    return (
        <div className="container">
            <form className="white" onSubmit={handleSubmit}>
                <h5>Create New Post</h5>
                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" value={post.title} onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="link">Link</label>
                    <input type="text" id="link" value={post.link} onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="summary">Summary</label>
                    <input type="text" id="summary" value={post.summary} onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="notes">Notes</label>
                    <input type="text" id="notes" value={post.notes} onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <button className="btn deep-purple">Submit</button>
                </div>
            </form>
        </div>
    )

}