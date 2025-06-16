// src/components/PostList.jsx
import React, { useContext } from "react";
import PostContext from "../context/PostContext";
import { Link } from "react-router-dom";

export default function PostList() {
  const { posts } = useContext(PostContext);

  return (
    <div className="row">
      {posts.map((post) => (
        <div key={post.id} className="col">
          <div className="card text-bg-dark mb-3">
            <div className="card-header">{post.title}</div>
            <div className="card-body">
              <h5 className="card-title">Autore sconosciuto</h5>
              <p className="card-text">{post.body}</p>
            </div>
            <div className="card-footer">
              <Link to={`/who/${post.id}`}>Ulteriori informazioni</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
