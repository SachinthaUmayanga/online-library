import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchBookDetails } from "../api/apiService";

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetchBookDetails(id)
      .then((response) => setBook(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div className="container mt-5">
      <h2>{book.title}</h2>
      <p>
        <strong>Description:</strong>{" "}
        {book.description?.value || "No description available."}
      </p>
      <Link to={`/reader/${id}`} className="btn btn-success">
        Read Online
      </Link>
    </div>
  );
};

export default BookDetail;
