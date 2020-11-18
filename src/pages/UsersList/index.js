import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { getUsers } from "../../redux/actions/users";
import { getUsersQuantity } from "../../redux/actions/quantityPage";
import { selectUsers } from "../../redux/selectors/users";
import UserShow from "../../components/UserShow";
import Pagination from "../../components/Pagination";
import "./style.css";
import { selectUsersQuantity } from "../../redux/selectors/usersQuantity";

const UsersList = ({ getUsers, getUsersQuantity, users, quantityUsers }) => {

  const [activeButton, setActiveButton] = useState(1);
  const updateActiveButton = (numberPage) => () => {
    setActiveButton(numberPage);
  };

  useEffect(() => getUsers(activeButton), [activeButton]);
  useEffect(() => getUsersQuantity, []);

  const quantityButtonsPagination = Math.ceil(quantityUsers / 5);

  return (
    <>
      <UserShow users={users} />
      <span className="title">Users list</span>
      {users &&
        users.map(({ id, name, surname, desc }) => (
          <div key={id} className="user">
            <span className="name">{name}</span>
            <span className="surname">{surname}</span>
            <span>{desc}</span>
          </div>
        ))}
      <Pagination
        quantityBtn={quantityButtonsPagination}
        activeButton={activeButton}
        updateActiveButton={updateActiveButton}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  users: selectUsers(state),
  quantityUsers: selectUsersQuantity(state),
});

const mapDispatchToProps = {
  getUsers,
  getUsersQuantity,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
