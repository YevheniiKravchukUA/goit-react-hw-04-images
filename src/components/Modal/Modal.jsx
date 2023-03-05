import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export function Modal({ largeImage, toggleModal }) {
  useEffect(() => {
    function onEscapeClick(e) {
      if (e.code !== 'Escape') {
        return;
      }
      toggleModal('');
    }

    window.addEventListener('keydown', onEscapeClick);

    return () => {
      window.removeEventListener('keydown', onEscapeClick);
    };
  }, [toggleModal]);

  function onOverlayClick(e) {
    if (e.currentTarget === e.target) {
      toggleModal('');
    }
  }

  return createPortal(
    <div className="Overlay" onClick={onOverlayClick}>
      <div className="Modal">
        <img src={largeImage} alt="" />
      </div>
    </div>,
    modalRoot
  );
}

Modal.propTypes = {
  largeImage: PropTypes.string,
  toggleModal: PropTypes.func.isRequired,
};
