import React from 'react';
import WebcamCapture from './components/WebcamCapture';
import CameraRecorder from './components/CameraRecorder';
import NavBar from './components/NavBar';
import Chat from './components/Chat';
import { Container, Row, Col } from 'react-bootstrap';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
        <div class="slider_area">
        <div class="single_slider  d-flex align-items-center slider_bg_1">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-xl-7 col-md-6">
                        <div class="slider_text ">
                            <h3 class="wow fadeInDown" data-wow-duration="1s" data-wow-delay=".1s" >Your Mental Fitness Assistant</h3>
                            <p class="wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".1s">Your mental illness doesn’t define you but your fight with it will definitely do it</p>
                            <div class="video_service_btn wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".1s">
                                <a href="/#" class="boxed-btn3">Go</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-5 col-md-6">
                        <div class="phone_thumb wow fadeInDown" data-wow-duration="1.1s" data-wow-delay=".2s">
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
    </React.Fragment>
  );
}

export default App;
