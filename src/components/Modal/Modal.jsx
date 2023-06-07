import styles from './Modal.module.css';

export const Modal = ({ photoForModal, handleModalButtonClose }) => {
  return (
    <div className={styles.Overlay} onClick={handleModalButtonClose}>
      <div className={styles.Modal}>
        <img src={photoForModal} alt="" />
      </div>
    </div>
  );
};
