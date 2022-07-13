import React, {useEffect, useState, forwardRef} from "react";
import {Box, Container, FormControl} from "@mui/material";

import {useTypedDispatch, useTypedSelector} from "../../../../helpers/hooks/useTypedRedux";
import Input from "../../../../sharedComponents/Input";
import InputFile from "../../../../sharedComponents/InputFile";
import {useCreateUserMutation, useGetTokenQuery} from "../../../../store/api/usersApi";
import ErrorText from "../../../ErrorText";
import {setDisabledUsersButton, setPages} from "../../../../store/reducers/homeReducer";
import doScroll from "../../../../helpers/functions/doScroll";
import Preloader from "../../../Preloader";
import CustomButton from "../../../../sharedComponents/CustomButton";

import Position from "./Position";


const HPForm = forwardRef<HTMLElement>((props, ref) => {
  const dispatch = useTypedDispatch();
  const {usersBlock} = useTypedSelector(state => state.homeReducer);
  //работа с апи
  const {data: tokenData}:any = useGetTokenQuery(null);
  const [createUser, {data, isLoading, error}]:any = useCreateUserMutation();
  //привязка данных
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [position, setPosition] = useState<string>("");
  const [file, setFile] = useState<any>(null);



  //кнопочка(^^)
  const [disabled, setDisabled] = useState<boolean>(true);

  //validation
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<{name: string, email: string, phone: string, position: string, file: string}>({
    name: "",
    email: "",
    phone: "",
    position: "",
    file: ""
  });

  //ф-я файла
  const inputFile = (inputFile: any) => {
    if (inputFile) {
      setFile(inputFile);
    } else {
      setFile(null);
    }
  };
  //ф-я валидации
  const validation = () => {
    const errors = {
      name: "",
      email: "",
      phone: "",
      position: "",
      file: ""
    };
      /* eslint-disable */
    const regexEmail = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
      /* eslint-enable */
    const regexPhone = /^[\+]{0,1}380([0-9]{9})$/i;

    if (!name) {
      errors.name = "Cannot be blank";
    } else if (name.length < 2 || name.length > 60) {
      errors.name = "Username should contain 2-60 characters";
    }

    if (!email) {
      errors.email = "Cannot be blank";
    } else if (!regexEmail.test(email)) {
      errors.email = "User email, must be a valid email according to RFC2822";
    }

    if (!phone) {
      errors.phone = "Cannot be blank";
    } else if (!regexPhone.test(phone)) {
      errors.phone = " Number should start with code of Ukraine +380";
    }

    if (!position) {
      errors.position = "Please click your position";
    }

    if (!file) {
      errors.file = "Please select photo";
    } else if (file.type !== "image/jpeg") {
      errors.file = "The photo format must be jpeg/jpg type";
    } else if (file.size > 5000000) {
      errors.file = "The photo size must not be greater than 5 Mb.";
    }

    setFormErrors(errors);
  };

  const handleCreateUser = () => {
    if (tokenData.token) {
      validation();
      setIsSubmitting(true);
    } else {
      alert("У вас нет прав для создания пользователя");
    }
  };
  const actionCreatorUser = () => {
    var formData = new FormData();
    formData.append("position_id", position);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone","+"+phone);
    formData.append("photo", file);
    createUser({user: formData, token: tokenData.token});
  };

  useEffect(() => {// когда прошла валидация
    /* eslint-disable */
    if (formErrors.email === "" && formErrors.name === "" && formErrors.file === "" && formErrors.phone === "" && formErrors.position === ""&& isSubmitting) {
      /* eslint-enable */
      actionCreatorUser();
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [formErrors]);

  useEffect(() => {
    if (data) {// когда юзер создался
      dispatch(setDisabledUsersButton(false));
      dispatch(setPages([1]));
      setName("");
      setEmail("");
      setPhone("");
      setPosition("");
      setFile(null);
      doScroll(usersBlock, 2000);
      setDisabled(false);
    }
  }, [data]);

  return (
    <Box
      component="section"
      ref={ref}>
      <Container
        sx={{
          mt:"140px",
          display:"flex",
          flexDirection:"column",
          alignItems:"center"
        }}
      >
        <Box component="h1"
          sx={{
            textAlign:"center"
          }}
        >
                    Working with POST request
        </Box>
        <FormControl
          sx={{
            margin: "50px auto",
            maxWidth: "380px",
            width: "100%",
          }}
          className="hp-form__form">
          <Input label={"Your name"}
            type="text"
            value={name}
            onChange={setName}
            valid={formErrors.name}
            className="hp-form__form-input"
          />
          <Input label={"Email"}
            type="email"
            value={email}
            onChange={setEmail}
            valid={formErrors.email}
            className="hp-form__form-input"
          />
          <Input label={"Phone"}
            helpertext={"+38 (XXX) XXX - XX - XX"}
            type={"number"}
            value={phone}
            onChange={setPhone}
            valid={formErrors.phone}
            className="hp-form__form-input"
          />

          <Position key={`${data}`} setPosition={setPosition}/>

          {formErrors.position
                    && <ErrorText error={{data: {message: formErrors.position}}}/>}

          <InputFile
            file={file}
            classes = {{mt:"47px"}}
            onChange={inputFile}/>

          {formErrors.file && <ErrorText error={{data: {message: formErrors.file}}}/>}

          {isLoading
            ? <Preloader/>
            : error &&
                        Object.keys(error.data.fails).map((el) =>
                          error.data.fails[el].map((text: string) =>
                            <ErrorText text={text} key={el}/>
                          )
                        )
          }

        </FormControl>
        <CustomButton
          classes={{
            minWidth:"100px"
          }}
          className="hp-form__button"
          disabled={disabled}
          onClick={handleCreateUser}
        >
                    Sign up
        </CustomButton>
      </Container>
    </Box>
  );
});

export default HPForm;