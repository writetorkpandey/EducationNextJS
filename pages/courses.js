import React from "react";
import AboutUs from "../Components/AboutUs";
import BannerFeature from "../Components/BannerFeature";
import Blog from "../Components/Blog";
import Courses from "../Components/Courses";
import Cta from "../Components/Cta";
import Event from "../Components/Event";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import HeroSlider from "../Components/HeroSlider";
import Pagetitle from "../Components/Pagetitle";
import SucessStory from "../Components/SucessStory";
import Teachers from "../Components/Teachers";
import styles from "../styles/Home.module.css";

export default function courses() {
  return (
    <>
      <Header />
      <Pagetitle />
      <Courses />
      <Footer />
    </>
  );
}
