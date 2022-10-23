import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { get } from "../BooksAPI";
import imgNotAvailable from "../icons/download.jpg";
import Logo from "./Logo";
const DetailsBook = () => {
  const [book, setBook] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const getBook = async () => {
      const res = await get(id);
      setBook(res);
    };
    getBook();
  }, [id]);
  return (
    <>
      <Logo />
      <div
        style={{
          maxWidth: "80%",
          margin: "20px auto",
        }}
      >
        <div
          style={{
            textAlign: "center",
          }}
        >
          <img
            src={book.imageLinks ? book.imageLinks.thumbnail : imgNotAvailable}
            alt={book.title}
          />
        </div>
        <h3>Book Title: {book.title}</h3>
        <p
          style={{
            lineHeight: "2",
          }}
        >
          {book.description && book.description}
        </p>
        <span>
          Average Rating:
          {book.averageRating ? book.averageRating : "There is no rating"}
        </span>
        <p>Published Date: {book.publishedDate}</p>
        <h4>Publisher : {book.publisher && book.publisher}</h4>
        <h5>Authors: {book.authors && book.authors.map((author) => author)}</h5>
        <div className="btn-links">
          <Link
            to={"/"}
            style={{
              marginRight: "20px",
            }}
          >
            Back
          </Link>
          {book.previewLink && (
            <a rel="noreferrer" target="_blank" href={book.previewLink}>
              PreviewLink
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export default DetailsBook;
