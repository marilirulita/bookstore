import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// const baseApiUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/A8pinz5DqOreWDXV7Uvo/books/';

// // get data call
// fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/A8pinz5DqOreWDXV7Uvo/books/').then(response => response.text()).then(data => console.log(data));


// // delete a specific book
// fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/A8pinz5DqOreWDXV7Uvo/books/item2', {
//   method: 'DELETE',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//   "item_id": "item2"
//   })
// }).then(response => response.text()).then(data => console.log(data));