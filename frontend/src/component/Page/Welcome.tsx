import { useEffect, useRef, useState } from "react";
import Form from "../UI/Form/Form";
import "./Welcome.css";

const Welcome = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const [showForm, setShowForm] = useState(false);

  const scrollToForm = () => {
    setShowForm(true);
  };

  useEffect(() => {
    if (showForm && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showForm]);

  return (
    <div>
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
      <div style={{ marginBottom: "10rem" }}>
        {showForm && (
          <div ref={formRef}>
            <Form />
          </div>
        )}
      </div>
    </div>
  );
};

export default Welcome;
