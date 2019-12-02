import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Doctors extends Component {
    render() {
        return (
            <div>
                <h1>Meet your medical practioners</h1>

                <div>
                    <Link to="/Doctors/findall">
                        <button>
                            View all Doctors
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to="/Doctors/searchbyprofile">
                        <button>
                            Search by names
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to="/Doctors/searchbyspeciality">
                        <button>
                            Search by speciality
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to="/Doctors/searchbyinsurance">
                        <button>
                            Search by insurance
                        </button>
                    </Link>
                </div>
            </div>
        )
    }
}
export default Doctors;