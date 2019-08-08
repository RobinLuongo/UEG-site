import React, { useState } from 'react';
import './WPModal.css';

import ReactModal from 'react-modal';

export default function WPModal(props) {
    return (
        <ReactModal 
            isOpen={props.isOpen}
            shouldCloseOnOverlayClick={true}
            shouldCloseOnEsc={true}
            onRequestClose={props.closeModal}
        >
        <div className="modal-content" id="mc_embed_signup">
                    <h2 className="content-title">Be the first to receive our White Paper when it's released.</h2>
                    <h3>Sign up here and we'll send you a copy.</h3>
                    <form action="https://gmail.us3.list-manage.com/subscribe/post?u=9dcb1306505c56bb56d2794f6&amp;id=ca7fb407a4" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
                        <div id="mc_embed_signup_scroll">
                            <div class="mc-field-group">
                                <label for="mce-EMAIL">Email Address <span class="asterisk">*</span></label>
                                <input type="email" name="EMAIL" className="contact-input required email" id="mce-EMAIL" />
                            </div>
                            <div id="mce-responses" class="clear">
                                <div class="response" id="mce-error-response" style={{display:"none"}}></div>
                                <div class="response" id="mce-success-response" style={{display:"none"}}></div>
                            </div>
                            <div style={{position: "absolute", left: -5000}} aria-hidden="true"><input type="text" name="b_9dcb1306505c56bb56d2794f6_ca7fb407a4" tabindex="-1" /></div>
                            <div class="clear"><input type="submit" value="Submit" name="subscribe" id="mc-embedded-subscribe" className="submit-btn" /></div>
                            <input type="hidden" value="whitepaper" name="whitepaper" id="mce-whitepaper"/>
                        </div>
                    </form>
                </div>
      </ReactModal>
    )
}
