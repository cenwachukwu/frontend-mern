import React, { Component } from 'react';
import Axios from 'axios';
import "./DoctorsEdit.css";

class EditProfile extends Component {
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
            image_url: "",
            school: "",
            degree: "",
            license_number: "",
            license_state: "",
            specialties_name: "",
            description: "",
            actor: "",
            practice_name: "",
            website: "",
            accepts_new_patients: false,
            practice_city: "",
            practice_state: "",
            practice_street: "",
            practice_zip: "",
            practice_phone_number: "",
            phone_type: "",
            language_name: "",
            category_types: "",
            insurance_uid: "",
            insurance_name: ""
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
        this.onChangeSchool = this.onChangeSchool.bind(this);
        this.onChangeImage_url = this.onChangeImage_url.bind(this);
        this.onChangeDegree = this.onChangeDegree.bind(this);
        this.onChangeLicense_number = this.onChangeLicense_number.bind(this);
        this.onChangeLicense_state = this.onChangeLicense_state.bind(this);
        this.onChangeSpecialties_name = this.onChangeSpecialties_name.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeActor = this.onChangeActor.bind(this);
        this.onChangePractice_name = this.onChangePractice_name.bind(this);
        this.onChangeWebsite = this.onChangeWebsite.bind(this)
        this.onChangeAccepts_new_patients = this.onChangeAccepts_new_patients.bind(this);
        this.onChangePractice_city = this.onChangePractice_city.bind(this);
        this.onChangePractice_state = this.onChangePractice_state.bind(this);
        this.onChangePractice_street = this.onChangePractice_street.bind(this);
        this.onChangePractice_zip = this.onChangePractice_zip.bind(this);
        this.onChangePractice_phone_number = this.onChangePractice_phone_number.bind(this);
        this.onChangePhone_type = this.onChangePhone_type.bind(this);
        this.onChangeLanguage_name = this.onChangeLanguage_name.bind(this);
        this.onChangeCategory_types = this.onChangeCategory_types.bind(this);
        this.onChangeInsurance_uid = this.onChangeInsurance_uid.bind(this);
        this.onChangeInsurance_name = this.onChangeInsurance_name.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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
    onChangeImage_url(evt) {
        this.setState({
            image_url: evt.target.value
        });
    }
    onChangeSchool(evt) {
        this.setState({
            school: evt.target.value
        });
    }
    onChangeDegree(evt) {
        this.setState({
            degree: evt.target.value
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
    onChangePractice_name(evt) {
        this.setState({
            practice_name: evt.target.value
        });
    }
    onChangeWebsite(evt) {
        this.setState({
            website: evt.target.value
        });
    }
    onChangeAccepts_new_patients(evt) {
        this.setState({
            accepts_new_patients: evt.target.value
        });
    }
    onChangePractice_city(evt) {
        this.setState({
            practice_city: evt.target.value
        });
    }
    onChangePractice_state(evt) {
        this.setState({
            practice_state: evt.target.value
        });
    }
    onChangePractice_street(evt) {
        this.setState({
            practice_street: evt.target.value
        });
    }
    onChangePractice_zip(evt) {
        this.setState({
            practice_zip: evt.target.value
        });
    }
    onChangePractice_phone_number(evt) {
        this.setState({
            practice_phone_number: evt.target.value
        });
    }
    onChangePhone_type(evt) {
        this.setState({
            phone_type: evt.target.value
        });
    }
    onChangeLanguage_name(evt) {
        this.setState({
            language_name: evt.target.value
        });
    }
    onChangeCategory_types(evt) {
        this.setState({
            category_types: evt.target.value
        });
    }
    onChangeInsurance_uid(evt) {
        this.setState({
            insurance_uid: evt.target.value
        });
    }
    onChangeInsurance_name(evt) {
        this.setState({
            insurance_name: evt.target.value
        });
    }

    onFindProfile(evt) {
        evt.preventDefault();
        Axios.get(`https://med-directory-cen.herokuapp.com/directory/profile/${this.state.searchName}`)
            .then(res => {
                this.setState({
                    resultArtist: res.data,
                    id: res.data[0]._id,
                    first_name: res.data[0].profile[0].first_name,
                    middle_name: res.data[0].profile[0].middle_name,
                    last_name: res.data[0].profile[0].last_name,
                    title: res.data[0].profile[0].title,
                    gender: res.data[0].profile[0].gender,
                    bio: res.data[0].profile[0].bio,
                    image_url: res.data[0].profile[0].image_url,
                    school: res.data[0].educations[0].school,
                    degree: res.data[0].educations[0].degree,
                    license_number: res.data[0].licenses[0].number,
                    license_state: res.data[0].licenses[0].state,
                    specialties_name: res.data[0].specialties[0].name,
                    description: res.data[0].specialties[0].description,
                    actor: res.data[0].specialties[0].actor,
                    practice_name: res.data[0].practices[0].name,
                    website: res.data[0].practices[0].website,
                    accepts_new_patients: res.data[0].practices[0].accepts_new_patients,
                    practice_city: res.data[0].practices[0].visit_address[0].city,
                    practice_state: res.data[0].practices[0].visit_address[0].state,
                    practice_street: res.data[0].practices[0].visit_address[0].street,
                    practice_zip: res.data[0].practices[0].visit_address[0].zip,
                    practice_phone_number: res.data[0].practices[0].phones[0].number,
                    phone_type: res.data[0].practices[0].phones[0].type,
                    language_name: res.data[0].practices[0].languages[0].name,
                    category_types: res.data[0].insurances[0].insurance_plan[0].category,
                    insurance_uid: res.data[0].insurances[0].insurance_plan[0].uid,
                    insurance_name: res.data[0].insurances[0].insurance_plan[0].name
                })
                console.log(this.state)
                // console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    onSubmit(evt) {
        evt.preventDefault();
        const Profile = {
            profile: [{
                first_name: this.state.first_name,
                middle_name: this.state.middle_name,
                last_name: this.state.last_name,
                title: this.state.title,
                image_url: this.state.image_url,
                gender: this.state.gender,
                bio: this.state.bio
            }],
            educations: [{
                school: this.state.school,
                degree: this.state.degree
            }],
            licenses: [{
                number: this.state.license_number,
                state: this.state.license_state
            }],
            specialties: [{
                name: this.state.specialties_name,
                description: this.state.description,
                actor: this.state.actor
            }],
            practices: [{
                name: this.state.practice_name,
                website: this.state.website,
                accepts_new_patients: this.state.accepts_new_patients,
                visit_address: [{
                    city: this.state.practice_city,
                    state: this.state.practice_state,
                    street: this.state.practice_street,
                    zip: this.state.practice_zip
                }],
                phone: [{
                    number: this.state.practice_phone_number,
                    type: this.state.phone_type
                }],
                languages: [{
                    name: this.state.language_name
                }]
            }],
            insurances: [{
                insurance_plan: [{
                    category: [this.state.category_types]
                }],
                uid: this.state.insurance_uid,
                name: this.state.insurance_name
            }]

        }
        console.log(Profile); //eventually this is going to be where we submit the file to the database i.e do our post request

        


        const Url = (`https://med-directory-cen.herokuapp.com/directory/update/${this.state.id}`);

        Axios.put(Url, Profile)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));

        this.setState({
            id: "",
            first_name: "",
            middle_name: "",
            last_name: "",
            title: "",
            gender: "",
            bio: "",
            image_url: "",
            school: "",
            degree: "",
            license_number: "",
            license_state: "",
            specialties_name: "",
            description: "",
            actor: "",
            practice_name: "",
            website: "",
            accepts_new_patients: false,
            practice_city: "",
            practice_state: "",
            practice_street: "",
            practice_zip: "",
            practice_phone_number: "",
            phone_type: "",
            language_name: "",
            category_types: "",
            insurance_uid: "",
            insurance_name: ""
        })
    }



    render() {
        return (
            <div>
                <div className="topform">
                    <h1>Type in your id to edit your profile!</h1>
                    <div>
                        <input className="topforminput" type="text" value={this.state.searchName} placeholder="Type in your first name" onChange={this.onSearchName} />
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
                                <h1>Update your profile</h1>
                                <div>
                                    <input type="text" value={this.state.id} placeholder="Type your profile id" onChange={this.onChangeId} />
                                </div>
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
                                    <input type="text" value={this.state.image_url} placeholder="Enter a url for your image" onChange={this.onChangeImage_url} />
                                </div>
                                <div>
                                    <input type="text" value={this.state.school} placeholder="Enter the name of your school" onChange={this.onChangeSchool} />
                                </div>
                                <div>
                                    <input type="text" value={this.state.degree} placeholder="Enter the degree you earned from the school mentioned above" onChange={this.onChangeDegree} />
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
                                <div>
                                    <input type="text" value={this.state.practice_name} placeholder="Enter the name of your practice" onChange={this.onChangePractice_name} />
                                </div>
                                <div>
                                    <input type="text" value={this.state.website} placeholder="Enter a website url for your practice" onChange={this.onChangeWebsite} />
                                </div>
                                <div>
                                    <input type="text" value={this.state.accepts_new_patients} placeholder="Does your practice accept new patients? true/false" onChange={this.onChangeAccepts_new_patients} />
                                </div>
                                <div>
                                    <input type="text" value={this.state.practice_city} placeholder="Enter the city where you own your practice" onChange={this.onChangePractice_city} />
                                </div>
                                <div>
                                    <input type="text" value={this.state.practice_state} placeholder="Enter the state where you own your practice" onChange={this.onChangePractice_state} />
                                </div>
                                <div>
                                    <input type="text" value={this.state.practice_street} placeholder="Enter a valid Street name for your practice" onChange={this.onChangePractice_street} />
                                </div>
                                <div>
                                    <input type="text" value={this.state.practice_zip} placeholder="Enter a valid zip code for you practice" onChange={this.onChangePractice_zip} />
                                </div>
                                <div>
                                    <input type="text" value={this.state.practice_phone_number} placeholder="Enter a valid phone number for your practice" onChange={this.onChangePractice_phone_number} />
                                </div>
                                <div>
                                    <input type="text" value={this.state.phone_type} placeholder="Land/Cell" onChange={this.onChangePhone_type} />
                                </div>
                                <div>
                                    <input type="text" value={this.state.language_name} placeholder="Enter the languages spoken at your practice eg. English and spanish" onChange={this.onChangeLanguage_name} />
                                </div>
                                <div>
                                    <input type="text" value={this.state.category_types} placeholder="Enter the insurance category accepted at your practice eg. Medical, Vision" onChange={this.onChangeCategory_types} />
                                </div>
                                <div>
                                    <input type="text" value={this.state.insurance_uid} placeholder="Enter a valid insurance uid for your practice" onChange={this.onChangeInsurance_uid} />
                                </div>
                                <div>
                                    <input type="text" value={this.state.insurance_name} placeholder="Enter a valid name for the insurance accepted by your practice" onChange={this.onChangeInsurance_name} />
                                </div>
                                <div>
                                    <input type="submit" placeholder="Create New Profile" />
                                </div>
                            </div>
                        )
                    })}
                </form>
            </div >
        )
    }
}

export default EditProfile;