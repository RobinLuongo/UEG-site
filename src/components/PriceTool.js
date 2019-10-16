import React, {useState} from 'react';
import './PriceTool.css';


export default function PriceTool(props) {
    props.setNavStyle("scrolled")

    return (
        <div className="price-tool">
            <div className="container">
                <h1 className="content-title">Get your customized UEG Esports Program Model Report</h1>
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
        spaceChoice: "Retrofitting Space"
    });

    const handleChange = (e) => {
        e.preventDefault();
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const {studentSize, tuition, engagement, stations, teamCount, spaceChoice} = values;

    return (
        <form action="http://localhost:3000" method="post" target="" className="pt-form">
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
            <div className="pt-input-container">
                <input type="submit" value="Generate Report!" className="form-submit"></input>
            </div>
        </form>
    )
}
