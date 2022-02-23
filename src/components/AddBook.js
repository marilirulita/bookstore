import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();

  let smallStore = '';
  const submitBookToStore = () => {
    const newBook = {
      title: smallStore,
      author: 'Anonimus',
      id: uuidv4(),
    };

    dispatch(addBook(newBook));
  };

  return (
    <div className="add-book">
      <input type="text" placeholder="Add new book" onChange={(e) => { smallStore = e.target.value; }} />
      <button type="submit" value="add-book" onClick={submitBookToStore}>Add</button>
    </div>
  );
};

export default AddBook;
