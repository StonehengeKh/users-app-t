import React, { useState, useEffect } from "react";

const UserShow = ({ users }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const timerId = setInterval(() => {
      setUser(users[Math.floor(Math.random() * users.length)]);
    }, 2000);

    return () => {
      clearInterval(timerId);
    };
  }, [user]);

  return (
    <>
      {user && user.name && (
        <>
          <span className="title">Random user</span>
          <div className="user">
            <span className="name">{user && user.name}</span>
            <span className="surname">{user && user.surname}</span>
          </div>
        </>
      )}
    </>
  );
};

export default UserShow;
