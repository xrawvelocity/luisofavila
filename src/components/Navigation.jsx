import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Box } from "@mui/system";

export const Navigation = () => {
    return (
        <>
            <nav className="landing-top">
                <a href="#top" className="landing-top-logo ">
                    VD
                </a>
                <div className="landing-top-nav">
                    <a
                        className="landing-top-nav-link landing-top-nav-link_work"
                        href="#work"
                    >
                        Work
                    </a>
                    <a className="landing-top-nav-link" href="#about">
                        About
                    </a>
                    <a className="landing-top-nav-link" href="#contact">
                        Contact
                    </a>
                </div>
                <Box sx={{ display: { xs: "none", md: "inline" } }}>
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
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a
                        href="mailto:fernandezvictordev@gmail.com"
                        className="footer-links_email"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                </Box>
            </nav>
            {/* mobile social links */}
            <Box
                sx={{
                    display: { xs: "flex", md: "none" },
                    width: "100%",
                    justifyContent: "space-around",
                    padding: "2rem",
                }}
                className="social-links"
            >
                <a
                    href="https://linkedin.com/in/victor--fernandez"
                    style={{
                        color: "#ddd",
                        margin: "1rem 0",
                        fontSize: "4rem",
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                    href="https://github.com/xrawvelocity"
                    style={{
                        color: "#ddd",
                        margin: "1rem 0",
                        fontSize: "4rem",
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                    href="mailto:fernandezvictordev@gmail.com"
                    style={{
                        color: "#ddd",
                        margin: "1rem 0",
                        fontSize: "4rem",
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
            </Box>
        </>
    );
};
