import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Spinner from "../layout/Spinner.component";
import PostItem from "./PostItem.component";

import { getPosts } from "../../actions/post.actions";

const Posts = ({ getPosts, auth: { user }, post: { posts, loading } }) => {
  useEffect(() => {
    if (user) getPosts();
  }, [user, getPosts]);

  return loading || !user ? (
    <Spinner />
  ) : (
    <>
      <h1 className="large text-primary">Posts</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Welcome to the comunity
      </p>
      {/* PostForm */}
      <div className="posts">
        {posts.map((post) => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
    </>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.postReducer,
  auth: state.authReducer,
});

export default connect(mapStateToProps, { getPosts })(Posts);
