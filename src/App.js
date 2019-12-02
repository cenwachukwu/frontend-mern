import React, { Component } from 'react';
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Doctors from "./Doctors";
import DoctorEdit from "./DoctorEdit";
import Findalldoctors from "./Findalldoctors"
import Profile from "./Searchbyprofile";
import Insurance from "./Searchbyinsurance";
import Speciality from "./Searchbyspeciality";
import CreateProfile from "./Createprofile";
import DeleteProfile from "./Deleteprofile";
import EditProfile from "./Editprofile"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <br />
          <Route path="/" exact component ={Home}/>
          <Route path="/About" component ={About}/>
          <Route path="/Doctors" component ={Doctors}/>
          <Route path="/DoctorEdit" exact component ={DoctorEdit}/>
          <Route path="/Doctors/findall" component ={Findalldoctors}/>
          <Route path="/Doctors/searchbyprofile" component ={Profile}/>
          <Route path="/Doctors/searchbyinsurance" component ={Insurance}/>
          <Route path="/Doctors/searchbyspeciality" component ={Speciality}/>
          <Route path="/DoctorEdit/createprofile" component ={CreateProfile}/>
          <Route path="/DoctorEdit/editprofile" component ={EditProfile}/>
          <Route path="/DoctorEdit/deleteprofile" component ={DeleteProfile}/>
        </Router>
      </div>
    );
  };

};

export default App;