import React from 'react';

const Education = () => {
    return (
        <div>
            <hr/>
            <h4 id="Education">Education</h4>

            <h5>British Columbia Institute of Technology</h5>
            <p>Diploma, Computer Systems Technology</p>
            <p>January 2018 - April 2020 (expected)</p>

            <h5 className="marginTop30">Simon Fraser University</h5>
            <p>Bachelor of Business Administration (B.B.A), Management Information
                Systems and Operations Management</p>
            <p>2009 - 2014</p>

            <h5 className="marginTop30">Udemy</h5>
            <p>I love the self-paced curriculums of Udemy courses to not only supplement my
            courses at BCIT but also to learn new technologies that are not in my program's
            curriculum. </p>
            <p>Courses I've taken so far:</p>
            <ul>
              <li>Ethereum and Solidity: The Complete Developer's Guide by Stephen Grider - 100% completed</li>
              <li>The Web Developer Bootcamp by Colt Steele - 70% completed</li>
              <li>The Complete React Native and Redux Course by Stephen Grider - 54% completed</li>
            </ul>
        </div>
    );
}

export default Education;
