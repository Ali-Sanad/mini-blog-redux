import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../actions/index";
import UserHeader from "./UserHeader";

const PostList = ({ posts, fetchPostsAndUsers }) => {
  useEffect(() => {
    fetchPostsAndUsers();
  }, []);

  return (
    <div>
      {posts.map((p) => (
        <div key={p.id} className="card card my-5">
          <div className="card-body">
            <div className="card-title text-center">
              <h5>{p.title}</h5>
            </div>
            <div className="card-text text-first">
              <p>{p.body}</p>
            </div>
          </div>
          <UserHeader userId={p.userId} />
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
