import React, {FC} from "react";
import {Typography} from "@mui/material";
import "./index.scss";

import doScroll from "../../../../helpers/functions/doScroll";
import {useTypedSelector} from "../../../../helpers/hooks/useTypedRedux";
import CustomButton from "../../../../sharedComponents/CustomButton";

const HPTitle:FC = () => {
  const {signUpBlock} = useTypedSelector(state => state.homeReducer);

  const toSignUp = () => doScroll(signUpBlock, 2000);

  return (
    <section className="hp-title">
      <div className="hp-title__bg"> </div>
      <div className="hp-title__container _container">
        <Typography
          variant="h4"
          component="h4"
          sx={{
            textAlign: "center",
              mb: "21px"
          }}
            className="hp-title__h1">
                    Test assignment for front-end developer
        </Typography>
        <Typography
          component="p"
          sx={{
              textAlign: "center",
              mb: "32px"
          }}
        >
                    What defines a good front-end developer is one that has
                    skilled knowledge of HTML, CSS, JS with a vast understanding
                    of User design thinking as they'll be building web interfaces
                    with accessibility in mind. They should also be excited to learn,
                    as the world of Front-End Development keeps evolving.
        </Typography>
        <CustomButton
            classes={{
                minWidth:"100px"
            }}
          onClick={toSignUp}
        >
                    Sign up
        </CustomButton>
      </div>
    </section>
  );
};

export default HPTitle;