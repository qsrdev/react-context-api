import axios from "axios";
import { useEffect, useState } from "react";
import PostList from "../components/PostList";

export default function Who() {
  const [posts, setPosts] = useState([]);
  const apiUrl = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";
  useEffect(() => {
    axios.get(apiUrl).then((resp) => {
      setPosts(resp.data);
      console.log(resp.data);
    });
  }, []);

  return (
    <>
      <main>
        <div>
          <h1>ciao a tutti</h1>
          <PostList array={posts} />
        </div>
      </main>
    </>
  );
}
