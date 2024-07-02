import React, { useEffect, useState } from "react";
import { Typography, Paper, Button } from "@mui/material";
import { styled } from '@mui/system';
import { useDispatch } from "react-redux";
import CustomTextField from "./CustomTextField";
import CustomDropDown from "./CustomDropDown";

const Container = styled(Paper)({
    backgroundColor: "#ffffff",
    padding: 30,
    textAlign: "center",
    width: "80%", // Adjust width as needed
    maxWidth: 600,
    margin: "auto",
  });
  
  const FormContainer = styled("form")({
    display: "flex",
    flexDirection: "column",
  });
  
  const Title = styled(Typography)({
    margin: "0px 0 20px 0",
  });
  
  const SubmitButton = styled(Button)({
    margin: "20px 0",
  });

// type Values = {
//   Keywords: string;
//   KeyMessages: string;
//   VideoDuration: string;
//   VideoType: string;
//   VideoGenre: string;
//   Purpose: string;
//   Setting: string;
//   ScriptFormat: string;
//   Tone: string;
//   VisualElements: string;
//   AudioElements: string;
// };

/** req 格式 */
type Values = {
  keywords: string;
  videoDuration: string;
  videoType: string;
  purpose: string;
  toneAndStyle: string;
  scriptFormat: string;
};

const VideoTypeOptions = [
  { value: "People", label: "People" },
  { value: "Objects", label: "Objects" },
  { value: "Animated", label: "Animated" },
];

const VideoGenreOptions = [
  { value: "Documentary", label: "Documentary" },
  { value: "Educational", label: "Educational" },
  { value: "Promotional", label: "Promotional" },
  { value: "Testimonial", label: "Testimonial" },
  { value: "Tutorial", label: "Tutorial" },
  { value: "Entertainment", label: "Entertainment" },
];

const PurposeOptions = [
  { value: "Documentary", label: "Documentary" },
  { value: "Educational", label: "Educational" },
  { value: "Promotional", label: "Promotional" },
  { value: "Testimonial", label: "Testimonial" },
  { value: "Tutorial", label: "Tutorial" },
  { value: "Entertainment", label: "Entertainment" },
];

const SettingOptions = [
  { value: "Indoor", label: "Indoor" },
  { value: "Outdoor", label: "Outdoor" },
  { value: "Office", label: "Office" },
  { value: "Home", label: "Home" },
];

const ScriptFormatOptions = [
  { value: "Voice-over script", label: "Voice-over script" },
  { value: "Dialogue", label: "Dialogue" },
  { value: "Monologue", label: "Monologue" },
  { value: "Interview", label: "Interview" },
];

const ToneOptions = [
  { value: "Formal", label: "Formal" },
  { value: "Informal", label: "Informal" },
  { value: "Humorous", label: "Humorous" },
  { value: "Serious", label: "Serious" },
  { value: "Inspirational", label: "Inspirational" },
];

const Form: React.FC = () => {
  // const dispatch = useDispatch();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [values, setValues] = useState<Values>({
    keywords: "",
    videoDuration: "",
    videoType: "",
    purpose: "",
    toneAndStyle: "",
    scriptFormat: ""
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(values);
    // Add your submission logic here
    const requestData = {
      keywords: values.keywords.split(',').map(keyword => keyword.trim()),
      video_duration: values.videoDuration,
      video_type: values.videoType,
      purpose: values.purpose,
      tone_and_style: values.toneAndStyle,
      script_format: values.scriptFormat,
    };

    console.log(requestData);

    // const response = await fetch('http://127.0.0.1:8000/api/v1/assistant/', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(requestData),
    // });

    // const result = await response.json();
    // console.log(result.data);
    // dispatch(setMessage(result.data as CustomMessage));
    // setIsSubmitted(true);
  };

  // useEffect(() => {
  //   if (isSubmitted) {
  //     router.push('/preview');
  //   }
  // }, [isSubmitted, router]);

  return (
    <Container>
      <Title variant="h4">Tell us what you want?</Title>
      <FormContainer onSubmit={handleSubmit}>
        <CustomTextField changeHandler={handleChange} label="Keywords" name="keywords" 
        placeholder="Core topics or phrases that should be prominently featured"/>
        {/* <CustomTextField changeHandler={handleChange} label="Key Messages" name="KeyMessages" 
        placeholder="Core points or messages that need to be conveyed"
        /> */}
        <CustomTextField changeHandler={handleChange} label="Video Duration" name="videoDuration" 
        placeholder="Total length of the video (e.g., 30 seconds, 1 minutes)"/>
        <CustomDropDown
          label="Video Type"
          name="videoType"
          changeHandler={handleChange}
          values={VideoTypeOptions}
          currentValue={values.videoType}
        />
        {/* <CustomDropDown
          label="Video Genre"
          name="VideoGenre"
          changeHandler={handleChange}
          values={VideoGenreOptions}
          currentValue={values.VideoGenre}
        /> */}
        <CustomDropDown
          label="Purpose"
          name="purpose"
          changeHandler={handleChange}
          values={PurposeOptions}
          currentValue={values.purpose}
        />
        <CustomDropDown
          label="Tone and Style"
          name="toneAndStyle"
          changeHandler={handleChange}
          values={ToneOptions}
          currentValue={values.toneAndStyle}
        />
        {/* <CustomDropDown
          label="Setting and Location"
          name="Setting"
          changeHandler={handleChange}
          values={SettingOptions}
          currentValue={values.Setting}
        /> */}
        <CustomDropDown
          label="Script Format"
          name="scriptFormat"
          changeHandler={handleChange}
          values={ScriptFormatOptions}
          currentValue={values.scriptFormat}
        />
        {/* <CustomTextField
          label="Visual Elements"
          name="VisualElements"
          changeHandler={handleChange}
          placeholder="Specific shots or angles (e.g., close-ups, wide shots, aerial shots)"
        /> */}

        {/* <CustomTextField changeHandler={handleChange} label="Audio Elements" name="AudioElements" 
        placeholder="Background music, sound effects, voice-over details."/>
         */}
        
        <SubmitButton type="submit" variant="contained">
          Submit
        </SubmitButton>
      </FormContainer>
    </Container>
  );
};

export default Form;