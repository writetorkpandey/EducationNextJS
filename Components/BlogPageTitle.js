import React from "react";

export default function BlogPageTitle() {
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
										Our Blog
									</a>
								</li>
								<li className="list-inline-item text-white h3 font-secondary @@nasted" />
							</ul>
							<p className="text-lighten">
								Our courses offer a good compromise between the
								continuous assessment favoured by some
								universities and the emphasis placed on final
								exams by others.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* <!-- /page title --> */}
		</>
	);
}
