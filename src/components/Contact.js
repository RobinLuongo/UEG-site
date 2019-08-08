import React from 'react';
import './Contact.css';

export default function Contact() {
    return (
        <div className="contact content-border" id="partners">
            <div className="container">
                <h2 className="content-title">How can we help?</h2>
                <p className="content-text">Our dedicated team is ready to help. Please reach out with any questions or service inquiries.</p>
                <h3></h3>
                <div id="mc_embed_signup">
                    <form action="https://gmail.us3.list-manage.com/subscribe/post?u=9dcb1306505c56bb56d2794f6&amp;id=ca7fb407a4" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                        <div id="mc_embed_signup_scroll">
                            <div class="mc-field-group">
                                <label for="mce-EMAIL">Email Address <span class="asterisk">*</span></label>
                                <input type="email" name="EMAIL" className="contact-input required email" id="mce-EMAIL" />
                            </div>
                            <div class="mc-field-group">
                                <label for="mce-FNAME">First Name </label>
                                <input type="text" name="FNAME" className="contact-input" id="mce-FNAME" />
                            </div>
                            <div class="mc-field-group">
                                <label for="mce-LNAME">Last Name </label>
                                <input type="text" name="LNAME" className="contact-input" id="mce-LNAME" />
                            </div>
                            <div class="mc-field-group">
	                            <label for="mce-MMERGE5">Message </label>
                                <textarea form="mc-embedded-subscribe-form" rows="5" cols="33" name="MMERGE5" className="contact-input" id="mce-MMERGE5"/>
                            </div>
                            <div id="mce-responses" class="clear">
                                <div class="response" id="mce-error-response" style={{display:"none"}}></div>
                                <div class="response" id="mce-success-response" style={{display:"none"}}></div>
                            </div>
                            <div style={{position: "absolute", left: -5000}} aria-hidden="true"><input type="text" name="b_9dcb1306505c56bb56d2794f6_ca7fb407a4" tabindex="-1" /></div>
                            <div class="clear"><input type="submit" value="Submit" name="subscribe" id="mc-embedded-subscribe" className="submit-btn" /></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
