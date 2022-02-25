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
      // postBookApi(newBook.id, [newBook.title, newBook.author]);
      setState(initState);
    }
  };

  return (
    <div className="add-book">
      <h2 className="Title1">ADD NEW BOOK</h2>
      <input
        className="Lesson-Panel1"
        type="text"
        placeholder="Add new book Title"
        value={state.title}
        onChange={(e) => setState({ title: e.target.value, author: state.author })}
      />
      <input
        className="Lesson-Panel1"
        type="text"
        placeholder="Add new book Author"
        value={state.author}
        onChange={(e) => setState({ title: state.title, author: e.target.value })}
      />
      <button type="submit" value="add-book" onClick={submitBookToStore} className="Rectangle-3">
        <span className="ADD-BOOK Text-Style">ADD BOOK</span>
      </button>
    </div>
  );
};

export default AddBook;
