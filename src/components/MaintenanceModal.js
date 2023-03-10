import React from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Maintenance = () => {
    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Maintenance </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p> Working Hours: 8am - 6pm</p>
                    <p>Phone Number:123-456-789</p>
                    <p>After Hours Number: 123-456-789</p>
                    <p> Pending Requests: </p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>

    );
}

export default Maintenance;