import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './BlogLanding.css'

export default function BlogLanding(props) {
    props.setNavStyle("scrolled")
    const [blogList, setBlogList] = useState([]);

    useEffect(() => {
        fetch(`/content/blogs/blogList.json`)
            .then((res) => {
                return res.json()
            })
            .then(blogList => setBlogList(blogList.blogs))
            .catch(err => console.error(err))
    }, [])

    return (
        <div className="blogLanding">
            <div className="container">
                <h1>Uni Esports Group Blog</h1>
                <ul className="blogList">
                    {blogList.map((blog, idx) => {
                        return (
                            <li key={idx} className="blogItem">
                                <Link to={`/blog/${blog.link}`}><h2>{blog.title}</h2></Link>
                                <div className="meta-tag">Authored by {blog.author}, posted on {blog.date}</div>
                                <p className="content-text">{blog.description}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

