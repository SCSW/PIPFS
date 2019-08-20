import React, { Component } from "react";
import "./Profile_List_Setting.css";

export class Profile_List_Setting extends Component {
  render() {
    return (
      <div className="pro-list-setting">
        <div className="list-setting-general">
          <div className="lsg-tittle">Account Setting</div>
          <div className="lsg-list">
            <div className="lsgsl">Personal Information</div>
            <div className="lsgsl">Contact Info</div>
            <div className="lsgsl">Data & personalization</div>
          </div>
        </div>
        <div className="list-security">
          <div className="ls-tittle">Security & Login</div>
          <div className="ls-list">
            <div className="lssl">Security Checkup</div>
            <div className="lssl">Account Link</div>
            <div className="lssl">Two Factors</div>
          </div>
        </div>
        <div className="list-payment">
          <div className="lp-tittle">Payment & Billing</div>
          <div className="lp-list">
            <div className="lpsl">Payment methods</div>
            <div className="lpsl">Payment History</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile_List_Setting;
