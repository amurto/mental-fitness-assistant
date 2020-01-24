import React from 'react';
import Webcam from 'react-webcam';
import { Card } from 'react-bootstrap';

const WebcamCapture = () => {
    return (
            <Card border="light" className="webcam-card">
                <Webcam />
            </Card> 
        );
};

export default WebcamCapture;
