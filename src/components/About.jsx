import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { Component } from "react";
import Flex from "./Flex";

export default class About extends Component {
    showSkills = (skills) => {
        return skills.map((skill) => {
            return (
                <div className="about-skills-list-each">
                    <div
                        className={`about-skills-list-each-image about-skills-list-each-image-${skill}`}
                    ></div>
                    <div className="about-skills-list-each-name">
                        {skill.charAt(0).toUpperCase() + skill.slice(1)}
                    </div>
                </div>
            );
        });
    };
    render() {
        return (
            <section id="about" className="about">
                <h2
                    className="about-story-title"
                    style={{
                        marginTop: "50px",
                        width: "100%",
                        textAlign: "center",
                        color: "#000 !important",
                    }}
                >
                    About
                </h2>
                <Flex
                    sx={{
                        flexDirection: { xs: "column", md: "row" },
                        px: "10%",
                        alignItems: { xs: "flex-start", md: "center" },
                        justifyContent: {
                            xs: "flex-start",
                            md: "center",
                        },
                    }}
                >
                    <Typography
                        className="about-story-paragraph"
                        sx={{
                            width: { xs: "100%", md: "40%" },
                            fontSize: { xs: "15px", md: "24px" },
                            mr: { xs: "0", md: "3rem" },
                        }}
                    >
                        Self taught web developer since June 2019. Attended the
                        Ironhack Miami Coding Bootcamp from January 2020 to
                        March 2020. Working as a Front End Developer for a
                        payment gateway company since November 2020.
                    </Typography>

                    <Box
                        sx={{
                            width: { xs: "100%", md: "40%" },
                            height: { xs: "200px", md: "375px" },
                            ml: { xs: "0", md: "3rem" },
                            mt: { xs: "5rem", md: "0" },
                        }}
                    >
                        <iframe
                            className="youtube-video"
                            title="Web Dev Journey"
                            src="https://www.youtube.com/embed/vZATCcCbpSw"
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                        ></iframe>
                    </Box>
                </Flex>
                <div className="about-picture"></div>
                <div className="about-skills">
                    <h2 className="about-skills-title">Skills</h2>
                    <div className="about-skills-list">
                        {this.showSkills([
                            "HTML",
                            "CSS",
                            "SASS",
                            "tailwindCSS",
                            "javascript",
                            "reactJS",
                            "redux",
                            "materialUI",
                            "mongoDB",
                            "firebase",
                            "nodeJS",
                            "expressJS",
                        ])}
                    </div>
                </div>
            </section>
        );
    }
}
