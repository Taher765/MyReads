import React, { useState } from "react";
import { Link } from "react-router-dom";
import { search } from "../BooksAPI";
import Book from "../components/Book";
const Search = ({ books, moveBook }) => {
  // states
  const [searchResults, setSearchResults] = useState([]);
  const [mess, setMess] = useState("Search...");
  // functions
  const searchForBooks = async (e) => {
    if (e.target.value !== "") {
      const res = await search(e.target.value);
      //////////
      if (res) {
        setSearchResults(res);
      }
      /////////
      if (res.error) {
        setSearchResults(res.items);
        setMess("Not Found");
      }
      ///////
    } else {
      setSearchResults([]);
      setMess("Search ...");
    }
  };
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            onChange={searchForBooks}
            type="text"
            placeholder="Search by title, author, or ISBN"
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchResults.length > 0
            ? searchResults.map((book) => {
                const searchBook = books.find((e) => e.id === book.id);
                if (searchBook) {
                  book.shelf = searchBook.shelf;
                } else {
                  book.shelf = "none";
                }

                return <Book book={book} key={book.id} moveBook={moveBook} />;
              })
            : mess}
        </ol>
      </div>
    </div>
  );
};

export default Search;
