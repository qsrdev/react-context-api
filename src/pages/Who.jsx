import axios from "axios";
import { useEffect, useState } from "react";
import PostList from "../components/PostList";

export default function Who() {
  return (
    <>
      <main>
        <div>
          <h1>ciao a tutti</h1>
          <PostList />
        </div>
      </main>
    </>
  );
}
