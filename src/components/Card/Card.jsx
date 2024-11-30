// src/card/Card.js
import React from "react";
import "./Card.css";

export const Card = ({ book_image, book_name, author, description }) => {
  return (
    <div className="card">
      <img src={book_image} alt="loading" width="100%" height="150px" />
      <h3>{book_name}</h3>
      <h5>{author}</h5>
      <p>{description}</p>
    </div>
  );
};
