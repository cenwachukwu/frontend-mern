import React, { Component } from 'react';
import Axios from 'axios';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchName: "",
            id: "",
            resultArtist: [],
            first_name: "",
            middle_name: "",
            last_name: "",
            title: "",
            gender: "",
            bio: "",
            school: "",
            degree: "",
            license_number: "",
            license_state: "",
            specialties_name: "",
            description: "",
            actor: ""
        }
        this.onSearchName = this.onSearchName.bind(this);
        this.onFindProfile = this.onFindProfile.bind(this);
        this.onChangeId = this.onChangeId.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this); //we bind it to give react a memory of what what the event listners do
        this.onChangeMiddleName = this.onChangeMiddleName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeBio = this.onChangeBio.bind(this);
        this.onChangeLicense_number = this.onChangeLicense_number.bind(this);
        this.onChangeLicense_state = this.onChangeLicense_state.bind(this);
        this.onChangeSpecialties_name = this.onChangeSpecialties_name.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeActor = this.onChangeActor.bind(this);
    }

    onSearchName(evt) {
        this.setState({
            searchName: evt.target.value
        });
    }

    onChangeId(evt) {
        evt.preventDefault();
        this.setState({
            id: evt.target.value
        });
    }

    onChangeFirstName(evt) {
        this.setState({
            first_name: evt.target.value
        });
    }
    onChangeMiddleName(evt) {
        this.setState({
            middle_name: evt.target.value
        });
    }
    onChangeLastName(evt) {
        this.setState({
            last_name: evt.target.value
        });
    }
    onChangeTitle(evt) {
        this.setState({
            title: evt.target.value
        });
    }
    onChangeGender(evt) {
        this.setState({
            gender: evt.target.value
        });
    }
    onChangeBio(evt) {
        this.setState({
            bio: evt.target.value
        });
    }
    
    onChangeLicense_number(evt) {
        this.setState({
            license_number: evt.target.value
        });
    }
    onChangeLicense_state(evt) {
        this.setState({
            license_state: evt.target.value
        });
    }
    onChangeSpecialties_name(evt) {
        this.setState({
            specialties_name: evt.target.value
        });
    }
    onChangeDescription(evt) {
        this.setState({
            description: evt.target.value
        });
    }
    onChangeActor(evt) {
        this.setState({
            actor: evt.target.value
        });
    }


    onFindProfile(evt) {
        evt.preventDefault();
        Axios.get(`https://med-directory-cen.herokuapp.com/directory/profile/${this.state.searchName}`)
            .then(res => {
                this.setState({
                    resultArtist: res.data,
                    first_name: res.data[0].profile[0].first_name,
                    middle_name: res.data[0].profile[0].middle_name,
                    last_name: res.data[0].profile[0].last_name,
                    title: res.data[0].profile[0].title,
                    gender: res.data[0].profile[0].gender,
                    bio: res.data[0].profile[0].bio,
                    license_number: res.data[0].licenses[0].number,
                    license_state: res.data[0].licenses[0].state,
                    specialties_name: res.data[0].specialties[0].name,
                    description: res.data[0].specialties[0].description,
                    actor: res.data[0].specialties[0].actor
                })
                console.log(this.state)
                // console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    
    render() {
        return (
            <div>
                <div className="topform">
                    <h1>Type in your id to edit your profile!</h1>
                    <div>
                        <input className="topforminput" type="text" value={this.state.searchName} placeholder="Enter doctor's last name eg. Bloom" onChange={this.onSearchName} />
                        <div className="Button-div" onClick={this.onFindProfile}>
                            <p className="Button-div-ptag">Find your profile</p>
                        </div>
                    </div>
                </div>

                <form onSubmit={this.onSubmit}>
                    {this.state.resultArtist.map((artist, index) => {
                        console.log(artist)
                        return (
                            <div>
                                <div>
                                    <input type="text" value={this.state.first_name} placeholder="First Name" onChange={this.onChangeFirstName} />
                                </div>
                                <div>
                                    <input type="text" value={this.state.middle_name} placeholder="Middle Name" onChange={this.onChangeMiddleName} />
                                </div>
                                <div>
                                    <input type="text" value={this.state.last_name} placeholder="Last Name" onChange={this.onChangeLastName} />
                                </div>
                                <div>
                                    <input type="text" value={this.state.title} placeholder="Title" onChange={this.onChangeTitle} />
                                </div>
                                <div>
                                    <input type="text" value={this.state.bio} placeholder="Enter a short Bio" onChange={this.onChangeBio} />
                                </div>
                                <div>
                                    <input type="text" value={this.state.gender} placeholder="M/F/NonBinary" onChange={this.onChangeGender} />
                                </div>
                                <div>
                                    <input type="text" value={this.state.license_number} placeholder="Enter your license number" onChange={this.onChangeLicense_number} />
                                </div>
                                <div>
                                    <input type="text" value={this.state.license_state} placeholder="Enter the state you earned the lincense from" onChange={this.onChangeLicense_state} />
                                </div>
                                <div>
                                    <input type="text" value={this.state.specialties_name} placeholder="Enter your speciality" onChange={this.onChangeSpecialties_name} />
                                </div>
                                <div>
                                    <input type="text" value={this.state.description} placeholder="Enter a brief description of the said speciality" onChange={this.onChangeDescription} />
                                </div>
                                <div>
                                    <input type="text" value={this.state.actor} placeholder="How would you like to be addressed eg. Cardiologist" onChange={this.onChangeActor} />
                                </div>
                            
                            </div>
                        )
                    })}
                </form>
            </div >
        )
    }
}

export default Profile;