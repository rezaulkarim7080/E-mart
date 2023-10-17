// import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillGithub, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineVisibility } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, clearErrors } from "../actions/userAction";

const Login = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
    navigate("/account");
  };

  return (
    <div className="h-screen">
      {error && <div>{error}</div>}
      <div className="w-full max-w-md p-4 m-auto my-6 rounded-md shadow-lg sm:p-8 bg-slate-50  ">
        <div>
          <div>
            <h2 className="mb-3 text-3xl font-semibold text-center">
              Sign in account{" "}
            </h2>
          </div>
          <div></div>
        </div>

        {/* Form here */}

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-2">
            <div className="space-y-2">
              <label className="block text-sm">Email </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                name="email"
                autoComplete="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md text-black "
              />
            </div>
            <div className="space-y-2 ">
              <div className="flex justify-between">
                <label className="text-sm">Password</label>
              </div>
              <div className="relative ">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  name="password"
                  placeholder="password"
                  className="w-full px-3 py-2 border "
                />
                {showPassword ? (
                  <AiOutlineEyeInvisible
                    className="absolute top-2 right-2"
                    size={25}
                    onClick={() => setShowPassword(false)}
                  />
                ) : (
                  <MdOutlineVisibility
                    size={25}
                    className="absolute top-2 right-2"
                    onClick={() => setShowPassword(true)}
                  />
                )}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-3 space-y-2">
                <input type="checkbox" />
                <h1>Remember me</h1>
              </div>
              <div>
                <Link
                  to={"/login"}
                  className="hover:underline hover:text-cyan-600"
                >
                  forgot password
                </Link>
              </div>
            </div>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full px-8 py-3 font-semibold rounded-md  bg-cyan-600 text-white"
          >
            Sign in
          </button>
          <div className="flex justify-center">
            <p className="text-sm text-center">Already have account?</p>
            <div className=" text-cyan-600 text-sm focus:underline hover:underline">
              <Link to="/signup">Signup</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
