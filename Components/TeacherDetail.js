import React from "react";

export default function TeacherDetail() {
	return (
		<>
			{/* teacher details */}
			<section className="section">
				<div className="container">
					<div className="row">
						<div className="col-md-5 mb-5">
							<img
								className="img-fluid w-100"
								src="images/teachers/teacher-1.jpg"
								alt="teacher"
							/>
						</div>
						<div className="col-md-6 mb-5">
							<h3>John Doe</h3>
							<h6 className="text-color">Computer Science</h6>
							<p className="mb-5">
								Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. Cumque accusamus tenetur ea
								harum delectus ab consequatur excepturi, odit
								qui in quo quia voluptate nam optio, culpa
								aspernatur. Error placeat iusto officia voluptas
								quae.
							</p>
							<div className="row">
								<div className="col-md-6 mb-5 mb-md-0">
									<h4 className="mb-4">CONTACT INFO:</h4>
									<ul className="list-unstyled">
										<li className="mb-3">
											<a
												className="text-color"
												href="mailto:johndoe@email.com"
											>
												<i className="ti-email mr-2" />
												johndoe@email.com
											</a>
										</li>
										<li className="mb-3">
											<a
												className="text-color"
												href="callto:+120345876"
											>
												<i className="ti-mobile mr-2" />
												+120 345 876
											</a>
										</li>
										<li className="mb-3">
											<a className="text-color" href="#">
												<i className="ti-facebook mr-2" />
												john Doe
											</a>
										</li>
										<li className="mb-3">
											<a className="text-color" href="#">
												<i className="ti-twitter-alt mr-2" />
												john Doe
											</a>
										</li>
										<li className="mb-3">
											<a className="text-color" href="#">
												<i className="ti-skype mr-2" />
												john Doe
											</a>
										</li>
										<li className="mb-3">
											<a className="text-color" href="#">
												<i className="ti-world mr-2" />
												johnDoe.com
											</a>
										</li>
										<li className="mb-3">
											<a className="text-color" href="#">
												<i className="ti-location-pin mr-2" />
												1313 Boulevard Cremazie,Quebec
											</a>
										</li>
									</ul>
								</div>
								<div className="col-md-6">
									<h4 className="mb-4">
										SUMMARY OF ACTIVITIES/INTERESTS
									</h4>
									<ul className="list-unstyled">
										<li className="mb-3">
											Computer Networking
										</li>
										<li className="mb-3">
											Computer Security
										</li>
										<li className="mb-3">
											Human Computer Interfacing
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-12">
							<h4 className="mb-4">BIOGRAPHY</h4>
							<p className="mb-5">
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo
								consequat. Duis aute irure dolor in
								reprehenderit in voluptate velit esse cillum
								dolore eu fugiat nulla pariatur. Excepteur sint
								occaecat cupidatat non proident, sunt in culpa
								qui officia deserunt mollit anim id est laborum.
								Sed ut perspiciatis unde omnis iste natus error
								sit voluptatem accusantium doloremque
								laudantium, totam rem aperiam, eaque ipsa quae
								ab illo inventore veritatis et quasi architecto.
							</p>
						</div>
					</div>
					<div className="row justify-content-center">
						<div className="col-12">
							<h4 className="mb-4">COURSES</h4>
						</div>
						{/* course item */}
						<div className="col-lg-4 col-sm-6 mb-5">
							<div className="card p-0 border-primary rounded-0 hover-shadow">
								<img
									className="card-img-top rounded-0"
									src="images/courses/course-4.jpg"
									alt="course thumb"
								/>
								<div className="card-body">
									<ul className="list-inline mb-2">
										<li className="list-inline-item">
											<i className="ti-calendar mr-1 text-color" />
											02-14-2018
										</li>
										<li className="list-inline-item">
											<a className="text-color" href="#">
												Humanities
											</a>
										</li>
									</ul>
									<a href="course-single.html">
										<h4 className="card-title">
											Complete Freelancing
										</h4>
									</a>
									<p className="card-text mb-4">
										{" "}
										Lorem ipsum dolor sit amet, consectetur
										adipisicing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magna.
									</p>
									<a
										href="course-single.html"
										className="btn btn-primary btn-sm"
									>
										Apply now
									</a>
								</div>
							</div>
						</div>
						{/* course item */}
						<div className="col-lg-4 col-sm-6 mb-5">
							<div className="card p-0 border-primary rounded-0 hover-shadow">
								<img
									className="card-img-top rounded-0"
									src="images/courses/course-5.jpg"
									alt="course thumb"
								/>
								<div className="card-body">
									<ul className="list-inline mb-2">
										<li className="list-inline-item">
											<i className="ti-calendar mr-1 text-color" />
											02-14-2018
										</li>
										<li className="list-inline-item">
											<a className="text-color" href="#">
												Humanities
											</a>
										</li>
									</ul>
									<a href="course-single.html">
										<h4 className="card-title">
											Branding Design
										</h4>
									</a>
									<p className="card-text mb-4">
										{" "}
										Lorem ipsum dolor sit amet, consectetur
										adipisicing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magna.
									</p>
									<a
										href="course-single.html"
										className="btn btn-primary btn-sm"
									>
										Apply now
									</a>
								</div>
							</div>
						</div>
						{/* course item */}
						<div className="col-lg-4 col-sm-6 mb-5">
							<div className="card p-0 border-primary rounded-0 hover-shadow">
								<img
									className="card-img-top rounded-0"
									src="images/courses/course-6.jpg"
									alt="course thumb"
								/>
								<div className="card-body">
									<ul className="list-inline mb-2">
										<li className="list-inline-item">
											<i className="ti-calendar mr-1 text-color" />
											02-14-2018
										</li>
										<li className="list-inline-item">
											<a className="text-color" href="#">
												Humanities
											</a>
										</li>
									</ul>
									<a href="course-single.html">
										<h4 className="card-title">
											Art Design
										</h4>
									</a>
									<p className="card-text mb-4">
										{" "}
										Lorem ipsum dolor sit amet, consectetur
										adipisicing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magna.
									</p>
									<a
										href="course-single.html"
										className="btn btn-primary btn-sm"
									>
										Apply now
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* /teacher details */}
		</>
	);
}
