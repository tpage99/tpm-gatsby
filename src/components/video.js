import React from "react";

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className="video">
    <video
      autoPlay
      loop
      src={videoSrcURL}
      title={videoTitle}
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
      width="300px"
    />
  </div>
);

export default Video;
