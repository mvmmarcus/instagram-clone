import React, { useState, useEffect } from "react";

import UsersList from "../../containers/UsersList/UsersList";

const UsersRoute = () => {
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const url = "https://5e7d0266a917d70016684219.mockapi.io/api/v1/users";
        const response = await fetch(url);
        const data = await response.json();
        setUsersList(data);
        setLoadingUsers(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);
  return (
    <div data-testid="users-route" className="container">
      <UsersList users={usersList} loading={loadingUsers} />
    </div>
  );
};

export default UsersRoute;
