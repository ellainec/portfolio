import React, { Component } from 'react';
import paperPlane from '../img/paper-plane.png';
import sadFace from '../img/sad.png';
import GithubLogo from '../img/GitHub-Mark-32px.png';
import LinkedInLogo from '../img/linkedIn.png';

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


    sendEmail = () => {
        console.log("sending...");
        const url = "https://sltmrsoftf.execute-api.us-west-2.amazonaws.com/cors-enabled/kolakucoa";
        return fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                message: this.state.message,
                origin: "ellainechan.com"
            })
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        await this.sendEmail.bind(this)()
            .then((res) => {
                if (res.status === 200) {
                    this.setState({onSubmitResponse: "Message sent, thanks!"});
                }
            })
            .catch((err) => {  
                this.setState({onSubmitResponse: "Sorry there was an error, please email me at chan.ellaine@gmail.com"});     
            });
    };

    render() {
        return (
            <div>
                <hr />
                <h4 id="Contact">Contact Me</h4>
                <div className="logoDiv d-flex flex-wrap justify-content-around">
                    <a href="https://github.com/ellainec"><img src={GithubLogo} alt="Github Logo"/></a>
                    <a href="https://www.linkedin.com/in/ellainec"><img src={LinkedInLogo} alt="LinkedIn Logo" /></a>
                    <span className="text-info" id="email">chan.ellaine@gmail.com</span>
                </div>
                <form id="contact-form">
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            value={this.state.name}
                            onChange={event => this.setState({name: event.target.value})}
                        />
                         { this.state.nameError && <span className="errorText">Name is missing</span>}
                    </div>
                    <div className="form-group">
                        <label>Email address</label>
                        <input
                            type="email"
                            required
                            className="form-control"
                            value={this.state.email}
                            onChange={event => this.setState({email: event.target.value})}
                        />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea
                            ref="message"
                            required
                            className="form-control"
                            rows="5"
                            value={this.state.message}
                            onChange={event => this.setState({message: event.target.value})}/>
                    </div>
                    <div className="text-primary contactMessage"> {this.state.onSubmitResponse} </div>
                    <button className="btn btn-outline-dark btn-block" onClick= {this.handleSubmit.bind(this)}>Submit</button>
                </form>
            </div>
        );
    }
}

export default ContactForm;
