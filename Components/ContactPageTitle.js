import React from "react";

export default function ContactPageTitle() {
	return (
		<>
			{/* <!-- page title --> */}
			<section
				className="page-title-section overlay"
				data-background="images/backgrounds/page-title.jpg"
			>
				<div className="container">
					<div className="row">
						<div className="col-md-8">
							<ul className="list-inline custom-breadcrumb">
								<li className="list-inline-item">
									<a
										className="h2 text-primary font-secondary"
										href="@@page-link"
									>
										Contact Us
									</a>
								</li>
								<li className="list-inline-item text-white h3 font-secondary @@nasted" />
							</ul>
							<p className="text-lighten">
								Do you have other questions? Don't worry, there
								aren't any dumb questions. Just fill out the
								form below and we'll get back to you as soon as
								possible.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* <!-- /page title --> */}
		</>
	);
}
