import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { addBook } from '../redux/books/books';
import postBookApi from './postFunction';

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

    if (newBook.title !== '' && newBook.author !== '') {
      dispatch(addBook(newBook));
      postBookApi(newBook.id, [newBook.title, newBook.author]);
      setState(initState);
    }
  };

  return (
    <div className="add-book">
      <input
        type="text"
        placeholder="Add new book Title"
        value={state.title}
        onChange={(e) => setState({ title: e.target.value, author: state.author })}
      />
      <input
        type="text"
        placeholder="Add new book Author"
        value={state.author}
        onChange={(e) => setState({ title: state.title, author: e.target.value })}
      />
      <button type="submit" value="add-book" onClick={submitBookToStore}>
        Add
      </button>
    </div>
  );
};

export default AddBook;
