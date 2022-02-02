import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import NoticeDetailPageTitle from "../Components/NoticeDetailPageTitle";
import NoticePageDetails from "../Components/NoticePageDetails";

export default function noticeDetails() {
	return (
		<>
			<Header />
			<NoticeDetailPageTitle />
			<NoticePageDetails />
			<Footer />
		</>
	);
}
