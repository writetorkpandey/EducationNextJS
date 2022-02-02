import React from "react";

export default function EventPageTitle() {
  return (
    <>
      {/* <!-- page title --> */}
      <section
        class="page-title-section overlay"
        data-background="images/backgrounds/page-title.jpg"
      >
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <ul class="list-inline custom-breadcrumb">
                <li class="list-inline-item">
                  <a class="h2 text-primary font-secondary" href="events.html">
                    Upcoming Events
                  </a>
                </li>
                <li class="list-inline-item text-white h3 font-secondary nasted">
                  Event Details
                </li>
              </ul>
              <p class="text-lighten">
                Our courses offer a good compromise between the continuous
                assessment favoured by some universities and the emphasis placed
                on final exams by others.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- /page title --> */}
    </>
  );
}
