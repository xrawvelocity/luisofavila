/* eslint-disable jsx-a11y/anchor-has-content */
import { TextField, Alert, Collapse } from "@mui/material";
import emailjs, { init } from "emailjs-com";
import {
    useFormContext,
    Controller,
    FormProvider,
    useForm,
} from "react-hook-form";
import React, { useState, useRef } from "react";
import Flex from "./Flex";

const Contact = () => {
    const [success, setSuccess] = useState(false);
    const methods = useForm();
    const formRef = useRef();

    init(process.env.REACT_APP_EMAILJS_USER_ID);

    const sendEmail = (params) => {
        emailjs
            .sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                formRef.current
            )
            .then(
                async (result) => {
                    await setSuccess(true);
                    setTimeout(() => {
                        setSuccess(false);
                    }, 3000);
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    const ContactInput = ({ name, label, type = "text", ...rest }) => {
        const { control } = useFormContext();
        return (
            <Controller
                control={control}
                fullWidth
                name={name}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                    <TextField
                        // className={classes.input}
                        sx={{
                            height: "70px",

                            "& > label": {
                                fontSize: "16px !important",
                                color: "#fff",
                            },
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
                        onChange={onChange}
                        value={value}
                        {...rest}
                    />
                )}
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

            <FormProvider {...methods}>
                <form
                    class="contact-form"
                    onSubmit={methods.handleSubmit((data) => {
                        sendEmail({ ...data });
                    })}
                    ref={formRef}
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

                    <Collapse in={success}>
                        <Alert
                            severity="success"
                            sx={{
                                fontSize: "2rem",
                                alignItems: "center",
                                mt: "4rem",
                            }}
                        >
                            Email sent successfully!
                        </Alert>
                    </Collapse>
                </form>
            </FormProvider>
        </section>
    );
};

export default Contact;
