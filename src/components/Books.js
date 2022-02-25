import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchApiData } from '../redux/books/books';
import AddBook from './AddBook';
import DeleteBook from './DeleteBook';

const Books = () => {
  const books = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApiData());
  }, []);

  return (
    <div className="books-display">
      {books.map((book) => (<DeleteBook key={book.id} item={book} />))}
      <AddBook />
    </div>
  );
};

export default Books;
