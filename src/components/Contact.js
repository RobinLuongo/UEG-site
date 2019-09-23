import React from 'react';
import './Contact.css';

export default function Contact() {
    return (
        <div className="contact content-border" id="partners">
            <div className="container">
                <h2 className="content-title">How can we help?</h2>
                <p className="content-text">Our dedicated team is ready to respond. Please reach out with any questions or service inquiries .</p>
                <div id="mc_embed_signup">
                    <form action="https://gmail.us3.list-manage.com/subscribe/post?u=9dcb1306505c56bb56d2794f6&amp;id=ca7fb407a4" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
                        <div id="mc_embed_signup_scroll">
                            <div className="mc-field-group">
                                <label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label>
                                <input type="email" name="EMAIL" className="contact-input required email" id="mce-EMAIL" />
                            </div>
                            <div className="mc-field-group">
                                <label htmlFor="mce-FNAME">First Name </label>
                                <input type="text" name="FNAME" className="contact-input" id="mce-FNAME" />
                            </div>
                            <div className="mc-field-group">
                                <label htmlFor="mce-LNAME">Last Name </label>
                                <input type="text" name="LNAME" className="contact-input" id="mce-LNAME" />
                            </div>
                            <div className="mc-field-group">
	                            <label htmlFor="mce-MMERGE5">Message </label>
                                <textarea form="mc-embedded-subscribe-form" rows="5" cols="33" name="MMERGE5" className="contact-input" id="mce-MMERGE5"/>
                            </div>
                            <div id="mce-responses" className="clear">
                                <div className="response" id="mce-error-response" style={{display:"none"}}></div>
                                <div className="response" id="mce-success-response" style={{display:"none"}}></div>
                            </div>
                            <div style={{position: "absolute", left: -5000}} aria-hidden="true"><input type="text" name="b_9dcb1306505c56bb56d2794f6_ca7fb407a4" tabIndex="-1" /></div>
                            <div className="clear"><input type="submit" value="Submit" name="subscribe" id="mc-embedded-subscribe" className="submit-btn" /></div>
                        </div>
                    </form>
                </div>
                <div className="contact-info">
                    <span>
                        contact@uniesportsgroup.com
                    </span>
                </div>
            </div>
        </div>
    )
}
