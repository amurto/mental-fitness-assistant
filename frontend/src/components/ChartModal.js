import React from 'react';
import { Modal } from 'react-bootstrap';

const ChartModal = ({ handleClose, show, children }) => { 
    return (  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Emotion Detection Report</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {children}
          </Modal.Body>
        </Modal>
    );
}
  
export default ChartModal;