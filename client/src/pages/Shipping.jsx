import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Country, State, City } from "country-state-city";
import { MdLocalShipping } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";
import { AiOutlineBank } from "react-icons/ai";
import { saveShippingInfo } from "../actions/cartAction";
import { useNavigate } from "react-router-dom";
import CheckoutSteps from "../components/CheckoutSteps";

const Shipping = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { shippingInfo } = useSelector((state) => state.cart);

  const [address, setAddress] = useState(shippingInfo.address);
  const [city, setCity] = useState(shippingInfo.city);
  const [state, setState] = useState(shippingInfo.state);
  const [country, setCountry] = useState(shippingInfo.country);
  const [pinCode, setPinCode] = useState(shippingInfo.pinCode);
  const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);

  const shippingSubmit = (e) => {
    e.preventDefault();

    if (phoneNo.length < 10 || phoneNo.length > 10) {
      alert("Phone Number should be 10 digits Long");
      return;
    }
    dispatch(
      saveShippingInfo({ address, city, state, country, pinCode, phoneNo })
    );
    navigate("/order/confirm");
    // navigate("/payment/process");
  };

  return (
    <div>
      <CheckoutSteps activeStep={0} />
      <div className="text-center py-10 ">
        <h2 className="text-xl font-semibold py-2">Shipping Details</h2>
        <form encType="multipart/form-data" onSubmit={shippingSubmit}>
          <div className="py-3">
            {/* <HomeIcon /> */}
            <input
              type="text"
              placeholder="Address"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-[30%] px-3 py-2 border rounded-md text-black "
            />
          </div>

          <div className="py-3">
            {/* <LocationCityIcon /> */}
            <input
              type="text"
              placeholder="City"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-[30%] px-3 py-2 border rounded-md text-black "
            />
          </div>

          <div className="py-3">
            {/* <PinDropIcon /> */}
            <input
              type="number"
              placeholder="Pin Code"
              required
              value={pinCode}
              onChange={(e) => setPinCode(e.target.value)}
              className="w-[30%] px-3 py-2 border rounded-md text-black "
            />
          </div>

          <div className="py-3">
            {/* <PhoneIcon /> */}
            <input
              type="number"
              placeholder="Phone Number"
              required
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
              className="w-[30%] px-3 py-2 border rounded-md text-black "
              size="10"
            />
          </div>

          <div className="py-3">
            {/* <PublicIcon /> */}

            <select
              required
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-[30%] px-3 py-2 border rounded-md text-black "
            >
              <option value="">Country</option>
              {Country &&
                Country.getAllCountries().map((item) => (
                  <option key={item.isoCode} value={item.isoCode}>
                    {item.name}
                  </option>
                ))}
            </select>
          </div>

          {country && (
            <div className="py-3">
              {/* <TransferWithinAStationIcon /> */}

              <select
                required
                value={state}
                onChange={(e) => setState(e.target.value)}
              >
                <option value="">State</option>
                {State &&
                  State.getStatesOfCountry(country).map((item) => (
                    <option key={item.isoCode} value={item.isoCode}>
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>
          )}

          <input
            type="submit"
            value="Continue"
            className="w-[30%] px-3 py-2 bg-[#ffb30d] border hover:border-black hover:border-[2px] rounded-md text-black "
            disabled={state ? false : true}
          />
        </form>
      </div>
    </div>
  );
};

export default Shipping;
