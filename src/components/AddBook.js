import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();

  const submitBookToStore = () => {
    const newBook = {
      title: 'First Book',
      author: 'Anonimus',
      id: 1,
    };

    dispatch(addBook(newBook));
  };

  return (
    <div className="add-book">
      <input type="text" placeholder="Add new book" />
      <button type="submit" value="add-book" onClick={submitBookToStore}>Add</button>
    </div>
  );
};

export default AddBook;
