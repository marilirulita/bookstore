import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const [state, setState] = useState('');

  const dispatch = useDispatch();

  const submitBookToStore = () => {
    const newBook = {
      title: state,
      author: 'Anonimus',
      id: uuidv4(),
    };

    dispatch(addBook(newBook));

    setState('');
  };

  return (
    <div className="add-book">
      <input type="text" placeholder="Add new book" value={state} onChange={(e) => setState(e.target.value)} />
      <button type="submit" value="add-book" onClick={submitBookToStore}>Add</button>
    </div>
  );
};

export default AddBook;
