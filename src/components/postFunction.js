 const postBookApi = async (id, title) => {
  const postUrl = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/A8pinz5DqOreWDXV7Uvo/books/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
    "item_id": id,
    "title": title,
    "category": "Fiction"
    })
  });
}

export default postBookApi