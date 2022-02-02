import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import NoticeItems from "../Components/NoticeItems";
import NoticePageTitle from "../Components/NoticePageTitle";

export default function notice() {
	return (
		<>
			<Header />
			<NoticePageTitle />
			<NoticeItems />
			<Footer />
		</>
	);
}
