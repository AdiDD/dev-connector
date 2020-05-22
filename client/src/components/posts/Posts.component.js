import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getPosts } from "../../actions/post.actions";
import Spinner from "../layout/Spinner.component";

const Posts = ({ getPosts, user, post: { posts, loading } }) => {
  useEffect(() => {
    if (user) getPosts();
  }, [user, getPosts]);

  return <div></div>;
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.postReducer,
  user: state.authReducer.user,
});

export default connect(mapStateToProps, { getPosts })(Posts);
