/* eslint-disable jsx-a11y/anchor-has-content */
import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { Component } from "react";
import Flex from "./Flex";

const Contact = () => {
    // const useStyles = makeStyles(() => ({
    //     input: { color: "#fff" },
    // }));
    // const classes = useStyles();

    const ContactInput = ({ name, label, type = "text" }) => {
        return (
            <TextField
                // className={classes.input}
                sx={{
                    height: "70px",

                    "& > label": { fontSize: "16px !important", color: "#fff" },
                    "& > div": {
                        "&:hover": {
                            "& > fieldset": {
                                borderColor: "#aaa !important",
                            },
                        },
                    },
                    "& > div > input": {
                        fontSize: "18px !important",
                        color: "#fff",
                    },
                    "& > div > fieldset": {
                        borderColor: "#fff !important",
                    },
                }}
                name={name}
                label={label}
                type={type}
                margin="dense"
                variant="outlined"
                required
            />
        );
    };
    return (
        <section class="contact">
            <div id="contact"></div>
            <div class="contact-text">
                <h1 class="contact-text__title">Contact</h1>
                <p class="contact-text__paragraph">
                    If you'd like to start a new project or have any further
                    question please feel free to reach out to me.
                </p>
            </div>

            <form
                class="contact-form"
                action="https://formspree.io/xjvojgwr"
                method="POST"
            >
                <Flex
                    sx={{
                        flexDirection: "column",
                        padding: "3rem 6rem",
                        borderRadius: "0px",
                        // backgroundColor: "#f7f7f7",
                    }}
                >
                    <ContactInput name="name" label="Name" />
                    <ContactInput name="email" label="Email" type="email" />
                    <ContactInput
                        name="message"
                        label="Message"
                        type="textarea"
                    />
                </Flex>
                <button class="contact-form-button" type="submit">
                    Send email
                </button>
            </form>
        </section>
    );
};

export default Contact;
