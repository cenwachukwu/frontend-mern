import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./DoctorsEdit.css";

class DoctorEdit extends Component {
    render() {
        return (
            <div>
                <h1>Welcome</h1>
                <h2>insert some thing about doctors</h2>
                <div>
                    <h3>
                        Welcome! we are glad you're here
                    </h3>
                    <Link to="/DoctorEdit/createprofile">
                        <button>
                            Create a new profile
                        </button>
                    </Link>
                </div>
                <div>
                    <h3>
                        Welcome back!
                    </h3>
                    <Link to="/DoctorEdit/editprofile">
                        <button>
                            To edit your profile
                        </button>
                    </Link>
                </div>
                <div>
                    <h3>
                        We would appreciate your feedback
                    </h3>
                    <Link to="/DoctorEdit/deleteprofile">
                        <button>
                            To delete profile
                        </button>
                    </Link>
                </div>
            </div>
        )
    }
}
export default DoctorEdit;