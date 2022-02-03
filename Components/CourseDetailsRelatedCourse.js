import React from "react";

export default function CourseDetailsRelatedCourse() {
  return (
    <>
      {/* <!-- related course --> */}
      <section className="section pt-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="section-title">Related Course</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            {/* <!-- course item --> */}
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="card p-0 border-primary rounded-0 hover-shadow">
                <img
                  className="card-img-top rounded-0"
                  src="images/courses/course-1.jpg"
                  alt="course thumb"
                />
                <div className="card-body">
                  <ul className="list-inline mb-2">
                    <li className="list-inline-item">
                      <i className="ti-calendar mr-1 text-color"></i>02-14-2018
                    </li>
                    <li className="list-inline-item">
                      <a className="text-color" href="#">
                        Humanities
                      </a>
                    </li>
                  </ul>
                  <a href="course-single.html">
                    <h4 className="card-title">Photography</h4>
                  </a>
                  <p className="card-text mb-4">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>
                  <a href="course-single.html" className="btn btn-primary btn-sm">
                    Apply now
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- course item --> */}
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="card p-0 border-primary rounded-0 hover-shadow">
                <img
                  className="card-img-top rounded-0"
                  src="images/courses/course-2.jpg"
                  alt="course thumb"
                />
                <div className="card-body">
                  <ul className="list-inline mb-2">
                    <li className="list-inline-item">
                      <i className="ti-calendar mr-1 text-color"></i>02-14-2018
                    </li>
                    <li className="list-inline-item">
                      <a className="text-color" href="#">
                        Humanities
                      </a>
                    </li>
                  </ul>
                  <a href="course-single.html">
                    <h4 className="card-title">Programming</h4>
                  </a>
                  <p className="card-text mb-4">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>
                  <a href="course-single.html" className="btn btn-primary btn-sm">
                    Apply now
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- course item --> */}
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="card p-0 border-primary rounded-0 hover-shadow">
                <img
                  className="card-img-top rounded-0"
                  src="images/courses/course-3.jpg"
                  alt="course thumb"
                />
                <div className="card-body">
                  <ul className="list-inline mb-2">
                    <li className="list-inline-item">
                      <i className="ti-calendar mr-1 text-color"></i>02-14-2018
                    </li>
                    <li className="list-inline-item">
                      <a className="text-color" href="#">
                        Humanities
                      </a>
                    </li>
                  </ul>
                  <a href="course-single.html">
                    <h4 className="card-title">Lifestyle Archives</h4>
                  </a>
                  <p className="card-text mb-4">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>
                  <a href="course-single.html" className="btn btn-primary btn-sm">
                    Apply now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- /related course --> */}
    </>
  );
}
