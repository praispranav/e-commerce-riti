import React from "react";
import styled from "styled-components";
import { Colors } from "../config/Colors";
import { Font } from "../config/Font";
import flag from "../assets/images/flag.jpg";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import {
  BsFillPersonFill,
  BsFillSuitHeartFill,
  BsCartCheckFill,
} from "react-icons/bs";
import ring from "../assets/images/ring.webp";

const Topbar = styled.div({
  height: "43px",
  width: "100%",
  backgroundColor: "rgb(245, 202, 234)",
  color: "#b05d5d",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const MidFont = styled.p({
  paddingRight: "500px",
});

const Logotext = styled.p({
  fontWeight: "700",
  fontSize: "30px",
});

const Logotext2 = styled.div({
  marginLeft: "270px",
});

const InputField = styled.input({
  outline: "none",
  width: "200px",
  backgroundColor: Colors.White,
  border: "none",
  borderBottom: "1px solid lightgrey",
  marginLeft: "390px",
  height: "40px",
});

const TopBar2 = styled.p({
  fontWeight: "500",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const myStyle = {
  backgroundImage:
    "url('https://cdn.shopify.com/s/files/1/0081/3305/0458/files/h7j1-image-banner-1_1880x.jpg?v=1639989481')",
  height: "70vh",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const myStyle2 = {
  backgroundImage:
    "url('https://cdn.shopify.com/s/files/1/0081/3305/0458/files/h7j1-image-banner-2_1880x.jpg?v=1639989494')",
  height: "70vh",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const ImageEdit = styled.div({
  width: "280px",
  marginLeft: "150px",
  paddingTop: "160px",
});

const ImageEdit2 = styled.div({
  width: "340px",
  marginLeft: "1000px",
  paddingTop: "160px",
});

const ShopBtn = styled.button({
  height: "40px",
  width: "150px",
  backgroundColor: "black",
  boxShadow: "0 1px 2px 0 rgb(0 0 0 / 20%)",
  border: "none",
  color: "white",
  fontSize: Font.Medium,
  fontWeight: "500",
  marginTop: "25px",
});

const Line = styled.div({
  height: "1px",
  backgroundColor: "black",
  width: "115px",
});

export default function home2() {
  return (
    <div>
      <Topbar>
        <MidFont>Mid-Season Sale Up to 70% OFF. Shop Now</MidFont>
      </Topbar>

      <div className="m-4 d-flex">
        <img
          src={flag}
          style={{ height: "30px", width: "30px", borderRadius: "100%" }}
        />
        <p className="mt-1 ms-2" style={{ color: "grey" }}>
          IND | INR
        </p>
        <FiChevronDown
          className="mt-2 ms-1"
          style={{ fontSize: "20px", color: "grey" }}
        />
        <p className="mt-1 ms-4" style={{ color: "grey" }}>
          Free Shipping Over $99{" "}
        </p>
        <Logotext2>
          <Logotext className="ms-5 ps-5">LOGO</Logotext>
        </Logotext2>

        <InputField type="text" placeholder="Search"></InputField>
        <div className="mt-2 " style={{ fontSize: "20px" }}>
          <FiSearch />
          <BsFillPersonFill className="ms-2" />
          <BsFillSuitHeartFill className="ms-2" />
          <BsCartCheckFill className="ms-2" />
        </div>
      </div>
      <TopBar2>
        <p>Theme Demo</p>
        <p className="ms-5">Shop</p>
        <p className="ms-5">Product</p>
        <p className="ms-5">Blog</p>
        <p className="ms-5">Pages</p>
        <p className="ms-5">New In</p>
        <p className="ms-5">Trend</p>
        <p className="ms-5">Collections</p>
        <p className="ms-5" style={{ color: "rgb(178, 23, 30)" }}>
          Buy Theme
        </p>
      </TopBar2>

      <div style={myStyle} className="mt-4">
        <ImageEdit>
          <p className="ms-5" style={{ fontWeight: "500" }}>
            NEW ARRIVALS
          </p>
          <Line className="ms-5" />
          <h1 className="mt-3">Lorem ipsum</h1>
          <p className="ms-4">Lorem ipsum dolor sit amet, </p>
          <p>consectetur adipiscing elit Duis aute</p>
          <p className="ms-4"> irure dolor in reprehenderit.</p>
          <ShopBtn className="ms-5">SHOP NOW</ShopBtn>
        </ImageEdit>
      </div>

      <div className="mt-4">
        <div style={myStyle2} className="mt-4">
          <ImageEdit2>
            <p className="ms-5" style={{ fontWeight: "500" }}>
              NEW ARRIVALS
            </p>
            <Line className="ms-5" />
            <h1 className="mt-3">Lorem ipsum</h1>
            <p className="ms-4">Lorem ipsum dolor sit amet, </p>
            <p>consectetur adipiscing elit Duis aute</p>
            <p className="ms-4"> irure dolor in reprehenderit.</p>
            <ShopBtn className="ms-5">SHOP NOW</ShopBtn>
          </ImageEdit2>
        </div>
      </div>

      <div>
        <div>
          <img
            src={ring}
            style={{
              height: "180px",
              width: "180px",
              paddingLeft: "25px",
              paddingTop: "25px",
            }}
          />

          <p className="ms-5" style={{ fontWeight: "500" }}>
            Diamond Rings
          </p>
          <p className="ps-5">Shop Now</p>
        </div>
        <div>
          <img
            src={ring}
            style={{
              height: "180px",
              width: "180px",
              paddingLeft: "25px",
              paddingTop: "25px",
            }}
          />

          <p className="ms-5" style={{ fontWeight: "500" }}>
            Diamond Rings
          </p>
          <p className="ps-5">Shop Now</p>
        </div>
        <div>
          <img
            src={ring}
            style={{
              height: "180px",
              width: "180px",
              paddingLeft: "25px",
              paddingTop: "25px",
            }}
          />

          <p className="ms-5" style={{ fontWeight: "500" }}>
            Diamond Rings
          </p>
          <p className="ps-5">Shop Now</p>
        </div>
        <div>
          <img
            src={ring}
            style={{
              height: "180px",
              width: "180px",
              paddingLeft: "25px",
              paddingTop: "25px",
            }}
          />

          <p className="ms-5" style={{ fontWeight: "500" }}>
            Diamond Rings
          </p>
          <p className="ps-5">Shop Now</p>
        </div>
        <div>
          <img
            src={ring}
            style={{
              height: "180px",
              width: "180px",
              paddingLeft: "25px",
              paddingTop: "25px",
            }}
          />

          <p className="ms-5" style={{ fontWeight: "500" }}>
            Diamond Rings
          </p>
          <p className="ps-5">Shop Now</p>
        </div>
      </div>
    </div>
  );
}
