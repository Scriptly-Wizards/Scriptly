import React from "react";
import { TextField as MuiTextField } from "@mui/material";
import { styled } from '@mui/system';

const StyledTextField = styled(MuiTextField)({
    '& .MuiInputBase-input': {
        color: 'var(--tiktok-white)',
    },
    '& .MuiOutlinedInput-notchedOutline': {
        // borderColor: 'var(--tiktok-pink)',
        borderRadius: '0.9rem',
        transition: 'border-color 0.3s ease',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
        border: 'solid var(--tiktok-blue) 0.2rem',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        border: 'solid var(--tiktok-blue) 0.2rem',
    },
    '& .MuiFormLabel-root': {
        color: 'var(--tiktok-white)', // Make the label white
        transition: 'color 0.3s ease',
    },
    '& .MuiFormLabel-root.Mui-focused': {
        color: 'var(--tiktok-white)', // Ensure the label stays white when focused
    },
    '& .MuiMenuItem-root': {
        backgroundColor: 'var(--tiktok-gray)',
        color: 'var(--tiktok-white)',
        transition: 'background-color 0.3s ease, color 0.3s ease',
    },
    '& .MuiMenuItem-root:hover': {
        backgroundColor: 'var(--tiktok-blue)',
        color: 'var(--tiktok-black)',
    },
    color: 'var(--tiktok-white)',
    backgroundColor: '#397684',
    borderRadius: '0.9rem',
    // padding: '0.2rem',
    margin: '0.5rem 0',
    transition: 'background-color 0.3s ease, border-color 0.3s ease',
    animation: 'fadeIn 1s ease, bounce 0.5s ease',
    '& .MuiInputBase-root': {
        animation: 'pulse 1s infinite',
    }
});

type CustomTextFieldProps = {
    label: string;
    name: string;
    changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    className?: string; // Make className optional
}

const CustomTextField: React.FC<CustomTextFieldProps> = (props) => {
    const { label, name, changeHandler, placeholder, className } = props;

    return (
        <StyledTextField
            label={label}
            name={name}
            onChange={changeHandler}
            placeholder={placeholder}
            variant="outlined"
            size="small"
            margin="dense"
            className={className} // Use className prop here
        />
    );
}

export default CustomTextField;
