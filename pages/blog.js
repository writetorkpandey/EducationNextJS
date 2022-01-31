import React from "react";
import BlogList from "../Components/BlogList";
import BlogPageTitle from "../Components/BlogPageTitle";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function blog() {
	return (
		<>
			<Header />
			<BlogPageTitle />
			<BlogList />
			<Footer />
		</>
	);
}
