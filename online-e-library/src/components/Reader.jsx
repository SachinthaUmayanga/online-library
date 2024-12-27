import React from "react";
import { useParams } from "react-router-dom";

const Reader = () => {
  const { id } = useParams();
  const readerUrl = `https://archive.org/stream/${id}`;

  return (
    <div className="container mt-5">
      <h2>Read Book</h2>
      <div style={{ height: "80vh" }}>
        <iframe
          src={readerUrl}
          title="Book Reader"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Reader;
