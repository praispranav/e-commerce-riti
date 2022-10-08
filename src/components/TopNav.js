import React, { useEffect, useState } from "react";
import { Colors } from "../config/Colors";
import IconButton from "../elements/IconButton";
import { AiFillSetting, AiFillPhone } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { Font } from "../config/Font";
import { BsFillBagCheckFill } from "react-icons/bs";
import { contactInfo } from "../services/homePage";
import { Link } from "react-router-dom";
import { MdLogout } from "react-icons/md"
const TopNav = () => {
  const [state, setState] = useState({
    mobile: 9999900000,
    email: "wwww.xxxxx@gmail.com",
  });

  const fetchData = async () => {
    const { data, status } = await contactInfo();
    setState(data);
    console.log("Basic Info", data, status);
  };

  console.log("Test1", 3);

  useEffect(() => {
    fetchData();
  }, []);

  console.log("Test1", 1);

  const phoneNumber = 7644015588;
  const email = "praispranav@gmail.com";
  return (
    <div
      className="w-100 py-2"
      style={{
        backgroundColor: Colors.PrimaryDark,
        color: "white",
        fontSize: Font.ExtraSmall,
      }}
    >
      <div className="container d-flex justify-content-between align-items-center">
        <div class="d-flex">
          <p class="mx-2">
            <AiFillPhone className="mx-2" />
            {state.mobile}
          </p>
          /
          <p>
            <HiOutlineMail className="mx-2" />
            {state.email}
          </p>
        </div>
        <div class="d-flex align-items-center">
          <Link to={"/myprofile"}>
          <IconButton
            className="mx-2 px-2"
            hover={Colors.Primary}
            background={Colors.PrimaryDark}
          >
            <AiFillSetting className="me-2" /> Settings
          </IconButton>{" "}
          </Link>
          /
          <IconButton
            className="mx-2 px-2"
            hover={Colors.Primary}
            background={Colors.PrimaryDark}
          >
            <BsFillBagCheckFill className="me-2" /> Orders
          </IconButton>
          /
          <Link to={"/loginpage"}>
          <IconButton
            className="mx-2 px-2"
            hover={Colors.Primary}
            background={Colors.PrimaryDark}
          >
            <MdLogout className="me-2" /> Logout
          </IconButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
