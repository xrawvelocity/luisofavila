import { Grid } from "@mui/material";
import React from "react";
import Project from "./Project";

import rusticdudebg from "../images/rusticdudebg.png";
import micturbobg from "../images/micturbobg.png";
import tracktradebg from "../images/tracktradebg.png";

import reactLogo from "../images/logos/reactjslogo.png";
import materialUIlogo from "../images/logos/materialuilogo.png";
import reduxLogo from "../images/logos/reduxlogo.png";
import nodeLogo from "../images/logos/nodejslogo.png";
import mongoLogo from "../images/logos/mongodblogo.png";
import firebaseLogo from "../images/logos/firebase.png";
import sassLogo from "../images/logos/sasslogo.svg";

const Work = () => {
    return (
        <section id="work" className="work">
            <h2 className="about-story-title" style={{ marginTop: "30px" }}>
                Work
            </h2>
            <Grid container spacing={6}>
                <Grid item xs={12} md={4}>
                    <Project
                        image={rusticdudebg}
                        title={"The Rustic Dude"}
                        description={
                            "A personal portfolio for a woodworking company with a hidden admin route to manage the products being displayed."
                        }
                        technologies={[
                            { logo: reactLogo, name: "React JS" },
                            { logo: materialUIlogo, name: "Material UI" },
                            { logo: firebaseLogo, name: "Firebase" },
                            { logo: sassLogo, name: "SASS" },
                        ]}
                        demo={"https://www.therusticdude.com"}
                        code={""}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Project
                        image={micturbobg}
                        title={"Mic Turbo"}
                        description={
                            "A custom e-commerce site for a mechanic shop with payment processing capabilities."
                        }
                        technologies={[
                            { logo: reactLogo, name: "React JS" },
                            { logo: materialUIlogo, name: "Material UI" },
                            {
                                logo: "https://res.cloudinary.com/practicaldev/image/fetch/s--ITpGWFxn--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/2134/d92f50cd-7ad7-48ba-9970-7abecdeb2194.png",
                                name: "Commerce JS",
                            },
                            {
                                logo: "https://stripe.com/img/v3/home/twitter.png",
                                name: "Stripe JS",
                            },
                        ]}
                        demo={"https://micturbo.netlify.app"}
                        code={""}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Project
                        image={tracktradebg}
                        title={"Track Trade"}
                        description={
                            "A personal project. Social media for Foreign Exchange traders that allows users to visualize their performance using charts. "
                        }
                        technologies={[
                            { logo: reactLogo, name: "React JS" },
                            { logo: reduxLogo, name: "Redux" },
                            { logo: nodeLogo, name: "Node JS" },
                            { logo: mongoLogo, name: "MongoDB" },
                        ]}
                        demo={"https://www.tracktrade.co"}
                        code={""}
                    />
                </Grid>
            </Grid>
        </section>
    );
};

export default Work;
