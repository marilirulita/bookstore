const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
// const GET_API_DATA = 'bookStore/books/GET_API_DATA'

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

// export const getApiData = (payload) => ({
//   type: GET_API_DATA,
//   payload,
// })

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state, action.payload,
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    // case GET_API_DATA:
    //   return [
    //     ...action.payload
    //   ]
    default:
      return state;
  }
};

// side effects, only as applicable
// export function getBook() {
//   return (dispatch) => get('/book').then((book) => dispatch(updateBook(book)));
// }

export default reducer;
