import React, { useState} from 'react';
import { Modal, Row, Col } from 'react-bootstrap';
import QuizApp1 from './QuizApp1';

const BDI = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <React.Fragment>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>BDI</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <QuizApp1 />
                </Modal.Body>
            </Modal>
            <Row>
                <Col>
                    BDI
                </Col>
                <Col>
                    <button className="interface-btn" style={{ backgroundColor: "blue" }} onClick={handleShow}>Start</button>
                </Col>
            </Row>
            <hr></hr>
        </React.Fragment>
    )
};
export default BDI;
