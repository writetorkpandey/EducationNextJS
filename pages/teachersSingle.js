import React from "react";
import Header from "../Components/Header";
import TeachersSinglePageTitle from "../Components/TeachersSinglePageTitle";
import TeacherDetail from "../Components/TeacherDetail";
import Footer from "../Components/Footer";

export default function teachersSingle() {
	return (
		<>
			<Header />
			<TeachersSinglePageTitle />
			<TeacherDetail />
			<Footer />
		</>
	);
}
