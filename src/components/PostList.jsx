// src/components/PostList.jsx
import React from "react";
import { Link } from "react-router-dom";
import { PostProvider } from "../context/PostContext";

export default function PostList() {
  const { posts } = PostProvider();

  return (
    <div className="row">
      {posts.map((curPost) => (
        <div key={curPost.id} className="col">
          <div className="card text-bg-dark mb-3">
            <div className="card-header">{curPost.title}</div>
            <div className="card-body">
              <h5 className="card-title">{curPost.author}</h5>
              <p className="card-text">{curPost.body}</p>
            </div>
            <div className="card-footer">
              <Link to={`/who/${curPost.id}`}>Ulteriori informazioni</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
