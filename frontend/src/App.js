import React from 'react';
import WebcamCapture from './components/WebcamCapture';
import CameraRecorder from './components/CameraRecorder';
import NavBar from './components/NavBar';
import Chat from './components/Chat';
import Tests from './components/Tests';
import { Row, Col } from 'react-bootstrap';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
        <div className="slider_area">
        <div className="single_slider  d-flex align-items-center slider_bg_1">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-7 col-md-6">
                        <div className="slider_text ">
                            <h3 className="wow fadeInDown" data-wow-duration="1s" data-wow-delay=".1s" >Your Mental Fitness Assistant</h3>
                            <p className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".1s">Your mental illness doesn’t define you but your fight with it will definitely do it</p>
                            <div className="video_service_btn wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".1s">
                                <a href="/#" className="boxed-btn3">Go</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-md-6">
                        <div className="phone_thumb wow fadeInDown" data-wow-duration="1.1s" data-wow-delay=".2s">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="wrapper-container">
        <div className="container container-card"> 
          <Row>
            <Col md={6} sm={12}>
              <WebcamCapture />
              <CameraRecorder />
            </Col>
            <Col md={6} sm={12}>
              <Chat />
            </Col>
          </Row>
        </div>
      </div>  
      <Tests />
    </React.Fragment>
  );
}

export default App;
