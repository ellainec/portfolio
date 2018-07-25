import React from 'react';
import portrait from '../img/me.jpg'
const Section = () => {
    return(
        <div className="container">
            <hr />
            <div className="d-flex">
                <img width="150" height="161" src={portrait} alt="Ellaine smiling amongst a background of flowers"/>
                <div className="float-right d-flex align-items-center">
                <div>Hello, my name is Ellaine and I'm a software developer in training at BCIT's Computer Systems Technology program.
                    Before I began my coding journey, I had graduated from Simon Fraser University with a Bachelor of Business
                    Administration. With that, I spent around 4 years helping a IT services company source, negotiate and manage
                    their global vendors and contracts</div>
                </div>
            </div>
        </div>
        );
};
export default Section;
