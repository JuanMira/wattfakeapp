import React from 'react';
import { Modal, Icon } from 'semantic-ui-react';

const BasicModal = ({ show, setShow, title, children }) => {

    const onClose = () => {
        setShow(false)
    }

    return (
        <Modal open={show} onClose={onClose} size="tiny">
            <Modal.Header>
                {title}
                <Icon name="close" onClick={onClose} link />
            </Modal.Header>
            <Modal.Content>
                {children}
            </Modal.Content>
        </Modal>
    );
}

export default BasicModal;