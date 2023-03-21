import React from "react";
import Counter from "./components/Counter/Counter";
import CounterContextProvider from "./components/CounterContextProvider";
import Navbar from "./components/Navbar/Navbar";
import PostContextProvider from "./components/PostContextProvider";
import PostList from "./components/PostList/PostList";

const App = () => {
  return (
    <div>
      <PostContextProvider>
        <CounterContextProvider>
          {/* <Counter /> */}
          <Navbar />
          <PostList />
        </CounterContextProvider>
      </PostContextProvider>
    </div>
  );
};

export default App;
