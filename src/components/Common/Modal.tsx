import React from 'react';
import { Modal, Button } from 'react-bootstrap'; // Assuming you're using Bootstrap for styling

interface ModalProps {
  show: boolean;
  onHide: () => void;
  title: string;
  body: React.ReactNode;
}

const CustomModal: React.FC<ModalProps> = ({ show, onHide, title, body }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        {/* Additional buttons or actions can be added here */}
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;
