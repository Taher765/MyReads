import React from "react";
import Book from "./Book";

const Shelf = ({ shelf, bookShelf, moveBook }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {bookShelf.map((book) => (
            <Book book={book} moveBook={moveBook} key={book.id} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Shelf;
