import React from 'react';
import { useSelector } from 'react-redux';
import AddBook from './AddBook';
import DeleteBook from './DeleteBook';

const Books = () => {
  const books = useSelector((state) => state.booksReducer);

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
