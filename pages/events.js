import React from "react";
import EventsCourses from "../Components/EventsCourses";
import EventsPageTitle from "../Components/EventsPageTitle";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

export default function events() {
	return (
		<>
			<Header />
			<EventsPageTitle />
			<EventsCourses />
			<Footer />
		</>
	);
}
