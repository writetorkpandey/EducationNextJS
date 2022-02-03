import React from "react";

export default function MoreEvent() {
  return (
    <>
      {/* more event  */}
      <section className="section pt-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="section-title">More Events</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            {/* event  */}
            <div className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
              <div className="card border-0 rounded-0 hover-shadow">
                <div className="card-img position-relative">
                  <img
                    className="card-img-top rounded-0"
                    src="images/events/event-1.jpg"
                    alt="event thumb"
                  />
                  <div className="card-date">
                    <span>18</span>
                    <br />
                    December
                  </div>
                </div>
                <div className="card-body">
                  {/* location  */}
                  <p>
                    <i className="ti-location-pin text-primary mr-2"></i>Dhanmondi
                    Lake, Dhaka
                  </p>
                  <a href="event-single.html">
                    <h4 className="card-title">
                      Lorem ipsum dolor amet, consectetur adipisicing.
                    </h4>
                  </a>
                </div>
              </div>
            </div>
            {/* event  */}
            <div className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
              <div className="card border-0 rounded-0 hover-shadow">
                <div className="card-img position-relative">
                  <img
                    className="card-img-top rounded-0"
                    src="images/events/event-2.jpg"
                    alt="event thumb"
                  />
                  <div className="card-date">
                    <span>21</span>
                    <br />
                    December
                  </div>
                </div>
                <div className="card-body">
                  {/* location  */}
                  <p>
                    <i className="ti-location-pin text-primary mr-2"></i>Dhanmondi
                    Lake, Dhaka
                  </p>
                  <a href="event-single.html">
                    <h4 className="card-title">
                      Lorem ipsum dolor amet, consectetur adipisicing.
                    </h4>
                  </a>
                </div>
              </div>
            </div>
            {/* event  */}
            <div className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
              <div className="card border-0 rounded-0 hover-shadow">
                <div className="card-img position-relative">
                  <img
                    className="card-img-top rounded-0"
                    src="images/events/event-3.jpg"
                    alt="event thumb"
                  />
                  <div className="card-date">
                    <span>23</span>
                    <br />
                    December
                  </div>
                </div>
                <div className="card-body">
                  {/* location  */}
                  <p>
                    <i className="ti-location-pin text-primary mr-2"></i>Dhanmondi
                    Lake, Dhaka
                  </p>
                  <a href="event-single.html">
                    <h4 className="card-title">
                      Lorem ipsum dolor amet, consectetur adipisicing.
                    </h4>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* more event  */}
    </>
  );
}
