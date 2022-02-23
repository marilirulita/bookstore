import { useSelector } from 'react-redux';
import AddBook from './AddBook';

const Books = () => {
  const books = useSelector((state) => state.booksReducer);
  
  return (
    <div className="books-display">
      <h2>This is a bookstore</h2>
      <AddBook />
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <span>
              {book.title}
              {' by '}
              <strong>{book.author}</strong>
            </span>
            <button type="submit" value="delete">delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
