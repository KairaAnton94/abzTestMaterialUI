import React, {FC} from "react";
import "./index.scss";
import {Box, RadioGroup} from "@mui/material";

interface IRadioInput{
    id: string,
    name: string,
    className: string,
    children?: React.ReactChild | React.ReactNode,
    onClick: ()=>void
}

const RadioInput:FC<IRadioInput> = ({children,id,name,className,onClick}) => {
  return (
    <Box component="div"
    //     className={`custom-radio ${className}`}
    >
      <RadioGroup
          //aria-labelledby="demo-radio-buttons-group-label"
          //defaultValue="female"
          name={name}
          id={`radio${id}`}
          // name={name}  type="radio"
      />

    </Box>
  );
};

export default RadioInput;