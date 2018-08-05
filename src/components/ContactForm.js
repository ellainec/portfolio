import React, { Component } from 'react';
import axios from 'axios';

class ContactForm extends Component {
    state = {
        name: '',
        email: '',
        message: ''
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.message);
        axios({
            method: "POST",
            url: "http://localhost:8080/send",
            data: {
                name: this.state.name,
                email: this.state.email,
                message: this.state.message
            }
        }).then((response) => {
            if (response.data.msg === 'success') {
                alert("Message Sent.");
                this.resetForm()
            } else if (response.data.msg === 'fail') {
                alert("Message failed to send.")
            }
        })
    };

    resetForm(){
        document.getElementById('contact-form').reset();
    };

    render() {
        return (
            <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={this.state.name}
                        onChange={event => this.setState({name: event.target.value})}
                    />
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        value={this.state.email}
                        onChange={event => this.setState({email: event.target.value})}
                    />
                </div>
                <div className="form-group">
                    <label>Message</label>
                    <textarea
                        ref="message"
                        className="form-control"
                        rows="5"
                        value={this.state.message}
                        onChange={event => this.setState({message: event.target.value})}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

export default ContactForm;