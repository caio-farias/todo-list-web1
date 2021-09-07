import React from "react"
import { Button } from "../index";
import './index.scss'

const Modal = ({
  showModal,
  children,
  setShowModal,
  path = '/app',
  buttonMessage = 'Voltar',
  ...rest
}) =>
  showModal && (
    <div className="modal--on">
      <ModalContent 
        showModal = {showModal}
        setShowModal = {setShowModal} 
        buttonMessage = {buttonMessage} 
        path={path} 
        {...rest}
        >
        {children}
      </ModalContent>
    </div>
  );
 
const ModalContent = ({ showModal, setShowModal, children, path, buttonMessage, ...rest }) => {
    return (
      <div className="modal-wrapper">
        <h1 className="modal__title">{children}</h1>
        <Button onClick={setShowModal} {...rest}>
          {buttonMessage}
        </Button>
      </div>
    );
};
  
export default Modal
