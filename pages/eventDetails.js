import React from "react";
import EventSingle from "../Components/EventSingle";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import MoreEvent from "../Components/MoreEvent";
import EventPageTitle from "../Components/EventPageTitle";

export default function eventDetails() {
  return (
    <>
      <Header />
      <EventPageTitle />
      <EventSingle />
      <MoreEvent />
      <Footer />
    </>
  );
}
