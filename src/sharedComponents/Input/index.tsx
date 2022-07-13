import React, {memo} from "react";
import "./index.scss";
import {TextField} from "@mui/material";

interface IInput{
    label: string,
    helpertext?: string,
    type: string,
    value: string,
    valid: string,
    onChange: (c: string)=>void,
    className: string
}

const Input = memo<IInput>(({label, helpertext, type, value, valid,onChange,className}) => {

  const sxTextField = {
    width: "100%",
    mt:"30px",
    "& .Mui-focused":{
      color:"rgba(0,0,0,.6)!important"
    },
    "& .Mui-focused .MuiOutlinedInput-notchedOutline":{
      border:"1px solid rgb(192, 192, 192)!important"
    }
  };

  return (
    <TextField
      sx={sxTextField}
      helperText={valid?valid:helpertext}
      error={!!valid}
      id={label}
      variant="outlined"
      label={label}
      value={value}
      type={type}
      onChange={(e)=>onChange(e.target.value)}
      className="global-input__input"
    />

  );
});

export default Input;

