import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import TeachersList from "../Components/TeachersList";
import TeachersPageTitle from "../Components/TeachersPageTitle";

export default function teachers() {
	return (
		<>
			<Header />
			<TeachersPageTitle />
			<TeachersList />
			<Footer />
		</>
	);
}
