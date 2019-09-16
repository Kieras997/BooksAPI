const Books = {
  search(term, term2, sortBy) {
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=${term}+${sortBy}:${term2}&startIndex=0&maxResults=20`, {})
      .then(response => {
        return response.json();
    }).then(jsonResponse => {
      if(jsonResponse.items) {
        return jsonResponse.items.map(item => {
          if(item.volumeInfo.imageLinks && item.volumeInfo.description) {
            return {
              id: item.id,
              title: item.volumeInfo.title,
              description: item.volumeInfo.description,
              image: item.volumeInfo.imageLinks.thumbnail,
              author: item.volumeInfo.authors,
              publisher: item.volumeInfo.publisher
            };
          } else {
            return {
              id: item.id,
              title: item.volumeInfo.title,
              author: item.volumeInfo.authors,
              publisher: item.volumeInfo.publisher
            };
          }
        })
      }
    })
  }
};

export default Books;
