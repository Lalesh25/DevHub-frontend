import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import Testimonials from "../../components/testimonials/Testimonials";
import BackgroundVideo from "../backgroundVideo/BackgroundVideo";

const Home = () => {
  const navigate = useNavigate();
  return (

    <div>
      <BackgroundVideo/>

      <div className="home">
        <div className="home-content">
          <h1>Welcome to our DevHub Platform</h1>
          <p>Learn, Grow, Excel</p>
          <button onClick={() => navigate("/courses")} className="common-btn">
            Get Started
          </button>
        </div>
        <h1 className="test">TESTIMONIALS</h1>
      </div>
      <Testimonials />
    </div>
  );
};

export default Home;
