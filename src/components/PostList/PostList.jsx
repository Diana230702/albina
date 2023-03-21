import React, { useContext, useEffect } from "react";
import { postContext } from "../PostContextProvider";

const PostList = () => {
  const { getPosts } = useContext(postContext);

  useEffect(() => {
    getPosts();
  }, []);

  return <div>PostList</div>;
};

export default PostList;
