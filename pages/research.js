import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import ResearchItems from "../Components/ResearchItems";
import ResearchPageTitle from "../Components/ResearchPageTitle";

export default function research() {
	return (
		<>
			<Header />
			<ResearchPageTitle />
			<ResearchItems />
			<Footer />
		</>
	);
}
