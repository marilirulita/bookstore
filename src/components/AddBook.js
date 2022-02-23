import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const initState = {
    title: '',
    author: '',
  };
  const [state, setState] = useState(initState);
  const dispatch = useDispatch();

  const submitBookToStore = () => {
    const newBook = {
      title: state.title,
      author: state.author,
      id: uuidv4(),
    };

    dispatch(addBook(newBook));

    setState(initState);
  };

  return (
    <div className="add-book">
      <input type="text" placeholder="Add new book" value={state.title} onChange={(e) => setState({ title: e.target.value, author: 'Anonimus' })} />
      <button type="submit" value="add-book" onClick={submitBookToStore}>Add</button>
    </div>
  );
};

export default AddBook;
