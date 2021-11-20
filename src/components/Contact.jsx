/* eslint-disable jsx-a11y/anchor-has-content */
import { TextField } from "@mui/material";
import React, { Component } from "react";

export default class Contact extends Component {
    render() {
        return (
            <section class="contact">
                <div id="contact"></div>
                <div class="contact-text">
                    <h1 class="contact-text__title">
                        Let's build something great together.
                    </h1>
                    <p class="contact-text__paragraph">
                        If you'd like to start a new project, need help with an
                        existing project or have any other question, please feel
                        free to reach out to me.
                    </p>
                </div>

                <form
                    class="contact-form"
                    action="https://formspree.io/xjvojgwr"
                    method="POST"
                >
                    <TextField
                        sx={{
                            height: "70px",
                            "& > label": { fontSize: "16px !important" },
                            "& > div > input": { fontSize: "18px !important" },
                        }}
                        name="name"
                        type="text"
                        margin="dense"
                        label="Name"
                        variant="outlined"
                        required
                    />
                    <TextField
                        sx={{
                            height: "70px",
                            "& > label": { fontSize: "16px !important" },
                            "& > div > input": { fontSize: "18px !important" },
                        }}
                        name="email"
                        type="email"
                        margin="dense"
                        label="Email"
                        variant="outlined"
                        required
                    />
                    <TextField
                        sx={{
                            height: "70px",
                            "& > label": { fontSize: "16px !important" },
                            "& > div > input": { fontSize: "18px !important" },
                        }}
                        name="message"
                        type="textarea"
                        margin="dense"
                        label="Message"
                        variant="outlined"
                        required
                    />
                    <button class="contact-form-button" type="submit">
                        Send email
                    </button>
                </form>
            </section>
        );
    }
}
