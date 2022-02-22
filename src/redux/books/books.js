const LOAD = 'LOAD';
const CREATE = 'CREATE';
const UPDATE = 'UPDATE';
const REMOVE = 'REMOVE';

// export default function reducer(state = {}, action = {}) {
//   switch (action.type) {
//     case LOAD:
//       // get elements to visualize them on screen
//     case CREATE:
//     // add a new book to list
//     case UPDATE:
//       // change something about book
//     case REMOVE:
//       // delete a book from list
//     default: return state;
//   }
// }

// Action Creators
export function loadBooks() {
  return { type: LOAD };
}

export function createBook(book) {
  return { type: CREATE, book };
}

export function updateBook(book) {
  return { type: UPDATE, book };
}

export function removeBook(book) {
  return { type: REMOVE, book };
}

// side effects, only as applicable
// export function getBook() {
//   return (dispatch) => get('/book').then((book) => dispatch(updateBook(book)));
// }
