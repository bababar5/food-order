import styles from "./Modal.module.css";
import { createPortal } from "react-dom";
import Card from "./Card";



const Backdrop = (props) => {
  return <div onClick={props.onHide} className={styles.backdrop}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const portalDiv = document.getElementById('overlays')

const Modal = (props) => {
  return (
      <Card>
      {createPortal(<Backdrop onHide={props.onHideModal} />, portalDiv)}
      {createPortal(<ModalOverlay onHide={props.onHideModal}>{props.children}</ModalOverlay>, portalDiv)}
    </Card>
  );
};

export default Modal;
