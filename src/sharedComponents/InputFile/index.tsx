import React, {FC} from "react";
import {Box, Input} from "@mui/material";

import {sxButton, sxInput, sxInputFile, sxName} from "./styles";

interface IInputFile{
  onChange: (ch: any | null)=>void,
  className?: string,
  classes?:any,
  file: any
}


const InputFile:FC<IInputFile> = ({ onChange,classes, className, file}) => {

  return<>
    <Box
      component = "div"
      sx={[sxInputFile,classes]}
    >
      <Input
        sx = {sxInput}
        type="file"
        onChange={(e: any) => onChange(e.target.files[0])}/>
      <Box component="div"
        sx={sxButton}
        className="input-file__button">Upload</Box>
      <Box component="div"
        sx={sxName}
        className="input-file__name">
        {
          file
            ? file.name.length > 20 ? `${file.name.slice(0, 20)}...` : file.name
            : " Upload your photo"
        }
      </Box>
    </Box>
  </>;
};

export default InputFile;