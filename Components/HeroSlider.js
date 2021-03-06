import React from "react";

export default function HeroSlider() {
	return (
		<>
			{/* hero slider */}
			<section
				className="hero-section overlay bg-cover"
				data-background="images/banner/banner-1.jpg"
			>
				<div className="container">
					<div className="hero-slider">
						{/* slider item */}
						<div className="hero-slider-item">
							<div className="row">
								<div className="col-md-8">
									<h1
										className="text-white"
										data-animation-out="fadeOutRight"
										data-delay-out={5}
										data-duration-in=".3"
										data-animation-in="fadeInLeft"
										data-delay-in=".1"
									>
										Your bright future is our mission
									</h1>
									<p
										className="text-muted mb-4"
										data-animation-out="fadeOutRight"
										data-delay-out={5}
										data-duration-in=".3"
										data-animation-in="fadeInLeft"
										data-delay-in=".4"
									>
										Lorem ipsum dolor sit amet, consectetur
										adipisicing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis
										nostrud exer
									</p>
									<a
										href="contact.html"
										className="btn btn-primary"
										data-animation-out="fadeOutRight"
										data-delay-out={5}
										data-duration-in=".3"
										data-animation-in="fadeInLeft"
										data-delay-in=".7"
									>
										Apply now
									</a>
								</div>
							</div>
						</div>
						{/* slider item */}
						<div className="hero-slider-item">
							<div className="row">
								<div className="col-md-8">
									<h1
										className="text-white"
										data-animation-out="fadeOutUp"
										data-delay-out={5}
										data-duration-in=".3"
										data-animation-in="fadeInDown"
										data-delay-in=".1"
									>
										Your bright future is our mission
									</h1>
									<p
										className="text-muted mb-4"
										data-animation-out="fadeOutUp"
										data-delay-out={5}
										data-duration-in=".3"
										data-animation-in="fadeInDown"
										data-delay-in=".4"
									>
										Lorem ipsum dolor sit amet, consectetur
										adipisicing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis
										nostrud exer
									</p>
									<a
										href="contact.html"
										className="btn btn-primary"
										data-animation-out="fadeOutUp"
										data-delay-out={5}
										data-duration-in=".3"
										data-animation-in="fadeInDown"
										data-delay-in=".7"
									>
										Apply now
									</a>
								</div>
							</div>
						</div>
						{/* slider item */}
						{/* <div className="hero-slider-item">
              <div className="row">
                <div className="col-md-8">
                  <h1
                    className="text-white"
                    data-animation-out="fadeOutDown"
                    data-delay-out={5}
                    data-duration-in=".3"
                    data-animation-in="fadeInUp"
                    data-delay-in=".1"
                  >
                    Your bright future is our mission
                  </h1>
                  <p
                    className="text-muted mb-4"
                    data-animation-out="fadeOutDown"
                    data-delay-out={5}
                    data-duration-in=".3"
                    data-animation-in="fadeInUp"
                    data-delay-in=".4"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exer
                  </p>
                  <a
                    href="contact.html"
                    className="btn btn-primary"
                    data-animation-out="fadeOutDown"
                    data-delay-out={5}
                    data-duration-in=".3"
                    data-animation-in="zoomIn"
                    data-delay-in=".7"
                  >
                    Apply now
                  </a>
                </div>
              </div>
            </div> */}
					</div>
				</div>
			</section>
			{/* /hero slider */}
		</>
	);
}
