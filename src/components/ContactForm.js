import React, { Component } from 'react';
import axios from 'axios';
import GithubLogo from '../img/GitHub-Mark-32px.png';
import LinkedInLogo from '../img/linkedIn.png';
import GmailLogo from '../img/logo_gmail_32px.png';

class ContactForm extends Component {
    state = {
        name: '',
        email: '',
        message: '',
        onSubmitResponse: ''
    };

    resetForm = () => {
        this.setState({name: '', email:'', message: '', onSubmitResponse: 'Message sent'});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.message);
        axios({
            method: "POST",
            url: "https://desolate-citadel-94239.herokuapp.com/send",
            data: {
                name: this.state.name,
                email: this.state.email,
                message: this.state.message
            }
        }).then(response => {
            if (response.data === 'success') {
                this.resetForm();
            } else if (response.data === 'failed') {
                this.setState({onSubmitResponse: 'Unable to send message.'});
            }
        })
    };


    render() {
        return (
            <div>
                <hr />
                <h4 id="Contact">Contact Me</h4>
                <p className="text-info" id="email">contactellaine@gmail.com</p>
                <div className="logoDiv d-flex flex-wrap justify-content-around">
                    <a href="https://github.com/ellainec"><img src={GithubLogo} alt="Github Logo"/></a>
                    <a href="https://www.linkedin.com/in/ellainec"><img src={LinkedInLogo} alt="LinkedIn Logo" /></a>
                </div>
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
                    <div className="text-primary contactMessage"> {this.state.onSubmitResponse} </div>
                    <button type="submit" className="btn btn-outline-dark btn-block">Submit</button>
                </form>
            </div>
        );
    }
}

export default ContactForm;