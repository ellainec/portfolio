import React, { Component } from 'react';
import Position from './Position';

class Experience extends Component {
    state = {
        toggleMessage: 'Show More'
    };

    toggleMessage = () => {
        if(this.state.toggleMessage === 'Show More') {
            this.setState({toggleMessage: 'Show Less'});
        }
    }

    render() {
        return (
            <div className="container">
                <hr/>
                <h4 id="Work Experience">Experience</h4>
                <Position title="Software Engineer Co-op" 
                    company = "Realtor.com" 
                    period= "January 2019 - August 2019"
                    descriptionList = {[
                        `I worked on the team that was responsible for building Market Insight reports,which is a feature 
                        provided by Realtor.com that enables agents to email real-time, local market information 
                        (powered by MLS data) to their clients.`,
                        `Built new features and fixed bugs on the back end Node.js service hosted on AWS`,
                        `Created and updated components on the front end React project, first using redux and class components
                         and then later on React hooks`,
                        `Worked in an Agile environment, and acted as rotating Scrum Master every other sprint to lead and present in weekly meetings`,
                        `Gained experience with adding new queries and mutations to GraphQL project, implemeted on Apollo and AWS AppSync`]}/>

                <Position title="Global Governance Manager, Vendor and Contract" 
                    company = "Appnovation Technologies" 
                    period= "September 2015 - January 2018"
                    descriptionList = {[
                        `As Global Governance Manager, I was focused on improving and monitoring the quality of
                        Vendor and Contract Management's services to its internal customers within each region.`,
                        `I oversaw the global team of regional Category Managers and provide guidance and support to
                        ensure business requirements are met on time and on margin.`,
                        `Provided training and leadership to Category Manager team in strategic sourcing, negotiation,
                        contract reviews and vendor related issues.`,
                        `Proactively sought after areas of improvement and implement operational controls to increase
                        efficiency and service quality`]}/>

                <Position title="Category Manager, Vendor and Contract" 
                    company = "Appnovation Technologies" 
                    period= "January 2015 - August 2015"
                    descriptionList = {[
                        `Sourced, created, and built relationships with vendors around the globe including North America,
                        Europe, Asia and South America with a focus on IT services.`,
                        `Negotiated terms and rates to acquire cost savings and ensure business requirements were met.`]}/>
        

                <div className="collapse" id="moreExperience">
                    <Position title="Operations Coordinator" 
                        company = "Appnovation Technologies" 
                        period= "January 2014 - January 2015"
                        descriptionList = {[
                            `Responsible for identifying, vetting, negotiating and fulfilling contractor and vendor
                            requests for all departments, but primarily for the Professional Services group.`,
                            `Day-to-day activities include ongoing communication with vendors, administering
                            contracts (NDA, MSA, SOW) and matching contractors with projects as per requirements
                            provided by the delivery team.`,
                            `Assist in all other areas of the Operations team as required, such as projecting the
                            Operations cost for the fiscal year, keeping track of departmental spending, creating documents for
                            Operations department procedures and processes, and occasional projects such as a new office build.`]}/>
                    
                    <Position title="Data Management Coordinator (co-op term)" 
                        company = "Appnovation Technologies" 
                        period= "September 2013 - December 2013"
                        descriptionList = {[
                            `Revamped the company's file repository system within Alfresco and managed the project from
                            beginning to end.`,
                            `Conducted interviews with each department head to gather requirements, designed new
                            structures and`,
                            `Introduced the changes in a company wide presentation upon completion.`]}/>

                    <Position title="Taxpayer Service Agent (co-op term)" 
                        company = "Canada Revenue Agency" 
                        period= "September 2012 - May 2013"
                        descriptionList = {[
                            `Addressed taxpayer inquiries of their tax assessments and delivered timely and accurate
                            answers by researching and analyzing information on internal databases.`,
                            `Overcame communication obstacles through the application of soft skills such as clarifying,
                            paraphrasing, probing, and adaptation to different communication styles.`]}/>

                    <Position title="Personal Banker" 
                        company = "HSBC" 
                        period= "March 2011 - September 2012"
                        descriptionList = {[
                            `Delivered exceptional and consistent customer service experience. Engaged in customer
                            conversations to understand financial needs and identify sales opportunities.`,
                            `Prepared daily branch reports and balanced cash totals.`]}/>        
                </div>
                <a data-toggle="collapse" href="#moreExperience" role="button" aria-expanded="false"
                   aria-controls="moreExperience" onClick={this.toggleMessage}>
                    <h6 className="show-more-button">{this.state.toggleMessage}</h6>
                </a>
            </div>
        )
    }
}

export default Experience;
