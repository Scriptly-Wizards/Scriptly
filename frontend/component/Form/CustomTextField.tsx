import React from "react";
import { TextField } from "@mui/material";

type CustomTextFieldProps = {
    label: string;
    name: string;
    changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}

const CustomTextField: React.FC<CustomTextFieldProps> = (props) => {
    return (
        <TextField
            label={props.label}
            name={props.name}
            onChange={props.changeHandler}
            placeholder={props.placeholder}

            variant="outlined"
            size="small"
            margin="dense"
        />
    );
}

export default CustomTextField;
