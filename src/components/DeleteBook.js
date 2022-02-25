/* eslint-disable react/jsx-key */
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBookApi } from '../redux/books/books';

const DeleteBook = ({ item }) => {
  const dispatch = useDispatch();
  const {
    title, author, id, category,
  } = item;

  const deleteBookFromStore = () => {
    dispatch(deleteBookApi(id));
  };

  return (
    <div className="Lesson-Panel">
      <div className="book-info">
        <span className="Category">{category}</span>
        <span className="Title">{title}</span>
        <span className="Author">{author}</span>
      </div>
      <button
        id={id}
        type="submit"
        value="delete"
        onClick={deleteBookFromStore}
        className="Delete-button"
      >
        <span className="Delete-text">DELETE BOOK</span>
      </button>
    </div>
  );
};

DeleteBook.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
  }),
};

DeleteBook.defaultProps = {
  item: {},
};

export default DeleteBook;
