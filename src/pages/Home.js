import React from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
// Componant
import Shelf from "../components/Shelf";

const Home = ({ shelfsName, moveBook, bookShelf }) => {
  return (
    <>
      <Logo />

      {shelfsName.map((shelf) => (
        <Shelf
          key={shelf}
          shelf={shelf}
          moveBook={moveBook}
          bookShelf={bookShelf(shelf)}
        />
      ))}
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </>
  );
};

export default Home;
