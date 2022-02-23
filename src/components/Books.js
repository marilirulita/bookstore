import AddBook from './AddBook';

const Books = () => {
  const books = [
    {
      title: 'First Book',
      author: 'Anonimus',
      id: 1,
    },
    {
      title: 'Second Book',
      author: 'Anonimus',
      id: 2,
    },
  ];
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
