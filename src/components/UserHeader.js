import React from "react";
import { connect } from "react-redux";

const UserHeader = (props) => {
  const { user } = props;

  if (!user) return "Loading....";
  return (
    <h6 className="text-primary m-3">
      <span>Posted by : </span> {user.name}
    </h6>
  );
};
const mapStateToProps = (state, props) => {
  return { user: state.users.find((u) => u.id === props.userId) };
};
export default connect(mapStateToProps)(UserHeader);
