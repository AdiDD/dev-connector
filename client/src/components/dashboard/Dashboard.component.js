import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Spinner from "../layout/Spinner.component";
import DashboardActions from "./DashboardActions.component";
import Experience from "./Experience.component";
import Education from "./Education.component";

import {
  getCurrentProfile,
  deleteAccount,
} from "../../actions/profile.actions";

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    if (user) getCurrentProfile();
  }, [user, getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <>
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Welcome {user && user.name}
      </p>
      {user ? (
        profile !== null ? (
          <>
            <DashboardActions />
            {profile.experience.length > 0 ? (
              <Experience experience={profile.experience} />
            ) : (
              ""
            )}
            {profile.education.length > 0 ? (
              <Education education={profile.education} />
            ) : (
              ""
            )}

            <div className="my-2">
              <button
                className="btn btn-danger"
                onClick={() => deleteAccount()}
              >
                <i className="fas fa-user-minus"></i> Delete Account
              </button>
            </div>
          </>
        ) : (
          <>
            <p>You have not yet setup a profile, please add some info</p>
            <Link to="/create-profile" className="btn btn-primary my-1">
              Create Profile
            </Link>
          </>
        )
      ) : null}
    </>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.authReducer,
  profile: state.profileReducer,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
