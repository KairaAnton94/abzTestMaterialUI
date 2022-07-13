import React, {FC} from "react";
import {Typography} from "@mui/material";

interface IErrorText {
  error?: any,
  text?: string
}

const ErrorText:FC<IErrorText> = ({error, text}) => {
  return (<>
    {error && <Typography
      component="p"
      sx={{color: "var(--error)",}}>{error.data.message}</Typography>}
    {text && <Typography
      component="p"
      sx={{color: "var(--error)", textAlign: "center",margin:"10px 0"}}
    >{text}</Typography>}
  </>);
};

export default ErrorText;