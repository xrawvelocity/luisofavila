import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
import { Box } from "@mui/system";
import { Tooltip, Typography } from "@mui/material";
import Flex from "./Flex";

export const Navigation = () => {
    return (
        <>
            <nav className="landing-top">
                <a href="#top" className="landing-top-logo ">
                    Luis Avila
                </a>
                <div className="landing-top-nav">
                    <a className="landing-top-nav-link" href="#about">
                        About
                    </a>
                    <a className="landing-top-nav-link" href="#work">
                        Work
                    </a>
                    <a className="landing-top-nav-link" href="#gallery">
                        Gallery
                    </a>
                    <a className="landing-top-nav-link" href="#contact">
                        Contact
                    </a>
                </div>
                <Box
                    sx={{
                        display: { xs: "none", md: "flex" },
                        height: "100%",
                        alignItems: "center",
                    }}
                >
                    <Tooltip placement="bottom" arrow title="Visit Instagram">
                        <a
                            href="https://www.instagram.com/luisofavila/?hl=en"
                            className="footer-links_linkedin"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon size="25px" icon={faInstagram} />
                        </a>
                    </Tooltip>
                    <Tooltip placement="bottom" arrow title="Send Email">
                        <a
                            href="mailto:luisfourfour@gmail.com"
                            className="footer-links_email"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon size="25px" icon={faEnvelope} />
                        </a>
                    </Tooltip>
                    <Tooltip placement="bottom" arrow title="Download Resume">
                        <a
                            href="./files/LuisAvilaResume.pdf"
                            className="footer-links_email"
                            download
                        >
                            <FontAwesomeIcon size="15px" icon={faFile} />
                        </a>
                    </Tooltip>
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
                    href="https://www.instagram.com/luisofavila/?hl=en"
                    style={{
                        color: "#ddd",
                        margin: "1rem 0",
                        fontSize: "4rem",
                        textDecoration: "none",
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Flex
                        sx={{
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",
                        }}
                    >
                        <FontAwesomeIcon size="xs" icon={faInstagram} />
                        <Typography
                            sx={{
                                fontSize: "1.6rem",
                                fontWeight: "600",
                                mt: "1.5rem",
                            }}
                        >
                            Instagram
                        </Typography>
                    </Flex>
                </a>
                <a
                    href="mailto:luisfourfour@gmail.com"
                    style={{
                        color: "#ddd",
                        margin: "1rem 0",
                        fontSize: "4rem",
                        textDecoration: "none",
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Flex
                        sx={{
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",
                        }}
                    >
                        <FontAwesomeIcon size="xs" icon={faEnvelope} />
                        <Typography
                            sx={{
                                fontSize: "1.6rem",
                                fontWeight: "600",
                                mt: "1.5rem",
                            }}
                        >
                            Email
                        </Typography>
                    </Flex>
                </a>
                <a
                    href="./files/LuisAvilaResume.pdf"
                    style={{
                        color: "#ddd",
                        margin: "1rem 0",
                        fontSize: "4rem",
                        textDecoration: "none",
                    }}
                    download
                >
                    <Flex
                        sx={{
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",
                        }}
                    >
                        <FontAwesomeIcon size="xs" icon={faFile} />
                        <Typography
                            sx={{
                                fontSize: "1.6rem",
                                fontWeight: "600",
                                mt: "1.5rem",
                            }}
                        >
                            Resume
                        </Typography>
                    </Flex>
                </a>
            </Box>
        </>
    );
};
