import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import moment from "moment";
import React, { Component } from "react";
import Flex from "./Flex";

const About = () => {
    let age = moment().diff("1996-08-09", "years");

    return (
        <section id="about" className="about">
            <h2
                className="about-story-title"
                style={{
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
                <Box
                    sx={{
                        mr: { xs: "0", md: "5rem" },
                        height: { xs: "200px", md: "400px" },
                        width: { xs: "100%", md: "600px" },
                        mb: { xs: "5rem", md: "0" },
                    }}
                >
                    <div className="about-image" />
                </Box>
                <Flex
                    className="about-story-paragraph"
                    sx={{
                        flexDirection: "column",
                        alignItems: { xs: "center", md: "flex-start" },
                        width: { xs: "100%", md: "40%" },
                        ml: { xs: "0", md: "5rem" },
                        "& > *": {
                            fontSize: {
                                xs: "20px !important",
                                md: "24px !important",
                            },
                        },
                    }}
                >
                    <Typography sx={{ mb: { xs: "5rem", md: "2rem" } }}>
                        I am an actor born in Cuba, but raised in Miami. Making
                        the audience think and question the human condition
                        through story telling is what I'm most passionate about,
                        especially through the lenses of complex layered
                        characters. I'm currently a senior at FIU and I've been
                        acting since High School (2013).
                    </Typography>
                    <Typography>
                        <b>Age:</b> {age}
                    </Typography>
                    <Typography>
                        <b>Hair:</b> Black
                    </Typography>
                    <Typography>
                        <b>Eyes:</b> Dark Brown
                    </Typography>
                    <Typography>
                        <b>Weight:</b> 125 lbs
                    </Typography>
                    <Typography>
                        <b>Height:</b> 5'3"
                    </Typography>
                </Flex>
            </Flex>
        </section>
    );
};

export default About;
