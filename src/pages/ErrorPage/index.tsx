import React, {FC} from "react";
import {Link} from "react-router-dom";


import "./index.scss";
import Button from "../../sharedComponents/CustomButton";

const ErrorPage:FC = () => {
  return (
    <div className="error _container">
      <h1 className="error__title">
               404
      </h1>
      <Link to={"/"}>
        <Button className="error__button">
                    back to home
        </Button>
      </Link>
    </div>
  );
};

export default ErrorPage;