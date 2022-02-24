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
    console.log(books);
  }, []);

  return (
    <div className="books-display">
      <h2>This is a bookstore</h2>
      <AddBook />
      <ul>
        {books.map((book) => (<DeleteBook key={book.id} item={book} />))}
      </ul>
    </div>
  );
};

export default Books;
