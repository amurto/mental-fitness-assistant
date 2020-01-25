import React, { useState} from 'react';
import { Modal, Row, Col } from 'react-bootstrap';
import QuizApp4 from './QuizApp4';

const Bipolar = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <React.Fragment>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Bipolar</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <QuizApp4 />
                </Modal.Body>
            </Modal>
            <Row>
                <Col>
                    Bipolar
                </Col>
                <Col>
                    <button className="interface-btn" style={{ backgroundColor: "blue" }} onClick={handleShow}>Start</button>
                </Col>
            </Row>
            <hr></hr>
        </React.Fragment>
    )
};
export default Bipolar;