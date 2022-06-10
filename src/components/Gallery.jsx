import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Flex from "./Flex";
import headshots from "../images/gallery/headshots";
import fahrenheit from "../images/gallery/fahrenheit";
import curious from "../images/gallery/curious";

const Gallery = () => {
    const Image = ({ src, alt = "" }) => {
        return (
            <Grid item xs={12} sm={6} lg={3}>
                <Box
                    sx={{
                        height: { xs: "400px", sm: "450px" },
                        mx: "auto",
                        mb: "2rem",
                    }}
                >
                    <img
                        src={src}
                        alt={alt}
                        loading="lazy"
                        style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "cover",
                            objectPosition: "top",
                        }}
                    />
                </Box>
            </Grid>
        );
    };
    return (
        <section id="gallery" className="gallery">
            <h2 className="about-story-title" style={{ marginTop: "30px" }}>
                Gallery
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
                    Head Shots:
                </Typography>
                <Grid container spacing={3} justify="center">
                    {headshots.map((each, i) => {
                        return <Image src={each} alt={`Headshot ${i + 1}`} />;
                    })}
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
                    Fahrenheit 451:
                </Typography>
                <Grid container spacing={3} justify="center">
                    {fahrenheit.map((each, i) => {
                        return <Image src={each} alt={`Fahrenheit ${i + 1}`} />;
                    })}
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
                    Curious Incident:
                </Typography>
                <Grid container spacing={3} justify="center">
                    {curious.map((each, i) => {
                        return (
                            <Image
                                src={each}
                                alt={`Curious Incident ${i + 1}`}
                            />
                        );
                    })}
                </Grid>
            </Flex>
        </section>
    );
};

export default Gallery;
