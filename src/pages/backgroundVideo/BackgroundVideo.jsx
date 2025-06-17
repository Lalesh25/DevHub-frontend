import React from "react";
import "./BackgroundVideo.css"; // Import CSS for styling
import bannerVideo from "./banner.mp4"
import Video1 from "./vid1.mp4"
const BackgroundVideo = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted  playsInline  >
        <source src={Video1} type="video/mp4" style={{ width: '800px' }} />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        {/* <h1>Welcome to My Website</h1> */}
        {/* <p>This is a background video example in React.</p> */}
      </div>
    </div>
  );
};

export default BackgroundVideo;
