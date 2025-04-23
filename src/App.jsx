import { useState } from "react";
import Header from "./components/Header";
import Posts from "./components/Posts";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Posts searchQuery={searchQuery} />
    </>
  );
}
