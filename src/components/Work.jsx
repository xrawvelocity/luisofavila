import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Flex from "./Flex";

const Work = () => {
    const Video = ({ title, src }) => {
        return (
            <Grid item xs={12} md={4}>
                <Box
                    sx={{
                        width: { xs: "100%", md: "100%" },
                        height: { xs: "200px", md: "350px" },
                        ml: { xs: "0", md: "3rem" },
                        mt: { xs: "5rem", md: "0" },
                    }}
                >
                    <iframe
                        className="youtube-video"
                        title={title}
                        src={src}
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                    ></iframe>
                </Box>
            </Grid>
        );
    };
    return (
        <section id="work" className="work">
            <h2 className="about-story-title" style={{ marginTop: "30px" }}>
                Work
            </h2>
            <Flex
                sx={{
                    flexDirection: "column",
                    width: "100%",
                    alignItems: "center",
                }}
            >
                <Typography
                    sx={{
                        fontSize: { xs: "2.6rem", md: "3rem" },
                        mb: { xs: "1rem", md: "3rem" },
                        mt: { xs: "8rem", md: "6rem" },
                    }}
                >
                    Short Films:
                </Typography>
                <Grid container spacing={3} justify="center">
                    <Video
                        title="First Kisses"
                        src="https://www.youtube.com/embed/tt_8R1oXnrc"
                    />

                    <Video
                        title="The Interview"
                        src="https://www.youtube.com/embed/TLB3uWjGMUo"
                    />
                </Grid>
            </Flex>
            <Flex
                sx={{
                    flexDirection: "column",
                    width: "100%",
                    alignItems: "center",
                }}
            >
                <Typography
                    sx={{
                        fontSize: { xs: "2.6rem", md: "3rem" },
                        mb: { xs: "1rem", md: "3rem" },
                        mt: { xs: "8rem", md: "6rem" },
                    }}
                >
                    Self Tapes:
                </Typography>
                <Grid container spacing={3} justify="center">
                    <Video
                        title="Donnie Brasco Self Tape"
                        src="https://www.youtube.com/embed/LRt2toAXpYc"
                    />
                    <Video
                        title="Greer Self Tape"
                        src="https://www.youtube.com/embed/FjsVQCuyt7U"
                    />
                    <Video
                        title="Wolf of Wall Street Self Tape"
                        src="https://www.youtube.com/embed/-pVgRSZkkSc"
                    />
                    <Video
                        title="Attorney Takes"
                        src="https://www.youtube.com/embed/4z-zYP96Hw8"
                    />
                    <Video
                        title="Shakespeare Comedic Monologue"
                        src="https://www.youtube.com/embed/_vRA5EGwzP0"
                    />
                </Grid>
            </Flex>
        </section>
    );
};

export default Work;
