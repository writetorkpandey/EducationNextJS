import React from "react";
import BlogDetail from "../Components/BlogDetail";
import BlogDetailPageTitle from "../Components/BlogDetailPageTitle";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Pagetitle from "../Components/Pagetitle";
import RecommendedPost from "../Components/RecommendedPost";

export default function blogDetails() {
  return (
    <>
      <Header />
      <BlogDetailPageTitle />
      <BlogDetail />
      <RecommendedPost />
      <Footer />
    </>
  );
}
