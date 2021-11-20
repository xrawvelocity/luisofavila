import React, { Component, Fragment } from "react";

export default class Home extends Component {
    render() {
        return (
            <Fragment>
                <span className="star star-1"></span>
                <span className="star star-2"></span>
                <span className="star star-3"></span>
                <span className="star star-4"></span>

                <div className="shooting-star-container">
                    <span className="shooting-star"></span>
                    <span className="shooting-star"></span>
                    <span className="shooting-star"></span>
                    <span className="shooting-star"></span>
                </div>

                <div className="landing-heading">
                    <div className="landing-heading-top">
                        <h2 className="landing-heading-top-title">
                            Hi! I'm Victor, a freelance full-stack web
                            developer.
                        </h2>
                        <p className="landing-heading-top-subtitle">
                            I craft creative and result-oriented websites for
                            forward-thinking brands, like yours.
                        </p>
                    </div>
                    <a href="#contact" className="landing-heading-button">
                        Get In Touch
                    </a>
                    <div class="scroll-down"></div>
                </div>
            </Fragment>
        );
    }
}
