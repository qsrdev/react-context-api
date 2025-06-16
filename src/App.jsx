import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Who from "./pages/Who";
import SingleTicket from "./pages/SingleTicket";
import NormalLayout from "./layouts/NormalLayout";
import PostForm from "./pages/PostForm";
import { PostProvider } from "./context/PostContext";

export default function App() {
  return (
    <PostProvider>
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
    </PostProvider>
  );
}
