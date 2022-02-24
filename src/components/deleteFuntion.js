const deleteBookApi = async (id) => {
  const deleteBook = await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/A8pinz5DqOreWDXV7Uvo/books/${id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  });

  return deleteBook;
};

export default deleteBookApi;
