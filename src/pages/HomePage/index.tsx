import React, {FC, useEffect, useRef} from "react";

import HPTitle from "../../components/pages/homePage/HPTitle";
import HPUsers from "../../components/pages/homePage/HPUsers";
import HPForm from "../../components/pages/homePage/HPForm";
import {setSignUpBlock, setUsersBlock} from "../../store/reducers/homeReducer";
import {useTypedDispatch} from "../../helpers/hooks/useTypedRedux";

const HomePage:FC = () => {
  const users = useRef<HTMLElement | null>(null);
  const signUp = useRef<HTMLElement | null>(null);
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(setUsersBlock(users.current));
    dispatch(setSignUpBlock(signUp.current));
  }, []);

  return (
    <main>
      <HPTitle/>
      <HPUsers ref={users}/>
      <HPForm ref={signUp}/>
    </main>
  );
};

export default HomePage;