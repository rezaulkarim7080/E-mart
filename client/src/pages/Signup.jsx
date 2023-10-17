import React, { useState, useEffect } from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { MdOutlineVisibility } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [formdata, setFormdata] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.id]: e.target.value });
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });
      const data = await res.json();

      if (data.success === false) {
        setError(data.message);
        setLoading(false);
        return;
      }
      setLoading(false);
      setError(null);
      alert("signup complete");
      navigate("/login");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <>
      <div className="h-screen">
        <div className="w-full max-w-md m-auto my-6 rounded-md shadow-lg sm:p-8 bg-slate-50">
          <div>
            <div>
              <h2 className="mb-3 text-3xl font-semibold text-center">
                Create an account
              </h2>
            </div>
          </div>

          {/* Form here */}
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <div className="space-y-2">
                <label className="block text-sm"> Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  id="name"
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md text-black"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm">Email </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md text-black"
                />
              </div>
              <div className="space-y-2 ">
                <div className="flex justify-between">
                  <label className="text-sm">Password</label>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    name="password"
                    placeholder="password"
                    className="w-full px-3 py-2 border"
                    id="password"
                    onChange={handleChange}
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
              <div className="space-y-2">
                <label className="block text-sm"> Image Url</label>
                <input
                  type="text"
                  name="userImage"
                  placeholder="Image Url"
                  id="userImage"
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md text-black"
                />
              </div>
              <button
                type="submit"
                value="Register"
                disabled={loading}
                className="w-full px-8 py-3 font-semibold rounded-md  bg-cyan-600 text-white"
              >
                {loading ? "Loading ..." : " Sign up "}
              </button>

              <div className="flex justify-center">
                <p className="text-sm text-center">Already have an account?</p>
                <div className=" text-cyan-600 text-sm focus:underline hover:underline">
                  <Link to="/login">Login</Link>
                </div>
              </div>
              {error && (
                <h1 className=" font-semibold text-red-600">{error}</h1>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
