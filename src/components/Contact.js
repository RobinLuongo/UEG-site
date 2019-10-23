import React, {useState} from 'react';
import axios from 'axios';
import './Contact.css';

export default function Contact() {
    const [values, setValues] = useState({
        email: "",
        firstName: "",
        lastName: "",
        message: ""
    });

    const [loadStatus, setLoadStatus] = useState("uninit")

    const handleChange = (e) => {
        e.preventDefault();
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://ueg-price-tool.herokuapp.com/contact', values)
            .then(res => {
                if (res.status == 200) {
                    setLoadStatus("done")
                } else {
                    setLoadStatus("error")
                }
            })
            .catch(err => {
                setLoadStatus("error")
            })
    }

    const {email, firstName, lastName, message} = values;

    return (
        <div className="contact content-border" id="partners">
            <div className="container">
                <h2 className="content-title">How can we help?</h2>
                <p className="content-text">Our dedicated team is ready to respond. Please reach out with any questions or service inquiries .</p>
                <div id="mc_embed_signup">
                    <form target="" className="validate" name="contact-form" onSubmit={handleSubmit}>
                        <div id="mc_embed_signup_scroll">
                            <div className="mc-field-group">
                                <label htmlFor="email">Email Address <span className="asterisk">*</span></label>
                                <input value={email} onChange={handleChange} type="email" name="email" className="contact-input input-normal required email" id="email" required/>
                            </div>
                            <div className="mc-field-group">
                                <label htmlFor="first_name">First Name </label>
                                <input value={firstName} onChange={handleChange} type="text" name="firstName" className="contact-input input-normal" id="first_name" required/>
                            </div>
                            <div className="mc-field-group">
                                <label htmlFor="last_name">Last Name </label>
                                <input value={lastName} onChange={handleChange} type="text" name="lastName" className="contact-input input-normal" id="last_name" required/>
                            </div>
                            <div className="mc-field-group">
	                            <label htmlFor="message">Message </label>
                                <textarea value={message} onChange={handleChange} form="contact-form" rows="5" cols="33" name="message" className="contact-input input-normal" id="message"/>
                            </div>
                            <div className="submit-container">
                                {
                                    loadStatus === 'uninit' ? 
                                        <input type="submit" value="Submit" className="submit-btn"></input>
                                        :
                                        loadStatus === 'init' ?
                                            <span className="lds-dual-ring"></span>
                                            :
                                            loadStatus === 'done' ?
                                                <span>Thank you! We will reach out within 24 hours.</span>
                                                :
                                                <span>There was an error with the contact submission. Please try again later.</span>
                                }
                            </div>
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
