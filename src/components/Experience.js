import React, { Component } from 'react';

class Experience extends Component {
    state = {
        toggleMessage: 'Show More'
    };

    toggleMessage = () => {
        if(this.state.toggleMessage == 'Show More') {
            this.setState({toggleMessage: 'Show Less'});
        }
    }

    render() {
        return (
            <div className="container">
                <hr/>
                <h4>Experience</h4>
                <h5>Global Governance Manager, Vendor and Contract</h5>
                <p>Appnovation Technologies, September 2015 - January 2018</p>
                <ul>
                    <li>As Global Governance Manager, I was focused on improving and monitoring the quality of V&amp;C’s
                        (Vendor and
                        Contract Management) global services to its internal customers within each region.
                    </li>

                    <li>I oversaw the global team of regional Category Managers and provide guidance and support to
                        ensure business
                        requirements are met on time and on margin.
                    </li>

                    <li>Provided training and leadership to Category Manager team in strategic sourcing, negotiation,
                        contract
                        reviews and vendor related issues.
                    </li>

                    <li>Proactively sought after areas of improvement and implement operational controls to increase
                        efficiency and
                        service quality.
                    </li>

                    <li>Measured quality and performance and create related management reporting for V&amp;C.</li>
                </ul>

                <h5>Category Manager, Vendor and Contract</h5>
                <p>Appnovation Technologies, January 2015 - August 2015</p>
                <ul>
                    <li>Sourced, created, and built relationships with vendors around the globe including North America,
                        Europe, Asia and South America with a focus on IT services.
                    </li>
                    <li>Negotiated terms and rates to acquire cost savings and ensure business requirements were met.
                    </li>
                </ul>
                <div className="collapse" id="moreExperience">
                    <h5>Operations Coordinator</h5>
                    <p>Appnovation Technologies, January 2014 - January 2015</p>
                    <ul>
                        <li>Responsible for identifying, vetting, negotiating and fulfilling contractor and vendor
                            requests
                            for all departments, but primarily for the Professional Services group.
                        </li>
                        <li>Day-to-day activities include ongoing communication with vendors, administering
                            contracts (NDA, MSA, SOW) and matching contractors with projects as per requirements
                            provided
                            by the delivery team.
                        </li>
                        <li>Assist in all other areas of the Operations team as required, such as projecting the
                            Operations
                            cost for the fiscal year, keeping track of departmental spending, creating documents for
                            Operations
                            department procedures and processes, and occasional projects such as a new office build.
                        </li>
                    </ul>
                    <h5>Data Management Coordinator (co-op term)</h5>
                    <p>Appnovation Technologies, September 2013 - December 2013</p>
                    <ul>
                        <li>Revamped the company's file repository system within Alfresco and managed the project from
                            beginning
                            to end.
                        </li>
                        <li>Conducted interviews with each department head to gather requirements, designed new
                            structures and
                            procedures, and worked closely with an Alfresco developer to implement the improvements.
                        </li>
                        <li>Introduced the changes in a company wide presentation upon completion.</li>
                    </ul>
                    <h5>Taxpayer Service Agent (co-op term)</h5>
                    <p>Canada Revenue Agency, September 2012 - May 2013</p>
                    <ul>
                        <li>Addressed taxpayer inquiries of their tax assessments and delivered timely and accurate
                            answers by
                            researching and analyzing information on internal databases.
                        </li>
                        <li>Overcame communication obstacles through the application of soft skills such as clarifying,
                            paraphrasing, probing, and adaptation to different communication styles.
                        </li>
                    </ul>
                    <h5>Personal Banker</h5>
                    <p>HSBC, March 2011 - September 2012</p>
                    <ul>
                        <li>Delivered exceptional and consistent customer service experience. Engaged in customer
                            conversations
                            to understand financial needs and identify sales opportunities.
                        </li>
                        <li>Prepared daily branch reports and balanced cash totals.</li>
                    </ul>
                </div>
                <a data-toggle="collapse" href="#moreExperience" role="button" aria-expanded="false"
                   aria-controls="moreExperience" onClick={this.toggleMessage}>
                    <h6 id="show-more-button">{this.state.toggleMessage}</h6>
                </a>
            </div>
        )
    }
}

export default Experience;
