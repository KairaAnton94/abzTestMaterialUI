import React, {useEffect, memo, FC} from "react";

import {useGetUsersQuery} from "../../../../../store/api/usersApi";
import UserCard from "../../../../../sharedComponents/UserCard";
import Preloader from "../../../../Preloader";
import ErrorBoundary from "../../../../../helpers/ErrorBoundary";
import ErrorText from "../../../../ErrorText";

interface PUsers{
  page: number,
  setDisabled: (disabled: boolean)=>void
}

const Users:FC<PUsers> = memo(({page, setDisabled}) => {
  const {data, isLoading, error} = useGetUsersQuery({page: page, count: 6});
  useEffect(() => {
    if (data && data.total_pages === page) setDisabled(true);
  }, [data]);
  useEffect(() => {
    if (error) setDisabled(true);
  }, [error]);
  return (
    <ErrorBoundary ErrorComponent={ErrorText}>
      {isLoading
        ? <Preloader/>
        : error ? ""
          : data?.users.map(({id, name, email, photo, phone, position}) =>
            <UserCard
              key={id}
              name={name}
              email={email}
              phone={phone}
              photo={photo}
              position={position}
            />)
      }
    </ErrorBoundary>
  );
});

export default Users;