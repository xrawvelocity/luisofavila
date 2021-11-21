import React, { Component, Fragment } from "react";

export default class Home extends Component {
    render() {
        return (
            <div className="landing-heading">
                <div className="landing-heading-top">
                    <h2 className="landing-heading-top-title">
                        Hello! My name is Luis Avila and I'm an actor based in
                        Miami, FL
                    </h2>
                    <p className="landing-heading-top-subtitle">
                        Thank you for visiting my portfolio, below you will find
                        my details, photos, and videos.
                    </p>
                </div>
                <a href="#contact" className="landing-heading-button">
                    Contact me
                </a>
                <div class="scroll-down"></div>
            </div>
        );
    }
}
