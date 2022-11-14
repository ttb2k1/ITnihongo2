import React from "react";
import Webcam from "react-webcam";
import './Webcam.css';
const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
};

const WebcamCapture = () => {
    const webcamRef = React.useRef(null);
    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
        },
        [webcamRef]
    );
    return (
        <div className="Webcam">
            <Webcam
                className="webcam-scn"
                audio={false}
                height={720}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={1280}
                videoConstraints={videoConstraints}
            />
            <button className="btn-capture" onClick={capture}>Capture photo</button>
        </div>
    );
};
export default WebcamCapture;