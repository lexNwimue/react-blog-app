import React from "react";
import { documents } from "./firebaseConfig";

const BlogList = () => {
  return (
    <>
      {documents.map((doc) => (
        <div className="blog-preview" key={doc.id}>
          <h2>{doc.title}</h2>
          <p>Written by {doc.author}</p>
          <br />
          <button className="btn btn-primary">Read More</button>
        </div>
      ))}
    </>
  );
};

export default BlogList;
