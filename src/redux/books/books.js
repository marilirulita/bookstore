// import axios from 'axios';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_API_DATA = 'bookStore/books/GET_API_DATA';

const initialState = [];

// Action Creators
export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

// export const fetchApiData = () => {
//   return (dispatch) => {
//     dispatch(fetchUserRequest) // ???
//     axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/A8pinz5DqOreWDXV7Uvo/books/')
//     .then(response => {
//       const books = response.data;
//       dispatch(fetchUserSucces(books)) // ????
//     })
//     .catch(error => {
//       const errorMsg = error.message
//       dispatch(fetchUserFailer(errorMsg)) // ???
//     })
//   }
// }

export const fetchApiData = () => {
  try {
    return async (dispatch) => {
      const result = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/A8pinz5DqOreWDXV7Uvo/books/');
      const resultJson = await result.json();
      if (resultJson) {
        dispatch({
          type: GET_API_DATA,
          payload: resultJson,
        });
      } else {
        console.log('Unable to fetch!');
      }
    };
  } catch (error) {
    console.log(error);
  }
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state, action.payload,
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    case GET_API_DATA:
      return [
        ...state, action.payload,
      ];
    default:
      return state;
  }
};

// side effects, only as applicable
// export function getBook() {
//   return (dispatch) => get('/book').then((book) => dispatch(updateBook(book)));
// }

export default reducer;
