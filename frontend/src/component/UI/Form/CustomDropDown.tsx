import React from 'react';
import { MenuItem, TextField as MuiTextField } from "@mui/material";
import { styled } from '@mui/system';
import './customDropdown.module.css'; // Ensure to import the CSS file

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
        backgroundColor: 'var(--tiktok-white)',
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

type CustomDropDownProps = {
    label: string;
    name: string;
    changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
    values: { value: string; label: string; }[];
    currentValue: string;
    className?: string; // Make className optional
}

const CustomDropDown: React.FC<CustomDropDownProps> = (props) => {
    const { label, name, changeHandler, values, currentValue, className } = props;

    return (
        <StyledTextField
            select
            label={label}
            name={name}
            onChange={changeHandler}
            value={currentValue}
            variant="outlined"
            size="small"
            margin="dense"
            className={`custom-dropdown ${className}`} // Use className prop here
        >
            {values.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </StyledTextField>
    );
}

export default CustomDropDown;
