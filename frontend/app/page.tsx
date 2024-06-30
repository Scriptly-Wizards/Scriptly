import React, {useRef} from "react";
import '../styles/globals.css';
import Form from "@/component/Form/Form";

const HomePage = () => {
  // const formRef = useRef<HTMLDivElement>(null);

  // const scrollToForm = () => {
  //   formRef.current?.scrollIntoView({ behavior: 'smooth' });
  // };

  return (
    <div>
      <div className="landing-page h-screen flex flex-col justify-center items-center text-center bg-gray-100">
        <h1 className="text-3xl font-bold">Welcome to Viral TikTok Script Generator</h1>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Cannot wait to get the viral TikTok script</button>
        <Form/>
      </div>
      {/* <div ref={formRef}>
        <Form />
      </div> */}
    </div>
  );
}

export default HomePage;