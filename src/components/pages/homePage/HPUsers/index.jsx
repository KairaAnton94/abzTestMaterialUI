import React, {forwardRef} from "react";

import "./index.scss";

import Button from "../../../../sharedComponents/CustomButton";
import {setDisabledUsersButton, setPages} from "../../../../store/reducers/homeReducer";
import {useTypedDispatch, useTypedSelector} from "../../../../helpers/hooks/useTypedRedux";

import Users from "./Users";
import CustomButton from "../../../../sharedComponents/CustomButton";




const HPUsers= forwardRef((props, ref) => {
  const {pages, disabled} = useTypedSelector(state => state.homeReducer);
  const dispatch = useTypedDispatch();
  const nextPage = () => dispatch(setPages([...pages, pages[pages.length - 1] + 1]));

  const disableSetter = (status) => dispatch(setDisabledUsersButton(status));

  return (
    <section className="hp-users" ref={ref}>
      <div className="hp-users__container _container">
        <h1 className="hp-users__title">
                    Working with GET request
        </h1>
        <div className="hp-users__cards">
          {
            pages.map((page, index) =>
              <Users
                setDisabled={disableSetter}
                key={page + "-" + index}
                page={page}/>
            )
          }
        </div>
        <CustomButton
            classes={{
                minWidth:"120px"
            }}
            //className={`hp-users__button ${disabled && "unShow"}`}
          onClick={nextPage}
        >
                    Show more
        </CustomButton>
      </div>
    </section>
  );
});

export default HPUsers;