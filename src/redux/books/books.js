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

const getApiData = (payload) => ({
  type: GET_API_DATA,
  payload,
});

export const fetchApiData = () => async (dispatch) => {
  const result = await fetch(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/A8pinz5DqOreWDXV7Uvo/books/',
  );
  const resultJson = await result.json();
  if (resultJson) {
    const objeArr = Object.keys(resultJson).map((key) => ({
      id: key,
      author: resultJson[key][0].title[1],
      title: resultJson[key][0].title[0],
      category: resultJson[key][0].category,
    }));
    dispatch(getApiData(objeArr));
  }
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    case GET_API_DATA:
      return [...action.payload];
    default:
      return state;
  }
};

export default reducer;
