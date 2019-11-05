import React, { useState, useEffect } from 'react';
import './Blog.css';

export default function Blog(props) {
    props.setNavStyle("scrolled")
    const [content, setContent] = useState({});

    useEffect(() => {
        const location = props.location.pathname;
        const postEx = /\/blog\/(.+)/;
        const post = location.match(postEx)[1];
        fetch(`/content/blogs/${post}.json`)
            .then((res) => {
                return res.json()
            })
            .then(blogContent => setContent(blogContent))
            .catch(err => console.error(err))
        window.scroll({top: 0}, 0);
        
    }, [props.location.pathname]);

    return (
        <div className="blog">
            <div className="container blog-container">
                {content.title ? renderBlog() : ""}
            </div>
        </div>
    )

    function renderBlog() {
        return (
            <div>
                <meta name="description" content={content.meta.description}></meta>
                <div className="title-container">
                    <div>
                        <h1>{content.title}</h1>
                        <div className="meta-info content-text">
                            <span>{content.meta.author} - {content.meta.date}</span>
                        </div>
                        <img src={content.image.src} className="title-image" style={{"display": "inline"}}></img>
                        <h2>{content.subTitle}</h2>
                    </div>
                </div>
                {content.sections.map((section, key) => {
                    return (
                    <div key={key}>
                        <h3>{section.heading}</h3>
                        {section.paragraphs.map((paragraph, key) => {
                            return (
                            <div key={key} className="paragraph-text">
                                <div>{paragraph.tag}</div>
                                <p>{paragraph.body}</p>
                            </div>
                            )
                        })}
                    </div>
                    )
                })}
            </div>
        )
    }
}

