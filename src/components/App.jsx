import { ImageFinder } from './ImageFinder/ImageFinder';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchPhotos } from 'components/api';
import { Button } from './Button/Button';
import Loader from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { useState, useEffect } from 'react';

export const App = () => {
  const [photo, setPhoto] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [photoForModal, setPhotoForModal] = useState('');

  const handleInput = evt => {
    evt.preventDefault();
    setSearch(evt.target.value);
  };

  const handleGetRequest = async e => {
    e.preventDefault();
    setIsLoading(true);
    const response = await fetchPhotos(search);
    setPhoto(response.hits);
    setIsLoading(false);
  };
  /*
  useEffect(() => {
    const asyncFunc = async () => {
      setIsLoading(true);
      const photos = await fetchPhotos(search, page);

      setPhoto(prevPhotos => [...prevPhotos, ...photos.hits]);
      setIsLoading(false);
    };

    asyncFunc();
  }, [page, search]);

  /*
  useEffect(() => {
    const asyncFunc = async () => {
      setIsLoading(true);
      const photos = await fetchPhotos(page);

      setPhoto(photos.hits);
      setIsLoading(false);
    };
    asyncFunc();
  }, [page, search]);

  useEffect(() => {
    const asyncFunc = async () => {
      setIsLoading(true);
      const photos = await fetchPhotos(search);
      setPhoto(prevPhotos => [...prevPhotos, ...photos.hits]);

      setIsLoading(false);
    };
    asyncFunc();
  }, [search]);
*/
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
  }, []);
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
  }, []);

  const handleButton = async () => {
    setPage(prevPage => prevPage + 1);
    setIsLoading(false);
    const photos = await fetchPhotos(search, page);
    setPhoto(prevPhotos => [...prevPhotos, ...photos.hits]);
  };

  const handleModalButton = photo => {
    setModal(true);
    setPhotoForModal(photo);
  };
  const handleModalButtonClose = e => {
    if (e.target === e.currentTarget) {
      setModal(false);
    }
  };
  const handleKeyPress = event => {
    if (event.key === 'Escape') {
      setModal(false);
    }
  };

  return (
    <div>
      <ImageFinder
        handleGetRequest={handleGetRequest}
        handleInput={handleInput}
      ></ImageFinder>
      <div>{isLoading ? <Loader /> : null}</div>
      <ImageGallery
        largeImageURL={photo.largeImageURL}
        photos={photo}
        handleModalButton={handleModalButton}
      ></ImageGallery>
      {modal ? (
        <Modal
          photoForModal={photoForModal}
          handleModalButtonClose={handleModalButtonClose}
          handleKeyPress={handleKeyPress}
        />
      ) : null}
      {photo.length > 0 ? <Button handleButton={handleButton} /> : null}
    </div>
  );
};
