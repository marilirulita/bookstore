import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const DeleteBook = (props) => {
  const dispatch = useDispatch();
  const { title, author, id } = props.item;

  const deleteBookFromStore = () => {
    dispatch(removeBook(props.item));
  };
  return (
    <li>
      <span>
        {title}
        {' by '}
        <strong>{author}</strong>
      </span>
      <button id={id} type="submit" value="delete" onClick={deleteBookFromStore}>
        delete
      </button>
    </li>
  );
};

export default DeleteBook;
