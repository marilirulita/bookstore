/* eslint-disable react/jsx-key */
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { postBookApi } from '../redux/books/books';

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
      dispatch(postBookApi(newBook));
      setState(initState);
    }
  };

  return (
    <div className="add-book">
      <h2 className="add-book-title">ADD NEW BOOK</h2>
      <div className="inputs-elements">
        <input
          className="inputs"
          type="text"
          placeholder="Add new book Title"
          value={state.title}
          onChange={(e) => setState({ title: e.target.value, author: state.author })}
        />
        <input
          className="inputs"
          type="text"
          placeholder="Add new book Author"
          value={state.author}
          onChange={(e) => setState({ title: state.title, author: e.target.value })}
        />
        <button
          type="submit"
          value="add-book"
          onClick={submitBookToStore}
          className="add-book-button"
        >
          <span className="ADD-BOOK">ADD BOOK</span>
        </button>
      </div>
    </div>
  );
};

export default AddBook;
