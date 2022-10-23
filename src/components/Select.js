import React from "react";

const Select = ({ book, moveBook }) => {
  const changeShelf = async (book, e) => {
    // Update BookShelf
    moveBook(book, e.target.value);
  };

  return (
    <select value={book.shelf} onChange={(e) => changeShelf(book, e)}>
      <option value="move" disabled>
        Move to...
      </option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  );
};

export default Select;
