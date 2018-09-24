import React from "react";
import Navbar from "./Navbar";
import AddTweet from "./AddTweet";

const App = () => {
  return (
    <div>
      <h1>Sweet Tweets</h1>
      <Navbar />
      <AddTweet />
    </div>
  );
};

export default App;
