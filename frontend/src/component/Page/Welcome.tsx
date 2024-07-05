import React, { useEffect, useRef, useState } from 'react';
import Form from '../UI/Form/Form';

const Welcome = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const [showForm, setShowForm] = useState(false);

  const scrollToForm = () => {
    setShowForm(true);
  };

  useEffect(() => {
    if (showForm && formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showForm]);

  return (
    <div>
      <div className="landing-page h-screen flex flex-col justify-center items-center text-center relative">
      <img 
          src={`${process.env.PUBLIC_URL}/img/elisabeth-pieringer-9paY25EHOBo-unsplash.gif`} 
          alt="Welcome"
          className="w-auto h-auto opacity-20 object-cover absolute top-0"
        />
        <h1 className="font-bold bg-black bg-opacity-100 p-4 rounded z-10">Welcome to Your <br/>Viral TikTok Script Generator</h1>
        
        <button onClick={scrollToForm} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded z-10">GET MY SCRIPT</button>
        
      </div>
      <div style={{ marginBottom: '10rem' }}>
        {showForm && (
          <div ref={formRef}>
            <Form />
          </div>
        )}
      </div>
    </div>
  );
}

export default Welcome;
