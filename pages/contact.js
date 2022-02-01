import React from "react";
import ContactForm from "../Components/ContactForm";
import ContactPageTitle from "../Components/ContactPageTitle";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

export default function contact() {
	return (
		<>
			<Header />
			<ContactPageTitle />
			<ContactForm />
			<Footer />
		</>
	);
}
