import React from "react";
import "./Header.css";
import { Link } from "./Link";

export class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="content">
          <div className="picture">
            <img
              src={process.env.PUBLIC_URL + "Capture.PNG"}
              alt="pic"
              className="profile"
            />
          </div>
          <div className="summary">
            <h1 className="name">Stephanie Mansell</h1>
            <p className="main-job-title">Software Developer Apprentice</p>
            <p className="summary-detail">
              A focused and passionate individual with a keen interest in
              software development. Quick to learn and is dedicated to
              developing their skills in programming. A motivated self-starter
              while also enjoying working as part of an agile project team.
            </p>
          </div>
        </div>
        <div className="links">
          <Link
            icon="email"
            link="mailto:mansell.steph@gmail.com"
            text="mansell.steph@gmail.com"
          />
          <Link
            icon="phonelink_ring"
            link="tel:07963598631"
            text="07963598631"
          />
          <Link
            icon="link"
            link="https://www.linkedin.com/in/stephanie-mansell-50677197/"
            text="www.linkedin.com/in/stephanie-mansell-50677197"
          />
        </div>
      </div>
    );
  }
}
