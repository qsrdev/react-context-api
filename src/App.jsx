import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
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
        <h1>salute a voi</h1>
      </main>
    </>
  );
}

export default App;
