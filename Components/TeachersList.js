import React from "react";

export default function TeachersList() {
	return (
		<>
			{/* teachers */}
			<section className="section">
				<div className="container">
					<div className="row">
						<div className="col-12">
							{/* teacher category list */}
							<ul className="list-inline text-center filter-controls mb-5">
								<li
									className="list-inline-item m-3 text-uppercase active"
									data-filter="all"
								>
									All
								</li>
								<li
									className="list-inline-item m-3 text-uppercase"
									data-filter="arts"
								>
									arts
								</li>
								<li
									className="list-inline-item m-3 text-uppercase"
									data-filter="bio-science"
								>
									biological science
								</li>
								<li
									className="list-inline-item m-3 text-uppercase"
									data-filter="business-study"
								>
									business studies
								</li>
								<li
									className="list-inline-item m-3 text-uppercase"
									data-filter="law"
								>
									law
								</li>
								<li
									className="list-inline-item m-3 text-uppercase"
									data-filter="pharmacy"
								>
									pharmacy
								</li>
								<li
									className="list-inline-item m-3 text-uppercase"
									data-filter="science"
								>
									science
								</li>
								<li
									className="list-inline-item m-3 text-uppercase"
									data-filter="social-science"
								>
									social science
								</li>
							</ul>
						</div>
					</div>
					{/* teacher list */}
					<div className="row filtr-container">
						{/* teacher */}
						<div
							data-category="arts, law"
							className="col-lg-4 col-sm-6 mb-5 filtr-item"
						>
							<div className="card border-0 rounded-0 hover-shadow">
								<img
									className="card-img-top rounded-0"
									src="images/teachers/teacher-1.jpg"
									alt="teacher"
								/>
								<div className="card-body">
									<a href="teacher-single.html">
										<h4 className="card-title">
											Jacke Masito
										</h4>
									</a>
									<p>Teacher</p>
									<ul className="list-inline">
										<li className="list-inline-item">
											<a className="text-color" href="#">
												<i className="ti-facebook" />
											</a>
										</li>
										<li className="list-inline-item">
											<a className="text-color" href="#">
												<i className="ti-twitter-alt" />
											</a>
										</li>
										<li className="list-inline-item">
											<a className="text-color" href="#">
												<i className="ti-google" />
											</a>
										</li>
										<li className="list-inline-item">
											<a className="text-color" href="#">
												<i className="ti-linkedin" />
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						{/* teacher */}
						<div
							data-category="bio-science"
							className="col-lg-4 col-sm-6 mb-5 filtr-item"
						>
							<div className="card border-0 rounded-0 hover-shadow">
								<img
									className="card-img-top rounded-0"
									src="images/teachers/teacher-2.jpg"
									alt="teacher"
								/>
								<div className="card-body">
									<a href="teacher-single.html">
										<h4 className="card-title">
											Clark Malik
										</h4>
									</a>
									<p>Teacher</p>
									<ul className="list-inline">
										<li className="list-inline-item">
											<a className="text-color" href="#">
												<i className="ti-facebook" />
											</a>
										</li>
										<li className="list-inline-item">
											<a className="text-color" href="#">
												<i className="ti-twitter-alt" />
											</a>
										</li>
										<li className="list-inline-item">
											<a className="text-color" href="#">
												<i className="ti-google" />
											</a>
										</li>
										<li className="list-inline-item">
											<a className="text-color" href="#">
												<i className="ti-linkedin" />
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						{/* teacher */}
						<div
							data-category="business-study"
							className="col-lg-4 col-sm-6 mb-5 filtr-item"
						>
							<div className="card border-0 rounded-0 hover-shadow">
								<img
									className="card-img-top rounded-0"
									src="images/teachers/teacher-3.jpg"
									alt="teacher"
								/>
								<div className="card-body">
									<a href="teacher-single.html">
										<h4 className="card-title">John Doe</h4>
									</a>
									<p>Teacher</p>
									<ul className="list-inline">
										<li className="list-inline-item">
											<a className="text-color" href="#">
												<i className="ti-facebook" />
											</a>
										</li>
										<li className="list-inline-item">
											<a className="text-color" href="#">
												<i className="ti-twitter-alt" />
											</a>
										</li>
										<li className="list-inline-item">
											<a className="text-color" href="#">
												<i className="ti-google" />
											</a>
										</li>
										<li className="list-inline-item">
											<a className="text-color" href="#">
												<i className="ti-linkedin" />
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						{/* teacher */}
						<div
							data-category="bio-science, science arts"
							className="col-lg-4 col-sm-6 mb-5 filtr-item"
						>
							<div className="card border-0 rounded-0 hover-shadow">
								<img
									className="card-img-top rounded-0"
									src="images/teachers/teacher-1.jpg"
									alt="teacher"
								/>
								<div className="card-body">
									<a href="teacher-single.html">
										<h4 className="card-title">
											Alex Rook
										</h4>
									</a>
									<p>Teacher</p>
									<ul className="list-inline">
										<li className="list-inline-item">
											<a className="text-color" href="#">
												<i className="ti-facebook" />
											</a>
										</li>
										<li className="list-inline-item">
											<a className="text-color" href="#">
												<i className="ti-twitter-alt" />
											</a>
										</li>
										<li className="list-inline-item">
											<a className="text-color" href="#">
												<i className="ti-google" />
											</a>
										</li>
										<li className="list-inline-item">
											<a className="text-color" href="#">
												<i className="ti-linkedin" />
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						{/* teacher */}
						<div
							data-category="law"
							className="col-lg-4 col-sm-6 mb-5 filtr-item"
						>
							<div className="card border-0 rounded-0 hover-shadow">
								<img
									className="card-img-top rounded-0"
									src="images/teachers/teacher-2.jpg"
									alt="teacher"
								/>
								<div className="card-body">
									<a href="teacher-single.html">
										<h4 className="card-title">
											Din Martin
										</h4>
									</a>
									<p>Teacher</p>
									<ul className="list-inline">
										<li className="list-inline-item">
											<a className="text-color" href="#">
												<i className="ti-facebook" />
											</a>
										</li>
										<li className="list-inline-item">
											<a className="text-color" href="#">
												<i className="ti-twitter-alt" />
											</a>
										</li>
										<li className="list-inline-item">
											<a className="text-color" href="#">
												<i className="ti-google" />
											</a>
										</li>
										<li className="list-inline-item">
											<a className="text-color" href="#">
												<i className="ti-linkedin" />
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						{/* teacher */}
						<div
							data-category="science"
							className="col-lg-4 col-sm-6 mb-5 filtr-item"
						>
							<div className="card border-0 rounded-0 hover-shadow">
								<img
									className="card-img-top rounded-0"
									src="images/teachers/teacher-3.jpg"
									alt="teacher"
								/>
								<div className="card-body">
									<a href="teacher-single.html">
										<h4 className="card-title">Raka Jim</h4>
									</a>
									<p>Teacher</p>
									<ul className="list-inline">
										<li className="list-inline-item">
											<a className="text-color" href="#">
												<i className="ti-facebook" />
											</a>
										</li>
										<li className="list-inline-item">
											<a className="text-color" href="#">
												<i className="ti-twitter-alt" />
											</a>
										</li>
										<li className="list-inline-item">
											<a className="text-color" href="#">
												<i className="ti-google" />
											</a>
										</li>
										<li className="list-inline-item">
											<a className="text-color" href="#">
												<i className="ti-linkedin" />
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						{/* teacher */}
						<div
							data-category="bio-science"
							className="col-lg-4 col-sm-6 mb-5 filtr-item"
						>
							<div className="card border-0 rounded-0 hover-shadow">
								<img
									className="card-img-top rounded-0"
									src="images/teachers/teacher-1.jpg"
									alt="teacher"
								/>
								<div className="card-body">
									<a href="teacher-single.html">
										<h4 className="card-title">
											Devid Luis
										</h4>
									</a>
									<p>Teacher</p>
									<ul className="list-inline">
										<li className="list-inline-item">
											<a className="text-color" href="#">
												<i className="ti-facebook" />
											</a>
										</li>
										<li className="list-inline-item">
											<a className="text-color" href="#">
												<i className="ti-twitter-alt" />
											</a>
										</li>
										<li className="list-inline-item">
											<a className="text-color" href="#">
												<i className="ti-google" />
											</a>
										</li>
										<li className="list-inline-item">
											<a className="text-color" href="#">
												<i className="ti-linkedin" />
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						{/* teacher */}
						<div
							data-category="pharmacy, social-science, arts"
							className="col-lg-4 col-sm-6 mb-5 filtr-item"
						>
							<div className="card border-0 rounded-0 hover-shadow">
								<img
									className="card-img-top rounded-0"
									src="images/teachers/teacher-2.jpg"
									alt="teacher"
								/>
								<div className="card-body">
									<a href="teacher-single.html">
										<h4 className="card-title">Zim Cook</h4>
									</a>
									<p>Teacher</p>
									<ul className="list-inline">
										<li className="list-inline-item">
											<a className="text-color" href="#">
												<i className="ti-facebook" />
											</a>
										</li>
										<li className="list-inline-item">
											<a className="text-color" href="#">
												<i className="ti-twitter-alt" />
											</a>
										</li>
										<li className="list-inline-item">
											<a className="text-color" href="#">
												<i className="ti-google" />
											</a>
										</li>
										<li className="list-inline-item">
											<a className="text-color" href="#">
												<i className="ti-linkedin" />
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						{/* teacher */}
						<div
							data-category="business-study"
							className="col-lg-4 col-sm-6 mb-5 filtr-item"
						>
							<div className="card border-0 rounded-0 hover-shadow">
								<img
									className="card-img-top rounded-0"
									src="images/teachers/teacher-3.jpg"
									alt="teacher"
								/>
								<div className="card-body">
									<a href="teacher-single.html">
										<h4 className="card-title">Duis Riu</h4>
									</a>
									<p>Teacher</p>
									<ul className="list-inline">
										<li className="list-inline-item">
											<a className="text-color" href="#">
												<i className="ti-facebook" />
											</a>
										</li>
										<li className="list-inline-item">
											<a className="text-color" href="#">
												<i className="ti-twitter-alt" />
											</a>
										</li>
										<li className="list-inline-item">
											<a className="text-color" href="#">
												<i className="ti-google" />
											</a>
										</li>
										<li className="list-inline-item">
											<a className="text-color" href="#">
												<i className="ti-linkedin" />
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* /teachers */}
		</>
	);
}
