import React from "react";
import { connect } from "react-redux";

import { getUsers } from "../../redux/actions/users";
import { selectUsers } from "../../redux/selectors/users";

const UsersList = ({ getUsers, users }) => {
  return <div>Users list</div>;
};

const mapStateToProps = (state) => ({
  users: selectUsers(state),
});

const mapDispatchToProps = {
  getUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
