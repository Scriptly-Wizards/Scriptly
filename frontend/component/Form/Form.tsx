"use client";
import React, { useState } from "react";
import { Typography, Paper, Button } from "@mui/material";
import { styled } from '@mui/system';

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

type Values = {
  Keywords: string;
  KeyMessages: string;
  VideoDuration: string;
  VideoType: string;
  VideoGenre: string;
  Purpose: string;
  Setting: string;
  ScriptFormat: string;
  Tone: string;
  VisualElements: string;
  AudioElements: string;
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
  const [values, setValues] = useState<Values>({
    Keywords: "",
    KeyMessages: "",
    VideoDuration: "",
    VideoType: "",
    VideoGenre: "",
    Purpose: "",
    Setting: "",
    ScriptFormat: "",
    Tone: "",
    VisualElements: "",
    AudioElements: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(values);
    // Add your submission logic here
  };

  return (
    <Container>
      <Title variant="h4">Tell us what you want?</Title>
      <FormContainer onSubmit={handleSubmit}>
        <CustomTextField changeHandler={handleChange} label="Keywords" name="Keywords" 
        placeholder="Core topics or phrases that should be prominently featured"/>
        <CustomTextField changeHandler={handleChange} label="Key Messages" name="KeyMessages" 
        placeholder="Core points or messages that need to be conveyed"
        />
        <CustomTextField changeHandler={handleChange} label="Video Duration" name="VideoDuration" 
        placeholder="Total length of the video (e.g., 30 seconds, 1 minutes)"/>
        <CustomDropDown
          label="Video Type"
          name="VideoType"
          changeHandler={handleChange}
          values={VideoTypeOptions}
          currentValue={values.VideoType}
        />
        <CustomDropDown
          label="Video Genre"
          name="VideoGenre"
          changeHandler={handleChange}
          values={VideoGenreOptions}
          currentValue={values.VideoGenre}
        />
        <CustomDropDown
          label="Purpose"
          name="Purpose"
          changeHandler={handleChange}
          values={PurposeOptions}
          currentValue={values.Purpose}
        />
        <CustomDropDown
          label="Tone and Style"
          name="Tone"
          changeHandler={handleChange}
          values={ToneOptions}
          currentValue={values.Tone}
        />
        <CustomDropDown
          label="Setting and Location"
          name="Setting"
          changeHandler={handleChange}
          values={SettingOptions}
          currentValue={values.Setting}
        />
        <CustomDropDown
          label="Script Format"
          name="ScriptFormat"
          changeHandler={handleChange}
          values={ScriptFormatOptions}
          currentValue={values.ScriptFormat}
        />
        <CustomTextField
          label="Visual Elements"
          name="VisualElements"
          changeHandler={handleChange}
          placeholder="Specific shots or angles (e.g., close-ups, wide shots, aerial shots)"
        />

        <CustomTextField changeHandler={handleChange} label="Audio Elements" name="AudioElements" 
        placeholder="Background music, sound effects, voice-over details."/>
        
        
        <SubmitButton type="submit" variant="contained">
          Submit
        </SubmitButton>
      </FormContainer>
    </Container>
  );
};

export default Form;
