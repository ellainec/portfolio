import React from 'react';

const Experience = () => {
    return(
        <div className="container">
            <hr />
            <h4>Experience</h4>
              <h5>Global Governance Manager, Vendor and Contract</h5>
              <p>Appnovation Technologies, 2015 - 2018</p>
              <ul>
							<li>As Global Governance Manager, I was focused on improving and monitoring the quality of V&amp;C’s (Vendor and
							Contract Management) global services to its internal customers within each region.</li>

							<li>I oversaw the global team of regional Category Managers and provide guidance and support to ensure business
							requirements are met on time and on margin.</li>

							<li>Provided training and leadership to Category Manager team in strategic sourcing, negotiation, contract
							reviews and vendor related issues.</li>

							<li>Proactively sought after areas of improvement and implement operational controls to increase efficiency and
							service quality.</li>

							<li>Measured quality and performance and create related management reporting for V&amp;C.</li>
						</ul>

            <h5>Global Governance Manager, Vendor and Contract</h5>
            <p>Appnovation Technologies, 2015</p>
            <ul>
							<li>Sourced, created, and built relationships with vendors around the globe including North America,
							Europe, Asia and South America with a focus on IT services. </li>
							<li>Negotiated terms and rates to acquire cost savings and ensure business requirements were met.</li>
						</ul>

            <a data-toggle="collapse" href="#moreExperience" role="button" aria-expanded="false" aria-controls="moreExperience">
            <h6 id="show-more-button">Show More</h6>
            </a>
            <div class="collapse" id="moreExperience">
              <h5>Global Governance Manager, Vendor and Contract</h5>
              <p>Appnovation Technologies, 2015</p>
              <ul>
  							<li>Sourced, created, and built relationships with vendors around the globe including North America,
  							Europe, Asia and South America with a focus on IT services. </li>
  							<li>Negotiated terms and rates to acquire cost savings and ensure business requirements were met.</li>
  						</ul>
            </div>
        </div>
    )
}

export default Experience;
