import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBookApi } from '../redux/books/books';

const DeleteBook = ({ item }) => {
  const dispatch = useDispatch();
  const { title, author, id } = item;

  const deleteBookFromStore = () => {
    dispatch(deleteBookApi(id));
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
