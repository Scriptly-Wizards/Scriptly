import React, { useEffect, useState } from "react";
import { Typography, Paper, Button } from "@mui/material";
import { styled } from "@mui/system";
import CustomTextField from "./CustomTextField";
import CustomDropDown from "./CustomDropDown";
import { sendMessageReq } from "../../../store/message/messageService";
import { useAppDispatch } from "../../../hooks";
import { useNavigate } from "react-router-dom";
import { TagsInput } from "react-tag-input-component";

const Container = styled(Paper)({
  backgroundColor: "Black",
  padding: "30px",
  textAlign: "center",
  width: "100%",
  maxWidth: "800px",
  margin: "auto",
  marginTop: "1rem",
  border: "2px solid #2af0ea",
  borderRadius: "1rem",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  animation: "fadeIn 1s ease, borderFadeIn 2s ease",
  color: "white",
});

const FormContainer = styled("form")({
  display: "flex",
  flexDirection: "column",
  // alignItems: "center",
  animation: "fadeInUp 1s ease",
});

const Title = styled(Typography)({
  margin: "0px 0 20px 0",
  color: "#2af0ea",
  animation: "slideInFromLeft 1s ease",
});

const SubmitButton = styled(Button)({
  margin: "20px auto",
  width: "20%",
  backgroundColor: "#2af0ea",
  color: "white",
  "&:hover": {
    backgroundColor: "#ee1d52",
  },
  animation: "slideInFromRight 1s ease",
});

/** sendMessageReq req body */
type Values = {
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
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [tag, setTag] = useState<string[]>([]);
  const [values, setValues] = useState<Values>({
    videoDuration: "",
    videoType: "",
    purpose: "",
    toneAndStyle: "",
    scriptFormat: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const requestData = {
      keywords: tag,
      video_duration: values.videoDuration,
      video_type: values.videoType,
      purpose: values.purpose,
      tone_and_style: values.toneAndStyle,
      script_format: values.scriptFormat,
    };
    console.log(requestData);
    // setIsLoading(true);
    // await dispatch(sendMessageReq(requestData));
    // setIsSubmitted(true);
  };

  useEffect(() => {
    if (isSubmitted) {
      setIsLoading(false);
    }
  }, [isSubmitted]);

  const handleNextPage = () => {
    navigate("/preview");
  };

  return (
    <Container className="container">
      <Title variant="h4" className="">
        🧙🏿‍♂️🧙🏿‍♂️Tell us what you want?🪄🧙🏻‍♀️🧙🏻‍♀️
      </Title>
      <FormContainer onSubmit={handleSubmit}>
        <TagsInput
          value={tag}
          onChange={setTag}
          name="keywords"
          placeHolder="Enter keywords, separated by pressing Return"
        />
        <CustomTextField
          changeHandler={handleChange}
          label="Video Duration"
          name="videoDuration"
          placeholder="Total length of the video (e.g., 30 seconds, 1 minutes)"
        />
        <CustomDropDown
          label="Video Type"
          name="videoType"
          changeHandler={handleChange}
          values={VideoTypeOptions}
          currentValue={values.videoType}
        />
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
        <CustomDropDown
          label="Script Format"
          name="scriptFormat"
          changeHandler={handleChange}
          values={ScriptFormatOptions}
          currentValue={values.scriptFormat}
        />
        <SubmitButton type="submit" variant="contained">
          Submit
        </SubmitButton>
      </FormContainer>
      <button
        onClick={handleNextPage}
        className={`${
          !isSubmitted
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-700"
        } text-white font-bold py-2 px-4 rounded flex items-center`}
        disabled={!isSubmitted}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin h-5 w-5 mr-3 text-white"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Processing...
          </>
        ) : (
          "Preview"
        )}
      </button>
    </Container>
  );
};

export default Form;
