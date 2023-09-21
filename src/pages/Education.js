import React from "react";
import Header from "../components/Header";

function Education  ()  {
  return (
    <div>
      <div class="container-fluid p-0">
        <Header />
        <hr class="m-0" />

        <section class="resume-section" id="education">
          <div class="resume-section-content">
            <h2 class="mb-5">Education</h2>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">SRM University</h3>
                <div class="subheading mb-3">Bachelor of Technology</div>
                <div>Computer Science - Web Development Track</div>
                <p>CGPA: 7.61</p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">July 2016 - May 2020</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between">
              <div class="flex-grow-1">
                <h3 class="mb-0">School Of Scholars</h3>
                <div class="subheading mb-3">Science Program</div>
                <p>Percentage: 73.2</p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">June 2014 - March 2016</span>
              </div>
            </div>
          </div>
        </section>
        <hr class="m-0" />
      </div>
    </div>
  );
};

export default Education;
