import React from "react";

export default function Header() {
	return (
		<>
			{/* <!-- preloader start --> */}
			<div className="preloader">
				<img src="/images/preloader.gif" alt="preloader" />
			</div>
			{/* <!-- preloader end --> */}

			{/* <!-- header --> */}
			<header className="fixed-top header">
				{/* <!-- top header --> */}
				<div className="top-header py-2 bg-white">
					<div className="container">
						<div className="row no-gutters">
							<div className="col-lg-4 text-center text-lg-left">
								<a
									className="text-color mr-3"
									href="callto:+443003030266"
								>
									<strong>CALL</strong> +44 300 303 0266
								</a>
								<ul className="list-inline d-inline">
									<li className="list-inline-item mx-0">
										<a
											className="d-inline-block p-2 text-color"
											href="#"
										>
											<i className="ti-facebook"></i>
										</a>
									</li>
									<li className="list-inline-item mx-0">
										<a
											className="d-inline-block p-2 text-color"
											href="#"
										>
											<i className="ti-twitter-alt"></i>
										</a>
									</li>
									<li className="list-inline-item mx-0">
										<a
											className="d-inline-block p-2 text-color"
											href="#"
										>
											<i className="ti-linkedin"></i>
										</a>
									</li>
									<li className="list-inline-item mx-0">
										<a
											className="d-inline-block p-2 text-color"
											href="#"
										>
											<i className="ti-instagram"></i>
										</a>
									</li>
								</ul>
							</div>
							<div className="col-lg-8 text-center text-lg-right">
								<ul className="list-inline">
									<li className="list-inline-item">
										<a
											className="text-uppercase text-color p-sm-2 py-2 px-0 d-inline-block"
											href="notice.html"
										>
											notice
										</a>
									</li>
									<li className="list-inline-item">
										<a
											className="text-uppercase text-color p-sm-2 py-2 px-0 d-inline-block"
											href="research.html"
										>
											research
										</a>
									</li>
									<li className="list-inline-item">
										<a
											className="text-uppercase text-color p-sm-2 py-2 px-0 d-inline-block"
											href="scholarship.html"
										>
											SCHOLARSHIP
										</a>
									</li>
									<li className="list-inline-item">
										<a
											className="text-uppercase text-color p-sm-2 py-2 px-0 d-inline-block"
											href="#"
											data-toggle="modal"
											data-target="#loginModal"
										>
											login
										</a>
									</li>
									<li className="list-inline-item">
										<a
											className="text-uppercase text-color p-sm-2 py-2 px-0 d-inline-block"
											href="#"
											data-toggle="modal"
											data-target="#signupModal"
										>
											register
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- navbar --> */}
				<div className="navigation w-100">
					<div className="container">
						<nav className="navbar navbar-expand-lg navbar-dark p-0">
							<a className="navbar-brand" href="index.html">
								<img src="/images/logo.png" alt="logo" />
							</a>
							<button
								className="navbar-toggler rounded-0"
								type="button"
								data-toggle="collapse"
								data-target="#navigation"
								aria-controls="navigation"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<span className="navbar-toggler-icon"></span>
							</button>

							<div
								className="collapse navbar-collapse"
								id="navigation"
							>
								<ul className="navbar-nav ml-auto text-center">
									<li className="nav-item active">
										<a
											className="nav-link"
											href="index.html"
										>
											Home
										</a>
									</li>
									<li className="nav-item @@about">
										<a className="nav-link" href="about">
											About
										</a>
									</li>
									<li className="nav-item @@courses">
										<a className="nav-link" href="courses">
											COURSES
										</a>
									</li>
									<li className="nav-item @@events">
										<a className="nav-link" href="events">
											EVENTS
										</a>
									</li>
									<li className="nav-item @@blog">
										<a className="nav-link" href="blog">
											BLOG
										</a>
									</li>
									<li className="nav-item dropdown view">
										<a
											className="nav-link dropdown-toggle"
											href="#"
											id="navbarDropdown"
											role="button"
											data-toggle="dropdown"
											aria-haspopup="true"
											aria-expanded="false"
										>
											Pages
										</a>
										<div
											className="dropdown-menu"
											aria-labelledby="navbarDropdown"
										>
											<a
												className="dropdown-item"
												href="teachers"
											>
												Teacher
											</a>
											<a
												className="dropdown-item"
												href="teachersSingle"
											>
												Teacher Single
											</a>
											<a
												className="dropdown-item"
												href="notice"
											>
												Notice
											</a>
											<a
												className="dropdown-item"
												href="noticeDetails"
											>
												Notice Details
											</a>
											<a
												className="dropdown-item"
												href="research"
											>
												Research
											</a>
											<a
												className="dropdown-item"
												href="scholarship.html"
											>
												Scholarship
											</a>
											<a
												className="dropdown-item"
												href="course-single.html"
											>
												Course Details
											</a>
											<a
												className="dropdown-item"
												href="event-single.html"
											>
												Event Details
											</a>
											<a
												className="dropdown-item"
												href="blog-single.html"
											>
												Blog Details
											</a>
										</div>
									</li>
									<li className="nav-item @@contact">
										<a className="nav-link" href="contact">
											CONTACT
										</a>
									</li>
								</ul>
							</div>
						</nav>
					</div>
				</div>
			</header>

			<div>
				{/* Modal */}
				<div
					className="modal fade"
					id="signupModal"
					tabIndex={-1}
					role="dialog"
					aria-hidden="true"
				>
					<div className="modal-dialog modal-lg" role="document">
						<div className="modal-content rounded-0 border-0 p-4">
							<div className="modal-header border-0">
								<h3>Register</h3>
								<button
									type="button"
									className="close"
									data-dismiss="modal"
									aria-label="Close"
								>
									<span aria-hidden="true">×</span>
								</button>
							</div>
							<div className="modal-body">
								<div className="login">
									<form action="#" className="row">
										<div className="col-12">
											<input
												type="text"
												className="form-control mb-3"
												id="signupPhone"
												name="signupPhone"
												placeholder="Phone"
											/>
										</div>
										<div className="col-12">
											<input
												type="text"
												className="form-control mb-3"
												id="signupName"
												name="signupName"
												placeholder="Name"
											/>
										</div>
										<div className="col-12">
											<input
												type="email"
												className="form-control mb-3"
												id="signupEmail"
												name="signupEmail"
												placeholder="Email"
											/>
										</div>
										<div className="col-12">
											<input
												type="password"
												className="form-control mb-3"
												id="signupPassword"
												name="signupPassword"
												placeholder="Password"
											/>
										</div>
										<div className="col-12">
											<button
												type="submit"
												className="btn btn-primary"
											>
												SIGN UP
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Modal */}
				<div
					className="modal fade"
					id="loginModal"
					tabIndex={-1}
					role="dialog"
					aria-hidden="true"
				>
					<div className="modal-dialog modal-lg" role="document">
						<div className="modal-content rounded-0 border-0 p-4">
							<div className="modal-header border-0">
								<h3>Login</h3>
								<button
									type="button"
									className="close"
									data-dismiss="modal"
									aria-label="Close"
								>
									<span aria-hidden="true">×</span>
								</button>
							</div>
							<div className="modal-body">
								<form action="#" className="row">
									<div className="col-12">
										<input
											type="text"
											className="form-control mb-3"
											id="loginPhone"
											name="loginPhone"
											placeholder="Phone"
										/>
									</div>
									<div className="col-12">
										<input
											type="text"
											className="form-control mb-3"
											id="loginName"
											name="loginName"
											placeholder="Name"
										/>
									</div>
									<div className="col-12">
										<input
											type="password"
											className="form-control mb-3"
											id="loginPassword"
											name="loginPassword"
											placeholder="Password"
										/>
									</div>
									<div className="col-12">
										<button
											type="submit"
											className="btn btn-primary"
										>
											LOGIN
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
