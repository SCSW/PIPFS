import React, { Component } from "react";
import Header from "../Header/Header";
import Profile_List_Setting from "./Profile_List_Setting/Profile_List_Setting";
import Profile_Info_Setting from "./Profile_Info_Setting/Profile_Info_Setting";
import "./Profile.css";
export class Profile extends Component {
  render() {
    // const ProfileTest = title => {
    //   return (
    //     <div className="profile-info">
    //       <div className="pis-context">
    //         <h3 className="pis-tittle">{title}</h3>
    //       </div>
    //     </div>
    //   );
    // };

    return (
      <React.Fragment>
        <div className="divided-profile">
          <Header />
          <div className="profile">
            <Profile_List_Setting />
            <div className="main-pis">
              <div className="pis-header">
                <h2>Account Setting</h2>
                <h5 className="pish-more-info">
                  Basic info, like your name and photo, that you use on Google
                  services
                </h5>
              </div>
              <Profile_Info_Setting />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Profile;
