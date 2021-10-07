import React, { useState } from 'react'

export default function CreatePost(props) {
    const [post, setPosts] = useState({
        title:"",
        link:"",
        summary:"",
        notes:""
    })
    const [summaryValid, setSummaryValid] = useState(true);

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
    const summaryValidate = e => {
        e.target.value.length > 40 ? setSummaryValid(false) : setSummaryValid(true)
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
                    <input type="text" id="summary"
                    maxLength="41"
                    value={post.summary} onChange={e => (handleChange(e), summaryValidate(e))}
                    onBlur={summaryValidate}/>
                </div>
                <div className="error" hidden={summaryValid}>
                    Summaries must be 40 characters or less.
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