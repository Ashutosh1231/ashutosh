import React from "react";
import Header from "../components/Header";

function Experience  ()  {
  return (
    <div>
      <div class="container-fluid p-0">
        <Header />
        <hr class="m-0" />

        <section class="resume-section" id="experience">
          <div class="resume-section-content">
            <h2 class="mb-5">Experience</h2>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">System Engineer</h3>
                <div class="subheading mb-3">Infosys</div>
                <ul>
                  <li class ="list">
                  Worked on the Jasper Report to complete the configuration and functionality of the project itemize.
                  </li>
                  <li class ="list">
                  Worked on the DashBoard, Navbar, and Different Sections of the Website like TruckUploading Section of an Truck Rental Portal, Product Uploading Section of Product Section of Website with the help of React.Js
                  </li>
                  <li class ="list">
                  As a senior developer, I am responsible for understanding
                  functional requirements and root cause analysis of the project,
                  planning the course of action, providing development estimates, guiding the team in the execution process, development reporting and management.
                  </li>
                  <li class ="list">
                  Worked in close association with the onsite clients and transformed the client's requirements into test scenarios and executed the test cases for the new requirements, after going through the existing functionality
                  </li>
                </ul>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">Sept 2020 - Feb 2022</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">System Engineer Trainee (Full Stack Developer Intern)</h3>
                <div class="subheading mb-3">Infosys</div>
                <ul>
                <li class ="list">
                Worked on the DashBoard, Navbar, and Routing of Website.
                </li>
                <li class ="list">
                Working with the team on the design, development, and Integration of API.
                </li>
                <li class ="list">
                Optimised the Existing Code using ReactHooks
                </li>
                <li class ="list">
                Worked on Data Verification, APIIntegration, Designing and Creating New Components Using ReactJS, React Styled Components.
                </li>
                <li class ="list">
                Used Spring Boot as the Backend Technology to make the API's to fetch the Data
                </li>
                </ul>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">Jan 2020 - Sept 2020</span>
              </div>
            </div>
          </div>
        </section>
        <hr class="m-0" />
      </div>
    </div>
  );
};

export default Experience;
