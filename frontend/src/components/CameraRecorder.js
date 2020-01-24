import React from 'react';
import RecordRTC from 'recordrtc';
import { Col, Row } from 'react-bootstrap';

class CameraRecorder extends React.Component {
  constructor(props) {
    super(props);
    this.state = { recordVideo: null };

    this.requestUserMedia = this.requestUserMedia.bind(this);
    this.startRecord = this.startRecord.bind(this);
    this.stopRecord = this.stopRecord.bind(this);
    this.getUserMedia = this.getUserMedia.bind(this);
  }
  
  requestUserMedia() {
    this.getUserMedia(stream => {
      this.setState({ src: window.URL.createObjectURL(stream) });
    });
  }

  startRecord() {
    this.getUserMedia(stream => {
      // eslint-disable-next-line
      this.state.recordVideo = RecordRTC(stream, { type: 'video' });
      this.state.recordVideo.startRecording();
    });
  }

  stopRecord() {
    this.state.recordVideo.stopRecording(() => {
      this.state.recordVideo.save();
      const formData = new FormData(); 
      formData.append('video', this.state.recordVideo.blob);
      formData.append('name', 'hi');
      console.log(formData);
      fetch('http://localhost:5000/video', {
        method: 'POST',
        body: formData,
        }).then((response) => {
          response.json().then(() => {
            console.log("OK")
          });
      });
    });
  }

  getUserMedia(callback) {
    navigator.getUserMedia({ audio: true, video: true }, callback, error => alert(JSON.stringify(error)));
  }

  render() {
    return (
      <Row>
        <Col>
          <button className="interface-btn" style={{backgroundColor: "forestgreen"}} onClick={this.startRecord}>Start Record</button>
        </Col>
        <Col>
          <button className="interface-btn" style={{backgroundColor: "red"}} onClick={this.stopRecord}>Stop Record</button>
        </Col>
      </Row>
    )
  }
}

export default CameraRecorder;