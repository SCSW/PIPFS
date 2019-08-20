import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Profile_Info_Setting.css";

export class Profile_Info_Setting extends Component {
  render() {
    // const ProfileTest = (tittle, left_info, right_info) => {
    //   return (
    //     <React.Fragment>
    //       {tittle}
    //       {left_info}
    //       {right_info}
    //     </React.Fragment>
    //   );
    // };
    return (
      <React.Fragment>
        <div className="profile-info">
          <div className="pis-context">
            <h3 className="pis-tittle">
              {/* {ProfileTest("Personal Information")} */}
              Personal Information
            </h3>
            <h5 className="pish-more-info">
              Some info may be visible to other people using Google services.
              <Link to="/" className="learn-more">
                learn more
              </Link>
            </h5>
          </div>
          <div className="pis-list">
            <div className="pisl-left">Name</div>
            <div className="pisl-right" />
          </div>
          <div className="pis-list">
            <div className="pisl-left">Date of Birth</div>
            <div className="pisl-right" />
          </div>
          <div className="pis-list">
            <div className="pisl-left">Gender</div>
            <div className="pisl-right" />
          </div>
          <div className="pis-list">
            <div className="pisl-left">Password</div>
            <div className="pisl-right" />
          </div>
        </div>
        <div className="profile-info">
          <div className="pis-context">
            <h3 className="pis-tittle">
              {/* {ProfileTest("Personal Information")} */}
              Contact Information
            </h3>
          </div>
          <div className="pis-list">
            <div className="pisl-left">Email</div>
            <div className="pisl-right" />
          </div>
          <div className="pis-list">
            <div className="pisl-left">Date of Birth</div>
            <div className="pisl-right" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Profile_Info_Setting;
