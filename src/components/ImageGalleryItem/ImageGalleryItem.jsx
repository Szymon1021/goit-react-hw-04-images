import styles from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({
  webformatURL,
  handleModalButton,
  largeImageURL,
}) => {
  return (
    <li className={styles.ImageGalleryItem}>
      <button
        className={styles.button}
        title="open big image"
        onClick={() => handleModalButton(largeImageURL)}
      >
        <img src={webformatURL} alt="" className={styles.image} />
      </button>
    </li>
  );
};
