import React, { useEffect, useState } from "react";
import "./Blog.css";
import RecentCard from "./RecentCard";
import Blogmost from "./blogmostsearch";
import { blogCategoryGetAll, blogGetAll } from "../../redux/action/blogActions";
import { useDispatch, useSelector } from "react-redux";
const Blog = () => {
  const dispatch = new useDispatch()
  const blogList = useSelector((state) => state.blogList)
  const { loading } = blogList
  const categoryList = useSelector((state) => state.bCategoryList)
  const { bCategorys } = categoryList

  useEffect(() => {
    dispatch(blogGetAll())
    dispatch(blogCategoryGetAll())
  }, [])
  return loading == false ? (
    <>
      <div className="containers">
        <section className="mainContent">
          <RecentCard />
        </section>
        <div className="w-[90%] ml-auto mr-auto">
          <Blogmost bCategorys={bCategorys} />
        </div>
      </div>
    </>
  ) : <div>Loading...</div>;
};

export default Blog;
