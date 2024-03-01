import React from "react";
import Post from "../components/Post";

function Posts() {
  return <section className="pt-16 h-full">
    <div className="h-full w-full p-2 gap-2  grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))]" >
      {new Array(20).fill(null).map((_, index) => {
        return <Post key={index} ></Post>
      })}
    </div>
  </section>;
}

export default Posts;
