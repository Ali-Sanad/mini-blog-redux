import React from "react";
import PostList from "./PostList";
const App = () => {
  return (
    <div className="container w-75">
      <h1 className="text-primary text-center mt-5">Blog App</h1>
      <PostList />
    </div>
  );
};
export default App;
