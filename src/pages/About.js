import React, { Component } from "react";
import "./About.css";
import thumbnail_image from "../assets/thumbnail_image.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={thumbnail_image}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Marlon Taylor</div>
            <div className="brief_description">
              Information Technology student at Kennesaw State University. Marlon likes
              spending time with family and friends.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
