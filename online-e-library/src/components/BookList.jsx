import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchBooks } from "../api/apiService";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("fiction");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchBooks(query, page)
      .then((response) => {
        setBooks(response.data.docs);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [query, page]);

  return (
    <div className="container mt-5">
      <h2>E-Library</h2>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search for books..."
        onChange={(e) => setQuery(e.target.value)}
      />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="row">
          {books.map((book) => (
            <div className="col-md-3 mb-3" key={book.key}>
              <div className="card">
                <img
                  src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                  loading="lazy"
                  className="card-img-top"
                  alt={book.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{book.title}</h5>
                  <p>Author: {book.author_name?.[0]}</p>
                  <Link to={`/book/${book.key}`} className="btn btn-primary">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="d-flex justify-content-between mt-3">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="btn btn-secondary"
        >
          Previous
        </button>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="btn btn-secondary"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BookList;
