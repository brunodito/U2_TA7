const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    },
    {
        title: 'Book3',
        author: 'Name3'
    },
    {
        title: 'Book4',
        author: 'Name4'
    }

  ]
  
function getTheTitles (books) {
    const titles = books.map(book => book.title);
    return titles
}

console.log(getTheTitles(books))