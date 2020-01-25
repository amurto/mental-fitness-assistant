import React from 'react';
import RecordRTC from 'recordrtc';
import { Col, Row, Spinner } from 'react-bootstrap';
import ChartModal from './ChartModal.js';

class CameraRecorder extends React.Component {
  constructor(props) {
    super(props);
    this.state = { recordVideo: null };

    this.requestUserMedia = this.requestUserMedia.bind(this);
    this.startRecord = this.startRecord.bind(this);
    this.stopRecord = this.stopRecord.bind(this);
    this.getUserMedia = this.getUserMedia.bind(this);
  }

  state = { show: false };
  state = { results: false };

  setResults = () => {
    this.setState({ results: true })
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  
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
      const mp4video = new Blob([this.state.recordVideo.blob], {type: 'video/mp4'});
      const formData = new FormData(); 
      formData.append('video', this.state.recordVideo.blob);
      formData.append('name', 'hi');
      formData.append('mp4video', mp4video);
      console.log(formData);
      fetch('http://b91146cc.ngrok.io/video', {
        method: 'POST',
        body: formData
        }).then((response) => {
          response.json().then(() => {
            this.setResults();
            this.setState({ show: true });
            console.log("OK");
          });        
      });
    });
  }

  getUserMedia(callback) {
    navigator.getUserMedia({ audio: true, video: true }, callback, error => alert(JSON.stringify(error)));
  }

  render() {
    return (
      <React.Fragment>
        <Row>
          <ChartModal show={this.state.show} handleClose={this.hideModal}>
            {!this.state.results && (
              <div  className="center" style={{ padding: "30%", textAlign: "center" }}>
                <Spinner animation="grow" variant="info" />
              </div>
            )}
          </ChartModal>
          <Col>
            <button className="interface-btn" style={{backgroundColor: "forestgreen"}} onClick={this.startRecord}>Start Record</button>
          </Col>
          <Col>
            <button className="interface-btn" style={{backgroundColor: "red"}} onClick={this.stopRecord}>Stop Record</button>
          </Col>
        </Row>
        <hr></hr>
        {this.state.recordVideo && (
          <div>
            <button className="interface-btn" style={{ backgroundColor: "blue", marginBottom: "30px" }} onClick={this.showModal}>Check Results</button>
          </div>
        )}
      </React.Fragment>
    )
  }
}

export default CameraRecorder;