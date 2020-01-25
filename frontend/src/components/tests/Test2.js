import React, { useState} from 'react';
import { Modal, Row, Col } from 'react-bootstrap';
import QuizApp2 from './QuizApp2';

const HAnxiety = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <React.Fragment>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>HAnxiety</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <QuizApp2 />
                </Modal.Body>
            </Modal>
            <Row>
                <Col>
                HAnxiety
                </Col>
                <Col>
                    <button className="interface-btn" style={{ backgroundColor: "blue" }} onClick={handleShow}>Start</button>
                </Col>
            </Row>
            <hr></hr>
        </React.Fragment>
    )
};
export default HAnxiety;