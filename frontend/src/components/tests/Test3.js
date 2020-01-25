import React, { useState} from 'react';
import { Modal, Row, Col } from 'react-bootstrap';
import QuizApp3 from './QuizApp3';

const Schiz = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <React.Fragment>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Schiz</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <QuizApp3 />
                </Modal.Body>
            </Modal>
            <Row>
                <Col>
                    Schiz
                </Col>
                <Col>
                    <button className="interface-btn" style={{ backgroundColor: "blue" }} onClick={handleShow}>Start</button>
                </Col>
            </Row>
            <hr></hr>
        </React.Fragment>
    )
};
export default Schiz;