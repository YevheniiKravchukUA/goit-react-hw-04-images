import { PropTypes } from 'prop-types';

export function Button({ onLoadMoreButtonClick }) {
  return (
    <button
      className="Button"
      type="button"
      onClick={() => {
        onLoadMoreButtonClick(ps => ps + 1);
      }}
    >
      Load More
    </button>
  );
}

Button.propTypes = {
  onLoadMoreButtonClick: PropTypes.func.isRequired,
};
