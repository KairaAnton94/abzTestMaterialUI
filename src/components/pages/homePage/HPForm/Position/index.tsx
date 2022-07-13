import React, {memo} from "react";
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";

import {useGetPositionsQuery} from "../../../../../store/api/usersApi";
import Preloader from "../../../../Preloader";
import ErrorText from "../../../../ErrorText";

interface IPosition{
    setPosition: (id: string)=> void,

}

const Position = memo<IPosition>(({setPosition}) => {

  const {data, isLoading, error}:any = useGetPositionsQuery(null);
  const sxFormLabel = {
    mt:"43px",
    mb:"11px",
    color: "black",
    "&.Mui-focused":{
      color: "var(--black)",
    }
  };

  const sxFormControlLabel = {
    "&.MuiFormControlLabel-label":{
      fontWeight:"300!important"
    }
  };

  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label"
        sx={sxFormLabel}
      >Select your position</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
      >
        {isLoading ? <Preloader/>
          : error ? <ErrorText error={error}/>
            : data.positions.map(({id, name}:{id: string, name: string}) =>
              <FormControlLabel
                sx={sxFormControlLabel}
                key={id}
                value={name}
                onClick={() => setPosition(id)}
                control={<Radio />}
                label={name}
              />
            )
        }
      </RadioGroup>
    </FormControl>
  );
});

export default Position;