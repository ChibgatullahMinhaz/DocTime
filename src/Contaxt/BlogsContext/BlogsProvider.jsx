import React, { useContext, useEffect, useState } from "react";
import { LoadBlogs, LoaderContext } from "../CreatedContaxt/CreatedContaxt";

const BlogsProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const { loader } = useContext(LoaderContext);
  const { setLoader } = useContext(LoaderContext);
  useEffect(() => {
    const fetData = async () => {
      try {
        setLoader(true)
        const res = await fetch("/questions.json");
        const data = await res.json();
        setQuestions(data)
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    };
    fetData();
  }, [setLoader]);

  return (
    <LoadBlogs.Provider value={{ questions, loader }}>{children}</LoadBlogs.Provider>
  );
};

export default BlogsProvider;
