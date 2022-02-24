import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import deleteBookApi from './deleteFuntion';

const DeleteBook = ({ item }) => {
  const dispatch = useDispatch();
  const { title, author, id } = item;

  const deleteBookFromStore = () => {
    dispatch(removeBook(item));
    deleteBookApi(id);
  };

  return (
    <li>
      <span>
        {title}
        {' by '}
        <strong>{author}</strong>
      </span>
      <button id={id} type="submit" value="delete" onClick={deleteBookFromStore}>
        delete
      </button>
    </li>
  );
};

DeleteBook.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    author: PropTypes.string,
  }),
};

DeleteBook.defaultProps = {
  item: {},
};

export default DeleteBook;
