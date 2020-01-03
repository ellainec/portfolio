import React from 'react';

const Position = (props) => {
    const {title, company, period, descriptionList} = props;
    console.log(JSON.stringify(descriptionList));
    return (
        <React.Fragment>
            <h5>{title}</h5>
            <p>{company}, {period}</p>
            <ul>
                {descriptionList.map((item) => 
                    <li>{item}</li>
                )}
            </ul>
        </React.Fragment>
    );
}

export default Position;