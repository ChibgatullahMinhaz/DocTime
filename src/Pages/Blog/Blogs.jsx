import React, { useContext } from "react";
import { LoadBlogs } from "../../Contaxt/CreatedContaxt/CreatedContaxt";
import Blog from "./Blog";

const Blogs = () => {
  const { questions } = useContext(LoadBlogs);
  console.log(questions);
  return (
    <div>
      {questions?.map((question, index) => (
        <Blog key={index} blog={question}></Blog>
      ))}
    </div>
  );
};

export default Blogs;
