import React, { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBarContainer";
import PostsPage from "./components/PostsContainer/PostsPage";
import dummydata from "./dummy-data";
import "./App.css";

const App = () => {
  const [data] = useState(dummydata);
  return (
    <div className="App">
      <SearchBar />
      <PostsPage data={data} />
    </div>
  );
};

export default App;
