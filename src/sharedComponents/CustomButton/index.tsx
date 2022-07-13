import React, {FC} from "react";
import "./index.scss";
import {Button} from "@mui/material";

interface PButton {
    className?:string,
    classes?:any,
    disabled?:boolean,
    onClick?:()=>void,
    children?: React.ReactChild | React.ReactNode
}


const CustomButton: FC<PButton> =
    ({
      classes,
      //disabled = true,
      onClick,
      children,
    }) => {
      return (
        <Button
          sx={[{
            backgroundColor:"var(--yellow)",
            boxShadow:"none",
            borderRadius:"80px",
            color: "var(--black)",
            textTransform:"inherit",
            "&:hover":{
              backgroundColor:"var(--yellow)",
              boxShadow:"none"
            }},
          classes
          ]}
          onClick={onClick}
        >
          {children}
        </Button>
      );
    };

export default CustomButton;
