import React from "react";
import "./Content.css";

const Content = () => {
  return (
    <React.Fragment>
      <div className="content">
        <div className="scc-box">
          <div className="sccb-pe">
            <div className="sccbe">
              <i class="fas fa-ellipsis-h"></i>
            </div>
            <div className="sccb1">
              <div className="sccbp" />
              <div className="sccbpn">
                <h5 className="sccbp1">User name</h5>
                <h5 className="sccbp2">2years</h5>
              </div>
            </div>
          </div>
          <div className="sccb-image">
            <i class="fas fa-exclamation-circle"></i>
          </div>
          <div className="sccb-content">
            hiBesides the characteristics of every contract type – individual
            contents, contract partners, terms languages and provisions or
            conditions, contract and approval processing requirements – there
            are additional specific aspects for different contract types.
            Combionic’s vision and strategy is targeting a wide range of
            industries, use cases and domain-specific requirements with a great
            set of adaptable capabilities in content-, workflow-, analytics-,
            reporting-, and risk life cycle management. SMARTCONTRACT provides
            capabilities to support these specific needs very flexible. Our
            technology made it also easy to configure or customize the solution
            with custom specific features.
          </div>
          <center>
            <div className="sccb-lcps">
              <i class="far fa-heart"></i>
              <i class="far fa-comment-alt"></i>
              <div className="sccbpb-u">
                <h6 className="sccbpu">0.99 %</h6>
                <i class="fas fa-arrow-up"></i>
              </div>
              <div className="sccbpb-d">
                <h6 className="sccbpd">99.99 %</h6>
                <i class="fas fa-arrow-down"></i>
              </div>
              <i class="fas fa-share"></i>
            </div>
          </center>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Content;
