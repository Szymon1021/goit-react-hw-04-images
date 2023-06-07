import { Component } from 'react';
import { ImageFinder } from './ImageFinder/ImageFinder';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchPhotos } from 'components/api';
import { Button } from './Button/Button';
import Loader from './Loader/Loader';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    photos: [],
    search: '',
    page: 1,
    isLoading: false,
    modal: false,
    photoForModal: '',
  };
  handleInput = evt => {
    this.setState({
      search: evt.target.value,
    });
  };
  handleGetRequest = async e => {
    e.preventDefault();
    this.setState({ isLoading: true });

    const response = await fetchPhotos(this.state.search);

    this.setState({
      photos: response.hits,
      isLoading: false,
    });
    console.log(this.state.photos);
  };
  async componentDidUpdate(_, prevState) {
    if (prevState.page !== this.state.page) {
      this.setState({ isLoading: true });
      const photos = await fetchPhotos(this.state.search, this.state.page);
      console.log(photos);
      this.setState(prevState => ({
        photos: [...prevState.photos, ...photos.hits],
        isLoading: false,
      }));
    }
  }
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }
  handleButton = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
        isLoading: false,
      };
    });
  };
  handleModalButton = photo => {
    this.setState({ modal: true, photoForModal: photo });
  };
  handleModalButtonClose = e => {
    if (e.target === e.currentTarget) {
      this.setState({ modal: false });
    }
  };
  handleKeyPress = event => {
    if (event.key === 'Escape') {
      this.setState({ modal: false });
    }
  };

  render() {
    return (
      <div>
        <ImageFinder
          handleGetRequest={this.handleGetRequest}
          handleInput={this.handleInput}
        ></ImageFinder>
        <div>{this.state.isLoading ? <Loader /> : null}</div>
        <ImageGallery
          largeImageURL={this.state.largeImageURL}
          photos={this.state.photos}
          handleModalButton={this.handleModalButton}
        ></ImageGallery>
        {this.state.modal ? (
          <Modal
            photoForModal={this.state.photoForModal}
            handleModalButtonClose={this.handleModalButtonClose}
            handleKeyPress={this.handleKeyPress}
          />
        ) : null}
        {this.state.photos.length > 0 ? (
          <Button handleButton={this.handleButton} />
        ) : null}
      </div>
    );
  }
}
