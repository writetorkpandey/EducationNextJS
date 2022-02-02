import React from "react";
import CourseDetailsPageTitle from "../Components/CourseDetailsPageTitle";
import CourseDetailsSection from "../Components/CourseDetailsSection";
import Header from "../Components/Header";
import CourseDetailsRelatedCourse from "../Components/CourseDetailsRelatedCourse";
import Footer from "../Components/Footer";
export default function courseDetails() {
  return (
    <>
      <Header />
      <CourseDetailsPageTitle />
      <CourseDetailsSection />
      <CourseDetailsRelatedCourse />
      <Footer />
    </>
  );
}
