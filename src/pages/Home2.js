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
  BsInstagram,
} from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import {
  GrDeliver,
  GrFacebookOption,
  GrInstagram,
  GrPinterest,
  GrTwitter,
} from "react-icons/gr";
import ring from "../assets/images/ring.webp";
import product3 from "../assets/images/product3.webp";
import watch from "../assets/images/watch.jpg";
import {
  MdStarOutline,
  MdStar,
  MdStorefront,
  MdSecurity,
  MdCall,
  MdEmail,
} from "react-icons/md";
import { yellow } from "@mui/material/colors";

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

const myStyle5 = {
  backgroundImage:
    "url('https://cdn.shopify.com/s/files/1/0081/3305/0458/files/h7j1-spotlight1-1_935x.jpg?v=1638868257')",
  height: "70vh",
  width: "740px",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const myStyle6 = {
  backgroundImage:
    "url(https://cdn.shopify.com/s/files/1/0081/3305/0458/files/h7j1-spotlight2-2_570x.jpg?v=1638845214",
  height: "70vh",
  width: "485px",
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

const ImageEdit5 = styled.div({
  width: "500px",
  marginLeft: "190px",
  paddingTop: "280px",
});

const ImageEdit6 = styled.div({
  width: "350px",
  marginLeft: "70px",
  paddingTop: "250px",
  backgroundColor: "",
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

const Line2 = styled.div({
  height: "1px",
  width: "100%",
  backgroundColor: "grey",
});

const Line3 = styled.div({
  height: "1px",
  backgroundColor: "black",
  width: "170px",
});

const Line4 = styled.div({
  height: "1px",
  backgroundColor: "black",
  width: "80px",
  marginLeft: "203px",
});

const InputNumber = styled.input({
  height: "40px",
  width: "150px",
  fontSize: " 14px    ",
  fontWeight: "500",
  backgroundColor: "#f9f1e9",
  border: "1px solid lightgrey",
  borderBottom: "1px solid lightgrey",
  marginTop: "20px",
  outline: "none",
});

const Continuebtn = styled.button({
  backgroundColor: Colors.GreyLight,
  boxShadow: "0 1px 2px 0 rgb(0 0 0 / 20%)",
  border: "none",
  color: Colors.White,
  width: "100px",
  height: "40px",
  fontSize: Font.Normal,
  borderRadius: "2px",
  fontWeight: "500",
});

const Line5 = styled.div({
  height: "200px",
  width: "1px",
  marginTop: "25px",
  marginLeft: "20px",
  backgroundColor: "black",
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

      <div className="d-flex justify-content-between">
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
          <p className="ps-5 ms-3">Shop Now</p>
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
          <p className="ps-5 ms-3">Shop Now</p>
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
          <p className="ps-5 ms-3">Shop Now</p>
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
          <p className="ps-5 ms-3">Shop Now</p>
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
          <p className="ps-5 ms-3">Shop Now</p>
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
          <p className="ps-5 ms-3">Shop Now</p>
        </div>
      </div>

      <Line2 className="mt-4" />

      <div className="d-flex justify-content-center mt-5">
        <p className="ms-5" style={{ fontWeight: "500" }}>
          NEW ARRIVALS
        </p>
      </div>
      <p className="d-flex justify-content-center ms-5 mt-1 ">View All</p>

      <div className="d-flex">
        <div style={{ height: "520px", width: "370px", textAlign: "center" }}>
          <img
            src={product3}
            style={{
              height: "380px",
              width: "360px",
              paddingLeft: "25px",
              paddingTop: "25px",
            }}
          />
          <p
            className="mt-3"
            style={{ fontWeight: "500", textAlign: "center" }}
          >
            Product Name
          </p>
          <p>Lorem ipsum is placeholder text commonly </p>
          <MdStar className="ms-1" style={{ color: "yellow" }} />
          <MdStar style={{ color: "yellow" }} />
          <MdStar style={{ color: "yellow" }} />
          <MdStar style={{ color: "yellow" }} />
          <MdStarOutline style={{ color: "yellow" }} />
          <p style={{ fontWeight: "500" }}>$767</p>
        </div>
        <div style={{ height: "520px", width: "370px", textAlign: "center" }}>
          <img
            src={product3}
            style={{
              height: "380px",
              width: "360px",
              paddingLeft: "25px",
              paddingTop: "25px",
            }}
          />
          <p
            className="mt-3"
            style={{ fontWeight: "500", textAlign: "center" }}
          >
            Product Name
          </p>
          <p>Lorem ipsum is placeholder text commonly </p>
          <MdStar className="ms-1" style={{ color: "yellow" }} />
          <MdStar style={{ color: "yellow" }} />
          <MdStar style={{ color: "yellow" }} />
          <MdStar style={{ color: "yellow" }} />
          <MdStarOutline style={{ color: "yellow" }} />
          <p style={{ fontWeight: "500" }}>$767</p>
        </div>
        <div style={{ height: "520px", width: "370px", textAlign: "center" }}>
          <img
            src={product3}
            style={{
              height: "380px",
              width: "360px",
              paddingLeft: "25px",
              paddingTop: "25px",
            }}
          />
          <p
            className="mt-3"
            style={{ fontWeight: "500", textAlign: "center" }}
          >
            Product Name
          </p>
          <p>Lorem ipsum is placeholder text commonly </p>
          <MdStar className="ms-1" style={{ color: "yellow" }} />
          <MdStar style={{ color: "yellow" }} />
          <MdStar style={{ color: "yellow" }} />
          <MdStar style={{ color: "yellow" }} />
          <MdStarOutline style={{ color: "yellow" }} />
          <p style={{ fontWeight: "500" }}>$767</p>
        </div>
        <div style={{ height: "520px", width: "370px", textAlign: "center" }}>
          <img
            src={product3}
            style={{
              height: "380px",
              width: "360px",
              paddingLeft: "25px",
              paddingTop: "25px",
            }}
          />
          <p
            className="mt-3"
            style={{ fontWeight: "500", textAlign: "center" }}
          >
            Product Name
          </p>
          <p>Lorem ipsum is placeholder text commonly </p>
          <MdStar className="ms-1" style={{ color: "yellow" }} />
          <MdStar style={{ color: "yellow" }} />
          <MdStar style={{ color: "yellow" }} />
          <MdStar style={{ color: "yellow" }} />
          <MdStarOutline style={{ color: "yellow" }} />
          <p style={{ fontWeight: "500" }}>$767</p>
        </div>
      </div>
      <div className="d-flex">
        <div style={myStyle5} className="mt-4 ms-3">
          <ImageEdit5>
            <p className="ms-5 ps-5 mt-5" style={{ fontWeight: "500" }}>
              MUST-SEE NEW STYLES
            </p>
            <div className="ms-5">
              <Line3 className="ms-5" />
            </div>
            <h1 className="mt-2">Birthday Collections</h1>
            <div className="ms-5">
              <ShopBtn className="ms-5 ">SHOP NOW</ShopBtn>
            </div>
          </ImageEdit5>
        </div>
        <div style={myStyle5} className="mt-4 ms-2">
          <ImageEdit5>
            <p className="ms-5 ps-5 mt-5" style={{ fontWeight: "500" }}>
              MUST-SEE NEW STYLES
            </p>
            <div className="ms-5">
              <Line3 className="ms-5" />
            </div>
            <h1 className="mt-2">Birthday Collections</h1>
            <div className="ms-5">
              <ShopBtn className="ms-5 ">SHOP NOW</ShopBtn>
            </div>
          </ImageEdit5>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-5">
        <p className="ms-5" style={{ fontWeight: "500" }}>
          Featured Products
        </p>
      </div>
      <p className="d-flex justify-content-center ms-5 mt-1 ">View All</p>

      <div className="d-flex">
        <div style={{ height: "520px", width: "370px", textAlign: "center" }}>
          <img
            src={product3}
            style={{
              height: "380px",
              width: "360px",
              paddingLeft: "25px",
              paddingTop: "25px",
            }}
          />
          <p
            className="mt-3"
            style={{ fontWeight: "500", textAlign: "center" }}
          >
            Product Name
          </p>
          <p>Lorem ipsum is placeholder text commonly </p>
          <MdStar className="ms-1" style={{ color: "yellow" }} />
          <MdStar style={{ color: "yellow" }} />
          <MdStar style={{ color: "yellow" }} />
          <MdStar style={{ color: "yellow" }} />
          <MdStarOutline style={{ color: "yellow" }} />
          <p style={{ fontWeight: "500" }}>$767</p>
        </div>
        <div style={{ height: "520px", width: "370px", textAlign: "center" }}>
          <img
            src={product3}
            style={{
              height: "380px",
              width: "360px",
              paddingLeft: "25px",
              paddingTop: "25px",
            }}
          />
          <p
            className="mt-3"
            style={{ fontWeight: "500", textAlign: "center" }}
          >
            Product Name
          </p>
          <p>Lorem ipsum is placeholder text commonly </p>
          <MdStar className="ms-1" style={{ color: "yellow" }} />
          <MdStar style={{ color: "yellow" }} />
          <MdStar style={{ color: "yellow" }} />
          <MdStar style={{ color: "yellow" }} />
          <MdStarOutline style={{ color: "yellow" }} />
          <p style={{ fontWeight: "500" }}>$767</p>
        </div>
        <div style={{ height: "520px", width: "370px", textAlign: "center" }}>
          <img
            src={product3}
            style={{
              height: "380px",
              width: "360px",
              paddingLeft: "25px",
              paddingTop: "25px",
            }}
          />
          <p
            className="mt-3"
            style={{ fontWeight: "500", textAlign: "center" }}
          >
            Product Name
          </p>
          <p>Lorem ipsum is placeholder text commonly </p>
          <MdStar className="ms-1" style={{ color: "yellow" }} />
          <MdStar style={{ color: "yellow" }} />
          <MdStar style={{ color: "yellow" }} />
          <MdStar style={{ color: "yellow" }} />
          <MdStarOutline style={{ color: "yellow" }} />
          <p style={{ fontWeight: "500" }}>$767</p>
        </div>
        <div style={{ height: "520px", width: "370px", textAlign: "center" }}>
          <img
            src={product3}
            style={{
              height: "380px",
              width: "360px",
              paddingLeft: "25px",
              paddingTop: "25px",
            }}
          />
          <p
            className="mt-3"
            style={{ fontWeight: "500", textAlign: "center" }}
          >
            Product Name
          </p>
          <p>Lorem ipsum is placeholder text commonly </p>
          <MdStar className="ms-1" style={{ color: "yellow" }} />
          <MdStar style={{ color: "yellow" }} />
          <MdStar style={{ color: "yellow" }} />
          <MdStar style={{ color: "yellow" }} />
          <MdStarOutline style={{ color: "yellow" }} />
          <p style={{ fontWeight: "500" }}>$767</p>
        </div>
      </div>

      <div>
        <h3 style={{ textAlign: "center" }}>#Must Have</h3>

        <div className="d-flex">
          <div style={myStyle6} className="mt-4 ms-3">
            <ImageEdit6>
              <div className="ms-5 ps-4">
                <p className=" ms-2 mt-5" style={{ fontWeight: "500" }}>
                  SALE UP TO 30% OFF
                </p>

                <Line3 />
              </div>
              <h1 className="mt-2">18K Gold Bracelets</h1>
              <div className="ms-4">
                <ShopBtn className="ms-5">SHOP NOW</ShopBtn>
              </div>
            </ImageEdit6>
          </div>
          <div style={myStyle6} className="mt-4 ms-3">
            <ImageEdit6>
              <div className="ms-5 ps-4">
                <p className=" ms-2 mt-5" style={{ fontWeight: "500" }}>
                  SALE UP TO 30% OFF
                </p>

                <Line3 />
              </div>
              <h1 className="mt-2">18K Gold Bracelets</h1>
              <div className="ms-4">
                <ShopBtn className="ms-5">SHOP NOW</ShopBtn>
              </div>
            </ImageEdit6>
          </div>

          <div style={myStyle6} className="mt-4 ms-3">
            <ImageEdit6>
              <div className="ms-5 ps-4">
                <p className=" ms-2 mt-5" style={{ fontWeight: "500" }}>
                  SALE UP TO 30% OFF
                </p>

                <Line3 />
              </div>
              <h1 className="mt-2">18K Gold Bracelets</h1>
              <div className="ms-4">
                <ShopBtn className="ms-5">SHOP NOW</ShopBtn>
              </div>
            </ImageEdit6>
          </div>
        </div>
      </div>

      <div className="d-flex">
        <div style={{ height: "270px", textAlign: "center", width: "485px" }}>
          <GrDeliver className="mt-5 pt-2" style={{ fontSize: "60px" }} />
          <h3 className="mt-3">Free Standard Delivery</h3>
          <p className="mt-2">The passage is attributed to an unknown</p>
          <p>Learn More</p>

          <Line4 />
        </div>
        <div
          className="ms-3"
          style={{ height: "270px", textAlign: "center", width: "485px" }}
        >
          <MdStorefront className="mt-5 pt-2" style={{ fontSize: "60px" }} />
          <h3 className="mt-3">Free In Store Returns</h3>
          <p className="mt-2">The passage is attributed to an unknown</p>
          <p>Learn More</p>

          <Line4 />
        </div>
        <div
          className="ms-3"
          style={{ height: "270px", textAlign: "center", width: "485px" }}
        >
          <MdSecurity className="mt-5 pt-2" style={{ fontSize: "60px" }} />
          <h3 className="mt-3">100% Secure Checkout</h3>
          <p className="mt-2">The passage is attributed to an unknown</p>
          <p>Learn More</p>

          <Line4 />
        </div>
      </div>

      <Line2 />

      <div className="d-flex justify-content-center mt-5">
        <BsInstagram className="pt-1 mt-1" style={{ fontSize: "24px" }} />
        <p className="ms-2" style={{ fontWeight: "700", fontSize: "24px" }}>
          #Image Gallery
        </p>
      </div>
      <div>
        <p className="mt-1" style={{ textAlign: "center" }}>
          Phasellus lorem malesuada ligula pulvinar commodo maecenas
        </p>
      </div>

      <div className="mt-3">
        <img
          src={watch}
          style={{
            height: "340px",
            width: "300px",
            paddingLeft: "10px",
            paddingTop: "25px",
          }}
        />
        <img
          src={watch}
          style={{
            height: "340px",
            width: "300px",
            paddingLeft: "8px",
            paddingTop: "25px",
          }}
        />
        <img
          src={watch}
          style={{
            height: "340px",
            width: "300px",
            paddingLeft: "8px",
            paddingTop: "25px",
          }}
        />
        <img
          src={watch}
          style={{
            height: "340px",
            width: "300px",
            paddingLeft: "8px",
            paddingTop: "25px",
          }}
        />
        <img
          src={watch}
          style={{
            height: "340px",
            width: "300px",
            paddingLeft: "8px",
            paddingTop: "25px",
          }}
        />
      </div>
      <div className="d-flex justify-content-center mt-4">
        <AiOutlinePlus style={{ fontSize: "70px" }} />
      </div>
      <div className="mt-4">
        <div
          className=" pt-5"
          style={{ height: "450px", width: "100%", backgroundColor: "#f9f1e9" }}
        >
          <div className="d-flex">
            <div style={{ height: "300px", width: "420px" }}>
              <div className="mt-4 ms-5">
                <h3>Newsletter Sign up</h3>
                <p className="mt-4" style={{ fontSize: "14px" }}>
                  Sign up for new arrivals, offers, and more!
                </p>

                <InputNumber
                  type="email"
                  placeholder="Enter Your E-mail"
                ></InputNumber>

                <Continuebtn type="submit">CONTINUE</Continuebtn>

                <div className="mt-4" style={{ fontSize: "25px" }}>
                  <GrFacebookOption />
                  <GrInstagram className="ms-4" />
                  <GrPinterest className="ms-4" />
                  <GrTwitter className="ms-4" />
                </div>
              </div>
            </div>

            <div style={{ height: "300px", width: "320px" }}>
              <div className="mt-4 ms-5">
                <h3>Contact Us</h3>
                <div className="d-flex mt-3">
                  <MdCall style={{ fontSize: "25px" }} />
                  <p className="ms-2"> +919798000000</p>
                </div>

                <div className="d-flex mt-3">
                  <MdEmail style={{ fontSize: "25px" }} />
                  <p className="ms-2"> example@domain.com</p>
                </div>

                <p className="mt-3">
                  685 Market Street San Francisco, CA 94105, US
                </p>
              </div>
            </div>

            <div className="ms-3" style={{ height: "300px", width: "280px" }}>
              <div className="mt-4 ms-5">
                <h3>Help</h3>
                <p className="mt-3"> Sizing Help</p>
                <p className="mt-2">Returns & Exchanges</p>
                <p className="mt-2">Shipping</p>
                <p className="mt-2">Theme FAQs </p>
              </div>
            </div>
            <div style={{ height: "300px", width: "280px" }}>
              <div className="mt-4 ms-5">
                <h3>About</h3>
                <p className="mt-3"> Our Story</p>
                <p className="mt-2">Careers</p>
                <p className="mt-2">Press</p>
                <p className="mt-2">Blog </p>
              </div>
            </div>
            <div style={{ height: "300px", width: "280px" }}>
              <div className="mt-4 ms-">
                <h3>Shop</h3>
                <p className="mt-3"> Bibendumetos</p>
                <p className="mt-2">Pellentes Habitanto</p>
                <p className="mt-2">Senectus</p>
                <p className="mt-2">Consequatod </p>
                <p className="mt-2">Scelerisque Yurnas </p>
                <p className="mt-2">Loremouticas </p>
              </div>
            </div>
            <div style={{ height: "300px", width: "280px" }}>
              <div className="mt-4 ms-3">
                <h3>Popular Search</h3>
                <p className="mt-3"> 18K White Gold</p>
                <p className="mt-2">Rose Gold</p>
                <p className="mt-2">Wedding Jewelry</p>
                <p className="mt-2">Luxury Watches </p>
                <p className="mt-2">Gifts Under $50 </p>
                <p className="mt-2">Gift Cards </p>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <p style={{ textAlign: "center", fontSize: "13px", color: "grey" }}>
              © 2020 ELLA DEMO. POWERED BY SHOPIFY.
            </p>
            <p style={{ textAlign: "center", fontSize: "13px", color: "grey" }}>
              {"SHOPIFY THEMES & TEMPLATES BY HALOTHEMES"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
