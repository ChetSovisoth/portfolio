import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import "./scratch.css";

class Scratch extends Component {
  render() {
    const theme = this.props.theme;
    const projectId = process.env.REACT_APP_SCRATCH_PROJECT_ID;
    console.log(process.env.REACT_APP_SCRATCH_PROJECT_ID);
    return (
      <div>
        <Header theme={theme} />

        <div className="contact-main">
          <div className="basic-contact">
            <Fade bottom duration={1000} distance="40px">
              <iframe
                src={`https://scratch.mit.edu/projects/${projectId}/embed`}
                allowtransparency="true"
                width="900"
                height="600"
                frameBorder="0"
                scrolling="no"
                allowFullScreen
                className="scratch-iframe"
              ></iframe>
              <div className="mobile-message">
                Please open on a laptop to play this game.
              </div>
            </Fade>
          </div>
        </div>

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Scratch;
