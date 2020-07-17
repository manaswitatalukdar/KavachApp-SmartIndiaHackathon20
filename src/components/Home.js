import React, { Component } from "react";
import "../App.css";
import "../fonts.css";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="wrapper2">
          <div id="welcome" className="container">
            <div className="title">
              <h2>Welcome to our website</h2>
            </div>
            <p>
              This is <strong>Kavach</strong>, a free, fully standards-compliant
              application for rea-time crime reporting.
            </p>
          </div>
        </div>
        <div id="wrapper3">
          <div id="portfolio" className="container">
            <div className="title">
              <h2>Kavach</h2>
              <span className="byline">Our Usecases</span>{" "}
            </div>
            <div className="column1">
              <div className="box">
                <span className="icon icon-camera"></span>
                <h3>Report Crime</h3>
                <p>
                  Images and videos of evidence/crime scene, voice reports and
                  live locations.
                </p>
                <a className="button button-small">More...</a>{" "}
              </div>
            </div>
            <div className="column2">
              <div className="box">
                <span className="icon icon-check"></span>
                <h3>Status</h3>
                <p>
                  Check and update crime status. Active and Completed
                  investigation reports.
                </p>
                <a className="button button-small">More...</a>{" "}
              </div>
            </div>
            <div className="column3">
              <div className="box">
                <span className="icon icon-map-marker"></span>
                <h3>Heat Map</h3>
                <p>Analysis of crime patterns based on heat map.</p>
                <a className="button button-small">More...</a>{" "}
              </div>
            </div>
            <div className="column4">
              <div className="box">
                <span className="icon icon-warning-sign"></span>
                <h3>Panic Button</h3>
                <p>
                  To get help during emergency situations or potential danger.
                </p>
                <a className="button button-small">More...</a>{" "}
              </div>
            </div>
          </div>
        </div>
        <div id="footer" className="container">
          <div className="title">
            <h2>Get in touch</h2>{" "}
          </div>
          <ul className="contact">
            <li>
              <a className="icon icon-phone"></a>
            </li>
            <li>
              <a className="icon icon-twitter"></a>
            </li>
            <li>
              <a className="icon icon-youtube-sign"></a>
            </li>
            <li>
              <a className="icon icon-tumblr"></a>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
