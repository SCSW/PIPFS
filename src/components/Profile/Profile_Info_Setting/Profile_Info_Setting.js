import React, { Component } from "react";
import "./Profile_Info_Setting.css";

export class Profile_Info_Setting extends Component {
  render() {
    const ProfileTest = (title, name) => {
      return (
        <div className="profile-info">
          <div className="pis-tittle">{title}</div>
          <div className="pis-list">
            <div className="pisl-left">{name}</div>
            <div className="pisl-right" />
          </div>
        </div>
      );
    };
    return (
      <React.Fragment>
        <div>{ProfileTest("Personal Information")}</div>
        <div>{ProfileTest("sa")}</div>
      </React.Fragment>
      // <div className="profile-info">
      //   <div className="pis-context">
      //     <h3 className="pis-tittle">{ProfileTest("Personal Information")}</h3>
      //   </div>
      //   <div className="pis-list">
      //     <div className="pisl-left" />
      //     <div className="pisl-right" />
      //   </div>
      //   <div className="pis-list">
      //     <div className="pisl-left">Birthday</div>
      //     <div className="pisl-right" />
      //   </div>
      //   <div className="pis-list">
      //     <div className="pisl-left">Gender</div>
      //     <div className="pisl-right" />
      //   </div>
      //   <div className="pis-list">
      //     <div className="pisl-left">Password</div>
      //     <div className="pisl-right" />
      //   </div>
      // </div>
    );
  }
}

export default Profile_Info_Setting;
