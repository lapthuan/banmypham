import React, { useState } from "react";
import "./Blog.css";
import RecentCard from "./RecentCard";
import Blogmost from "./blogmostsearch";
const Blog = () => {
  const [dataBlog, setDataBlog] = useState();

  return (
    <>
      <div className="containers">
        <section className="mainContent">
          <RecentCard />
        </section>
        <div className="w-[90%] ml-auto mr-auto">
          <Blogmost />
        </div>
      </div>
    </>
  );
};

export default Blog;
