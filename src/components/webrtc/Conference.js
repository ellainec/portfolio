import React, {useEffect, useState} from 'react';
import signalhub from 'signalhub';
import webrtcswarm from 'webrtc-swarm';
import VideoStream from './VideoStream';

const Conference = (props) => {
    const [localStream, setLocalStream] = useState(null);
    const [otherStreams, setOtherStreams] = useState({});

    const hub = signalhub(`${props.meetingNumber}`, [
        'https://signalhub-jccqtwhdwc.now.sh']);

    const getStream = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
            setLocalStream(<VideoStream id="myVideo" stream={stream} name={props.name}/>);
            const swarm = webrtcswarm(hub, {stream:stream});
            swarm.on('connect', (peer, id) => {
                if(!otherStreams[id]) {
                    console.log("PEER: ", JSON.stringify(peer));
                    console.log("ID: ", id);
                    setOtherStreams({
                        id: <VideoStream id={id} stream = {peer.stream}/>,
                        ...otherStreams 
                    });
                    peer.send(props.name);
                }
                peer.on('data', function(data) {
                    // console.log("FROM: ", JSON.stringify(peer));
                    console.log("FROM ID: ", id);
                    console.log("data: ", data.toString());
                    setOtherStreams({
                        id: <VideoStream id={id} stream = {peer.stream} name={data.toString()} />,
                        ...otherStreams 
                    });

                })
            })
        } catch(err) {
            alert(`Error, unable to stream at this time`);
        }
    }
    
    const displayOthers = () => {
        return Object.values(otherStreams);
    }
    
    useEffect(()=>{
        getStream();
    }, []);

    return (
        <React.Fragment>
        { localStream }
            {displayOthers()}
        </React.Fragment>
    );
}

export default Conference;