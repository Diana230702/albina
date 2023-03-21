import axios from "axios";
import React, { createContext, useReducer } from "react";

const API = "https://rickandmortyapi.com/api/character";

export const postContext = createContext();

const INIT_STATE = {
  posts: [],
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_POSTS":
      return { ...state, posts: action.payload };

    default:
      return state;
  }
}

const PostContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getPosts() {
    let res = await axios.get(API);
    dispatch({ type: "GET_POSTS", payload: res.data.results });
  }

  console.log(state);
  const values = { getPosts };
  return <postContext.Provider value={values}>{children}</postContext.Provider>;
};

export default PostContextProvider;
