import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostContext from "./context/Context";
import HomePage from "./pages/Home";
import Who from "./pages/Who";
import SingleTicket from "./pages/SingleTicket";
import NormalLayout from "./layouts/NormalLayout";
import PostForm from "./pages/PostForm";
import axios from "axios";

export default function App() {
  const [posts, setPosts] = useState([]);
  const apiUrl = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";
  useEffect(() => {
    axios.get(apiUrl).then((resp) => {
      setPosts(resp.data);
      console.log(resp.data);
    });
  }, []);

  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      <BrowserRouter>
        <Routes>
          <Route element={<NormalLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/form" element={<PostForm />} />
            <Route path="/who">
              <Route path="" element={<Who />} />
              <Route path=":id" element={<SingleTicket />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </PostContext.Provider>
  );
}
