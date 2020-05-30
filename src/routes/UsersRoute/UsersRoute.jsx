import React, { useState, useEffect } from "react";

import UsersList from "../../containers/UsersList/UsersList";

const UsersRoute = () => {
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://5e7d0266a917d70016684219.mockapi.io/api/v1/users"
      );
      const data = await response.json();
      setUsersList(data);
      setLoadingUsers(false);
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
