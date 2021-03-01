import "./App.css";
import React from "react";
import { Header } from "./Components/Header";
import { Experience } from "./Components/Experience";

export class CV extends React.Component {
  render() {
    var jobs = [
      {
        title: "Software Developer Apprentice",
        company: "Atos",
        date: "09/2020 - present",
        location: "Winnersh",
        responsibilities: [
          "Undertaking courses, through self-learning and in classroom to gain BCS accredited qualifications in Software Development, Programming and Methodologies",
          "Working and training with multiple programming languages including: Python, SQL and Java",
        ],
      },
      {
        title: "Office Manager/Exec PA",
        company: "mdgroup",
        date: "08/2019 - 09/2020",
        location: "Bracknell",
        responsibilities: [
          "Providing support to three Exec Vice Presidents and adhoc support to CEO/EA",
          "Office and Facilities Management on a day to day basis. Ensuring smooth functions of our Head Office and other offices in the US and Singapore. Ordering of stationary supplies and new office set ups.",
          "HR administration including support with payroll, absence/holiday management, references, writing of contracts and recruitment.",
          "Adhering to Supplier Management and ensuring our Suppliers are fully approved.",
          "Publishing to the company's intranet and Linkedin.",
          "Responsible for training of all staff. Arranging training sessions in-house and externally.",
        ],
      },
      {
        title: "Project Administrator",
        company: "The Rank Group",
        date: "08/2018 - 08/2019",
        location: "Maidenhead",
        responsibilities: [
          "Admin and PA support for delegated Project Managers (PM) and Head of Department on a day to day basis.",
          "Making travel arrangements and answering phones as and when necessary,responding to emails, and typing of contracts.",
          "Ensuring receipt of certification following legislative works.",
          "Booking meetings on and off-site for the Head of Maintenance, Assistant Maintenance Controllers and Project Managers with contractors.",
          "Main point of contact for Rank Maintenance's CRM platform, managing users and accounts.",
          "Budget allocation of works for each project (refurbishments and maintenance), raising POs (Microsoft Dynamics) and monitoring delivery of project works from start to finish.",
        ],
      },
      {
        title: "Case Manager",
        company: "Collingwood Health Ltd",
        date: "09/2016 - 08/2018",
        location: "Slough",
        responsibilities: [
          "Providing clients with effective and high standards of customer service, administration, and case management support.",
          "Working with HR departments and their employees for a variety of different well- known companies.",
          "Managing own caseload of 200+ cases from start to finish for continuity of quality and care.",
          "Writing Occupational Health reports for our clients and their employees.",
          "Monitoring and delivering against service KPIs and ensuring reports are within SLA.",
          "First point of contact for enquiries and complaints.",
        ],
      },
    ];

    return (
      <div className="CV">
        <Header />
        <div className="content">
          <div className="left-content">
            <h1 className="workexp">WORK EXPERIENCE</h1>
            {jobs.map((x) => (
              <Experience jobInfo={x} />
            ))}
          </div>
          <div className="right-content">fkdjfdkj</div>
        </div>
      </div>
    );
  }
}

export default CV;
