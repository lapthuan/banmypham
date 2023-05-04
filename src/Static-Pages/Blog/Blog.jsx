import React, { useState } from "react";
import "./Blog.css";
import RecentCard from "./RecentCard";
const Blog = () => {
  const [dataBlog, setDataBlog] = useState();

  return (
    <>
      <div className="containers">
        <section className="mainContent">
          <RecentCard />
        </section>
      </div>
    </>
  );
};

export default Blog;
