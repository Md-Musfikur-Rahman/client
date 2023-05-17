import React from "react";

function ContactUs() {
  return (
    <div>
      <h2 className="text-center mt-4">Contact Us</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card mt-4">
              <div className="card-body">
                <h5 className="card-title">Contact Information</h5>
                <p className="card-text">
                  For more information, please visit our Facebook page and
                  website:
                </p>
                <ul className="list-unstyled">
                  <li className="my-2">
                    <a
                      href="https://www.facebook.com/cetl.green/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary mr-2"
                    >
                      Facebook Page
                    </a>
                  </li>
                  <li>
                    <a
                      href="cetl.green.edu.bd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Website
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
