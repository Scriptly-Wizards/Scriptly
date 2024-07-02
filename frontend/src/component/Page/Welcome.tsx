import React, { useEffect, useRef, useState } from 'react'
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
      <div className="landing-page h-screen flex flex-col justify-center items-center text-center bg-gray-100">
        <h1 className="text-3xl font-bold">Welcome to Viral TikTok Script Generator</h1>
        <button onClick={scrollToForm} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Cannot wait to get the viral TikTok script</button>
      </div>
      <div style={{ marginBottom: '10rem' }}>
        {showForm && (
          <div ref={formRef}>
            <Form />
          </div>
        )}
      </div>
    </div>
  )
}

export default Welcome
