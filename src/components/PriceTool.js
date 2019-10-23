import React, {useState} from 'react';
import './PriceTool.css';
import axios from 'axios';

export default function PriceTool(props) {
    props.setNavStyle("scrolled")

    return (
        <div className="price-tool">
            <div className="container">
                <h1 className="content-title">Get your customized UEG Esports Program Model Report</h1>
                <p className="content-text bold">The average cost of starting a collegiate esports program is negligible compared to the projected revenue from increased recruitment and retention. Fill out the data below, and we will send you a customized report that gives you an idea of starting costs, and how much your institution stands to gain from a successful esports rollout.</p>
                <div>
                    <Form></Form>

                </div>
            </div>
        </div>
    )
}

const Form = () => {
    const [values, setValues] = useState({
        studentSize: 5000,
        tuition: 15000,
        engagement: 18.0,
        stations: 12,
        teamCount: 2,
        spaceChoice: "Retrofitting Space",
        email: "",
        school: ""
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
        setLoadStatus("init");
        axios.post('https://ueg-price-tool.herokuapp.com/pricetool', values)
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

    const {studentSize, tuition, engagement, stations, teamCount, spaceChoice, email, school} = values;

    return (
        <form target="" className="pt-form" onSubmit={handleSubmit}>
            <div className="pt-input-container">
                <div>
                    <label htmlFor="student_size">Student Body Size</label>
                    <input type="number" id="student_size" className="input-normal" name="studentSize" value={studentSize} onChange={handleChange} required></input>
                </div>
                <hr className="grey-bar"></hr>
                <div className="input-description content-text">Your institution's total undergraduate population</div>
            </div>
            <div className="pt-input-container">
                <div>
                    <label htmlFor="tuition">Average Annual Net Tuition</label>
                    <input type="number" id="tuition" className="input-normal"  name="tuition" value={tuition} onChange={handleChange} required></input>
                </div>
                <hr className="grey-bar"></hr>
                <div className="input-description content-text">Net tuition for a single student</div>
            </div>
            <div className="pt-input-container">
                <div>
                    <label htmlFor="percent_unengaged">% of Students Unengaged</label>
                    <input type="number" id="percent_unengaged" className="input-normal"  name="engagement" value={engagement} onChange={handleChange} required></input>
                </div>
                <hr className="grey-bar"></hr>
                <div className="input-description content-text">An estimate of the percentage of students not engaged in co or extra-curricular activities (national average is 18%)</div>
            </div>
            <div className="pt-input-container">
                <div>
                    <label htmlFor="station_count">Number of Stations at Launch</label>
                    <input type="number" id="station_count" className="input-normal"  name="stations" value={stations} onChange={handleChange} required></input>
                </div>
                <hr className="grey-bar"></hr>
                <div className="input-description content-text">The number of computer stations to be furbished in your esports area (recommended minimum is 12)</div>
            </div>
            <div className="pt-input-container">
                <div>
                    <label htmlFor="team_count">Number of Competitive Teams</label>
                    <input type="number" id="team_count" className="input-normal"  name="teamCount" value={teamCount} onChange={handleChange} required></input>
                </div>
                <hr className="grey-bar"></hr>
                <div className="input-description content-text">The number of competitive teams being launched (recommended minimum is 2)</div>
            </div>
            <div className="pt-input-container">
                <div>
                    <label htmlFor="space_choice">Space Buildout</label>
                    <select id="space_choice" className="input-normal"  name="spaceChoice" value={spaceChoice} onChange={handleChange} required>
                        <option value="Retrofitting Space">Retrofitting Space</option>
                        <option value="New Contruction">New Contruction</option>
                    </select>
                </div>
                <hr className="grey-bar"></hr>
                <div className="input-description content-text">The choice to construct a new building to house the program, or to retrofit an existing space</div>
            </div>
            <div className="pt-input-container centered-inputs">
                <span>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" className="input-normal"  name="email" value={email} onChange={handleChange} required></input>
                </span>
                <span>
                    <label htmlFor="school">School Name</label>
                    <input type="school" id="school" className="input-normal"  name="school" value={school} onChange={handleChange} required></input>
                </span>
            </div>
            <div className="pt-input-container">
                {
                    loadStatus === 'uninit' ? 
                        <input type="submit" value="Generate Report" className="submit-btn"></input>
                        :
                        loadStatus === 'init' ?
                            <span className="lds-dual-ring"></span>
                            :
                            loadStatus === 'done' ?
                                <span>Thank you! You will receive your report via email within 24 hours.</span>
                                :
                                <span>There was an error submitting the report. Please try again.</span>
                }
            </div>
        </form>
    )
}
