import React, { Component } from "react";
import "./Profile.css";
export class Profile extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="profile">
          <div className="pro-setting">
            <div className="pro-main-set" />
            <div className="pro-list-set">
              <div className="list-set" />
            </div>
          </div>
          <div className="profile-info">
            <div className="profile-cov-pic" />
            <div className="profile-contents" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Profile;
