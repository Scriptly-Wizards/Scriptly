import "./Welcome.css";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  const scrollToForm = () => {
    navigate("/form");
  };

  return (
    <div className="landing-page">
      <img
        src={`${process.env.PUBLIC_URL}/img/elisabeth-pieringer-9paY25EHOBo-unsplash.gif`}
        alt="Welcome"
        className="welcome-image"
      />
      <h1 className="welcome-title">
        Welcome to Your <br />
        Viral TikTok Script Generator
      </h1>
      <p className="welcome-description">
        <span>Scriptly</span> is a recipe-style generator designed for TikTok
        for TikTok users. It turns user prompts into GenAI inputs to create
        shooting guides, scripts, suggestions, music, and samples.
      </p>
      <button onClick={scrollToForm} className="get-script-btn">
        GET MY SCRIPT
      </button>
    </div>
  );
};

export default Welcome;
