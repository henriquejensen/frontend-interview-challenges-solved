import React, { Component } from "react";
import ReactModal from "react-modal";
import Button from "../../src/components/button";

import "./about.css";

export default class About extends Component {
  state = {
    showModal: false
  };

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleOpenModal}>About</Button>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="About project modal"
        >
          <span class="close" onClick={this.handleCloseModal} >&times;</span>
          <div>
            <h1>Javascript Test</h1>
            <p>Author: Henrique Jensen</p>
            <h2>Introduction</h2>
            <p>
              The goal of this program is to draw a circle inside a
              paralellogram with 3 points that you choose.
            </p>
            <h2>Program flow</h2>
            <p>
              You need to click in 3 differents points of the black box inside
              the page. After it the program will draw a paralellogram and a
              circle with this 3 given points.
            </p>
            <h3>Options</h3>
            <p>
              After you select the 3 points you can select each one and move around to adjust them.
            </p>
            <p>
              You can reset the screen clicking on Reset button.
            </p>
            <p>
              On the left of the black box you can see the coordinates of
              each point choosed and the area of the paralellogram and the circle.
            </p>
          </div>
        </ReactModal>
      </div>
    );
  }
}
