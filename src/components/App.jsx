import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './ImageGallery/Button/Button';
import { useEffect, useState } from 'react';
import { fetchImages } from 'api/fetchImages';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';

export function App() {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [largeImage, setLargeImage] = useState('');
  const [totalHits, setTotalHits] = useState(0);
  const [page, setPage] = useState(1);
  const [isLoad, setIsLoad] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    async function makeFetchInStateUpdate() {
      try {
        setIsLoad(true);
        const data = await fetchImages(searchQuery, page);

        setImages(ps => [...ps, ...data.hits]);
        setTotalHits(data.totalHits);
        setIsLoad(false);
      } catch (error) {
        console.log(error);
      }
    }
    makeFetchInStateUpdate();
  }, [page, searchQuery]);

  function onFormSubmit(inpitValue) {
    setImages([]);
    setSearchQuery(inpitValue);
    setPage(1);
  }

  function toggleModal(largeImage) {
    setIsOpen(ps => !ps);
    setLargeImage(largeImage);
  }

  return (
    <>
      <Searchbar onFormSubmit={onFormSubmit} />
      {images.length > 1 && (
        <>
          <ImageGallery images={images} toggleModal={toggleModal} />

          {isLoad ? (
            <Loader />
          ) : (
            totalHits >= page * 12 && <Button onLoadMoreButtonClick={setPage} />
          )}
        </>
      )}
      {isOpen && <Modal largeImage={largeImage} toggleModal={toggleModal} />}
    </>
  );
}
