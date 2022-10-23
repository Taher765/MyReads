import React from "react";
import { Link, useLocation } from "react-router-dom";
import imgNotAvailable from "../icons/download.jpg";
import Select from "./Select";

const Book = ({ book, moveBook }) => {
  const location = useLocation();

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${
                book.imageLinks
                  ? book.imageLinks.smallThumbnail
                  : imgNotAvailable
              })`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <Select book={book} moveBook={moveBook} />
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors ? (
            book.authors.map((author) => <div key={author}>{author}</div>)
          ) : (
            <div>no authors</div>
          )}
        </div>
      </div>
      {location.pathname === "/" && (
        <Link to={`details/${book.id}`}>Details</Link>
      )}
    </li>
  );
};

export default Book;
