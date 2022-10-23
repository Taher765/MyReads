import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
// Components
import Home from "./pages/Home";
import Search from "./pages/Search";
import DetailsBook from "./components/DetailsBook";
// Api
import { getAll, update } from "./BooksAPI";

function App() {
  // State
  const [books, setBooks] = useState([]);

  // get All books

  useEffect(() => {
    const getAllBooks = async () => {
      const res = await getAll();
      setBooks(res);
    };
    getAllBooks();
  }, []);

  // Shelfs
  const shelfsName = ["currentlyReading", "wantToRead", "read"];
  // Define Book Shelf
  const bookShelf = (shelf) => {
    return books.filter((book) => book.shelf === shelf);
  };
  // handle update bookshelf
  const moveBook = async (book, shelf) => {
    await update(book, shelf);
    book.shelf = shelf;
    setBooks([...books.filter((b) => b.id !== book.id), book]);
  };

  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-content">
          <div>
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    shelfsName={shelfsName}
                    moveBook={moveBook}
                    bookShelf={bookShelf}
                  />
                }
              />
              <Route
                path="search"
                element={<Search books={books} moveBook={moveBook} />}
              />
              <Route path={"details/:id"} element={<DetailsBook />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
