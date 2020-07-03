import React from "react";
import EBSimage from "../../images/EBS_image.jpg";

const Content = () => {
  return (
    <div className="content">
      <div className="EBS">
        <div className="image">
          <img src={EBSimage} alt="EBS" className="image_ebs" />
        </div>
      </div>
      <div className="information">
        <div className="text">
          <span className="name">ebsintegrator</span>
        </div>
        <div className="numbers">
          <span>
            <b>48</b> posts
          </span>
          <span>
            <b>113</b> followers
          </span>
          <span>
            {" "}
            <b>130</b> following
          </span>
        </div>
        <div>
          <span>
            Followed by <b>neluarseni,kiselev_grigor, vasile.diaconuu +16</b>{" "}
            more
          </span>
        </div>
      </div>
    </div>
  );
};

export default Content;
