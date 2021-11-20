import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-links">
          <a
            href="https://linkedin.com/in/victor--fernandez"
            className="footer-links_linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/xrawvelocity"
            className="footer-links_github"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="./files/VictorFernandezResume.docx"
            class="footer-links_resume"
            download
          >
            Resume
          </a>
        </div>
        <a href="#top" className="footer-logo">
          VD
        </a>
        <div className="footer-contact">
          <p>
            Email:{" "}
            <a href="mailto:fernandezvictordev@gmail.com">
              fernandezvictordev@gmail.com
            </a>
          </p>
        </div>
      </footer>
    );
  }
}
