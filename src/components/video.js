import React from "react";

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className="video">
    <video
      src={videoSrcURL}
      title={videoTitle}
      type="video/mp4"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      width="300px"
    />
  </div>
);
export default Video;
