import React, { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root')


const CalendarModal = () => {

  const [isOpen, setIsOpen] = useState(true);
  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <Modal
      isOpen={isOpen}
      // onAfterOpen={afterOpenModal}
      closeTimeoutMS={200}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
      className='modal'
      overlayClassName='modal-fondo'
    >
      <h1>Hola mundo</h1>
    </Modal>
  );
}
 
export default CalendarModal;