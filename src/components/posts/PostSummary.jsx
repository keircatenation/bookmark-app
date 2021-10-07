import React from 'react'
import { NavLink } from 'react-router-dom'

export default function PostSummary(props) {

    return (
        <div className="post card">
            <div className="card-content">
                <span className="card-title">
                <NavLink to={`/post/${props.link}`}>{props.title}</NavLink>
                </span>
                <p className="summary">{props.summary}</p>
            </div>
            <div className="card-action">
                <NavLink to={`/post/${props.link}`}>See Notes</NavLink>
            </div>
        </div>
    )

}