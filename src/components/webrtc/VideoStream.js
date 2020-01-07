import React, { useEffect, useState } from 'react';
import { Rnd } from 'react-rnd';

const VideoStream = (props) => {
    const { stream, id } = props;
    const  [width, setWidth] = useState(500);
    const [height, setHeight] = useState(400);
    const [y, setY] = useState(0);
    const [x, setX] = useState(0);
    
    const setStream = () => {
        const video = document.getElementById(id); 
        video.srcObject = stream;
    }

    useEffect(() => setStream());

    return (
        <Rnd
        className="blueBackground"
        size={{ width: width,  height: height }}
        position={{ x: x, y: y }}
        onDragStop={(e, d) => { setY(d.y); setX(d.x) }}
        onResizeStop={(e, direction, ref, delta, position) => {
            setWidth(ref.style.width);
            setHeight(ref.style.height);
        }}
        >
        <div><label>{props.name}</label>
        <video height="100%" width="100%" id={props.id} autoPlay></video>
        <div><button onClick={()=>{stream.getVideoTracks()[0].enabled = false}}>disableVideo</button></div>
        <div><button onClick={()=>{console.log(stream.getTracks())}}>getTracks</button></div>
        <div><button onClick={()=>{stream.getVideoTracks()[0].enabled = true}}>enableVideo</button></div>
        </div>
        </Rnd>

    );
}

export default VideoStream;