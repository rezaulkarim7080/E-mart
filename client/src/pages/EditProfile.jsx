import React, { Fragment, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login, register } from "../actions/userAction";
import Loader from "../loader/Loader";

const EditProfile = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { user } = useSelector((state) => state.user);
  const { error, isUpdated, loading } = useSelector((state) => state.profile);

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [avatar, setAvatar] = useState();
  const [avatarPreview, setAvatarPreview] = useState(user.avatar.url);

  const registerSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.append("name", name);
    myForm.append("email", email);
    myForm.append("avatar", avatar);
    dispatch(register(myForm));
  };

  const updateProfile = (e) => {
    const reader = new FileReader();

    reader.onloaded = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
        setAvatar(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  useEffect(() => {
    if (error) {
      console.alert(error);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      navigate("/account");
    }
  }, [dispatch, error, isUpdated, navigate]);

  return (
    <Fragment>
      <div className="LoginSignUpContainer">
        <div className="LoginSignUpBox">
          <form
            className="signUpForm"
            encType="multipart/form-data"
            onSubmit={registerSubmit}
          >
            <div className="signUpName">
              {/* <FaceIcon /> */}
              <input
                type="text"
                placeholder="Name"
                required
                name="name"
                value={name}
                onChange={updateProfile}
              />
            </div>
            <div className="signUpEmail">
              {/* <MailOutlineIcon /> */}
              <input
                type="email"
                placeholder="Email"
                required
                name="email"
                value={email}
                onChange={updateProfile}
              />
            </div>
            <div id="registerImage">
              <img src={avatarPreview} alt="Avatar Preview" />
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={updateProfile}
              />
            </div>
            <input type="submit" value="Register" className="signUpBtn" />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default EditProfile;
