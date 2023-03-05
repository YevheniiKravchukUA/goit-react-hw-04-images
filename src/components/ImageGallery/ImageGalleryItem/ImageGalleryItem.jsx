import PropTypes from 'prop-types';

export function ImageGalleryItem({ smallImage, modalImage, toggleModal }) {
  return (
    <li
      className="ImageGalleryItem"
      onClick={() => {
        toggleModal(modalImage);
      }}
    >
      <img
        className="ImageGalleryItem-image"
        src={smallImage}
        alt=""
        data-large={modalImage}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  modalImage: PropTypes.string,
  smallImage: PropTypes.string,
  toggleModal: PropTypes.func.isRequired,
};
