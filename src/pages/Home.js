import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2 text-center">
          <h2 className="mt-4">
            Center of Excellence for Teaching and Learning
          </h2>
          <p className="lead">
            The Center of Excellence for Teaching and Learning (CETL) is a unit
            of Green University of Bangladesh that is dedicated to providing
            high-quality teaching and learning resources and support to faculty
            and students.
          </p>
          <h4 className="mt-5">Our Services</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Professional development workshops for faculty
            </li>
            <li className="list-group-item">Instructional design services</li>
            <li className="list-group-item">Online resources for students</li>
            <li className="list-group-item">A student learning center</li>
          </ul>
          <h4 className="mt-5">Upcoming Events</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Certificate in Teaching and Learning (CTL) Program: This program
              is designed to help faculty develop their teaching skills. The
              program is offered in a blended format, with online modules and
              in-person workshops.
            </li>
            <li className="list-group-item">
              Instructional Design Workshop: This workshop will teach faculty
              how to design effective online courses.
            </li>
            <li className="list-group-item">
              Student Learning Center Open House: The Student Learning Center is
              a resource for students who need help with their studies. The
              center offers tutoring, workshops, and other services.
            </li>
          </ul>
        </div>
      </div>
      <Link to="/ContactUs">
        <button className="btn "> Contact Us</button>
      </Link>
    </div>
  );
};

export default Home;
