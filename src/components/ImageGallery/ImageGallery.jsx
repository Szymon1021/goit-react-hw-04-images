import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import styles from './Image.Gallery.module.css';

export const ImageGallery = ({ photos, handleModalButton }) => {
  return (
    <ul className={styles.ImageGallery}>
      {photos.map(photo => {
        return (
          <ImageGalleryItem
            key={photo.id}
            webformatURL={photo.webformatURL}
            handleModalButton={handleModalButton}
            largeImageURL={photo.largeImageURL}
          />
        );
      })}
    </ul>
  );
};
