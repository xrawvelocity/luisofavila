import {
    Card,
    CardContent,
    CardActions,
    CardMedia,
    Typography,
    Button,
    Modal,
    Paper,
    Fade,
    Backdrop,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Flex from "./Flex";

const Project = ({ image, title, description, technologies, demo, code }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const showTechnologies = () => {
        return technologies.map((each) => {
            return (
                <Flex
                    sx={{
                        alignItems: "center",
                        mt: { xs: "3rem", md: "2rem" },
                    }}
                >
                    <Box
                        sx={{
                            height: { xs: "4rem", md: "3rem" },
                            width: { xs: "4rem", md: "3rem" },
                            mr: "1.5rem",
                        }}
                    >
                        <img
                            src={each.logo}
                            alt={each.name}
                            style={{ height: "100%", width: "100%" }}
                        />
                    </Box>
                    <Typography
                        variant="h5"
                        color="text.secondary"
                        sx={{
                            fontWeight: "600",
                            fontSize: "15px",
                        }}
                    >
                        {each.name}
                    </Typography>
                </Flex>
            );
        });
    };

    return (
        <>
            <Card>
                <CardMedia
                    component="img"
                    height="225"
                    image={image}
                    alt={title}
                    sx={{ borderBottom: "1px solid #111" }}
                />
                <CardContent sx={{ p: "3rem" }}>
                    <Typography
                        sx={{
                            mb: "2rem",
                            pb: ".5rem",
                            width: "fit-content",
                            fontSize: "18px",
                            fontWeight: "600",
                        }}
                        variant="h4"
                    >
                        {title}
                    </Typography>
                    <Typography
                        gutterBottom
                        variant="h5"
                        sx={{ fontSize: "16px" }}
                    >
                        {description}
                    </Typography>
                    <Flex
                        sx={{
                            flexDirection: "column",
                            mt: "1rem",
                        }}
                    >
                        {showTechnologies()}
                    </Flex>
                    <CardActions
                        sx={{
                            px: "0",
                            pt: { xs: "5rem", md: "3rem" },
                            justifyContent: { xs: "center", md: "flex-start" },
                        }}
                    >
                        <Button
                            component="a"
                            href={demo}
                            rel="noreferrer"
                            variant="contained"
                            target="_blank"
                            color="primary"
                            sx={{
                                fontSize: { xs: "12px", md: "16px" },
                                color: "#fff !important",
                            }}
                        >
                            Visit Site
                        </Button>
                        <Button
                            onClick={() => setModalOpen(true)}
                            color="primary"
                            sx={{
                                fontSize: { xs: "12px", md: "16px" },
                                ml: "16px !important",
                            }}
                        >
                            More Info
                        </Button>
                    </CardActions>
                </CardContent>
            </Card>
            <Modal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={modalOpen}>
                    <Paper
                        sx={{
                            height: "50%",
                            width: "50%",
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                        }}
                    ></Paper>
                </Fade>
            </Modal>
        </>
    );
};

export default Project;
