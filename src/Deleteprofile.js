import React, { Component } from 'react';
import Axios from 'axios'

class DeleteProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            query: "",
            id: ""
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeId = this.onChangeId.bind(this);
    }

    onChangeId(evt) {
        evt.preventDefault();
        this.setState({
            id: evt.target.value
        });
    }

    onSubmit(evt) {
        evt.preventDefault();
        if (this.state.id){
            const Url = (`http://localhost:8080/directory/id/${this.state.id}`);

            Axios.delete(Url)
            .then(res => console.log(res))
            .catch(err => console.log(err));

            this.setState({ id: ""})
        }
        
    }

    render() {
        const { query, result } = this.state;
        return (
            <div>
                <h1>Welcome</h1>
                <h2>insert some thing about doctors</h2>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <h3>
                            We would apreciate your feedback
                        </h3>
                        <div>
                            <input type="text" value={this.state.id} placeholder="Type your profile id" onChange={this.onChangeId} />
                        </div>
                        <div>
                            <input type="submit" placeholder="Delete Profile" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default DeleteProfile;