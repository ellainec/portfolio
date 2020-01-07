import React, { useState } from 'react';
import Conference from './Conference';
import JoinForm from './JoinForm';


const WebRtc = () => {
    const [meetingNum, setMeetingNum] = useState();
    const [name, setName] = useState();
    const [joined, setJoined] = useState(false);
    const [error, setError] = useState();
    const joinForm = () => {
        return (
            <div>
            <label>Meeting Number: </label>
            <input type="text" onChange={e=>setMeetingNum(e.target.value)} value={meetingNum}/>
            <br/>
            <label>Your Name:</label>
            <input type="text" onChange={e=> setName(e.target.value)} value={name}/>
            <button onClick={()=> handleJoin()}>Join</button>
            <span>{error}</span>
            </div>
        
        )
    }

    const handleJoin = () => {
        if(meetingNum && name) {
            setJoined(true);
        } else {
            setError("error");
        }
    }

    const startConference = () => {
            return <Conference name={name} meetingNumber={meetingNum}/>
    }

    return (
        <div>
        {joined ? startConference() : joinForm()}
        </div>
    )


}

export default WebRtc;