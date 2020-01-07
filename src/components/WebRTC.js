import React, {useEffect, useState} from 'react';
import signalhub from 'signalhub';
import webrtcswarm from 'webrtc-swarm';
import VideoStream from './VideoStream';

const WebRTC = () => {
    const [localStream, setLocalStream] = useState(null);
    const [otherStreams, setOtherStreams] = useState({});

    const hub = signalhub('sdkf82n3299f832892fnejhf90f8334n', [
        'https://signalhub-jccqtwhdwc.now.sh']);

    const getStream = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
            setLocalStream(<VideoStream id="myVideo" stream={stream}/>);
            const swarm = webrtcswarm(hub, {stream:stream});
            swarm.on('connect', (peer, id) => {
                if(!otherStreams[id]) {
                    setOtherStreams({
                        id: <VideoStream id={id} stream = {peer.stream}/>,
                        ...otherStreams 
                    });
                    peer.send("Name Lola");
                }
                peer.on('data', function(data) {
                    data.forEach(char => {
                        console.log(String.fromCharCode(char));
                    })
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

export default WebRTC;