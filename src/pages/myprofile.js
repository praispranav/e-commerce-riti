import React from "react";
import Header from "../components/Header";
import TopNav from "../components/TopNav";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import styled from "styled-components";
import { Colors } from "../config/Colors";
import { Font } from "../config/Font";
import Profile from "../assets/images/profile.png";
import { BsCreditCardFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { GoPerson } from "react-icons/go";
import { MdAccountBalanceWallet } from "react-icons/md";
import { BsChatLeftTextFill } from "react-icons/bs";
import { BsPersonSquare } from "react-icons/bs";
import { ImSwitch } from "react-icons/im";
import logoimg2 from "../assets/images/logoimg2.jpg";

const Cardbackground = styled.div({
  height: "1050px",
  width: "100%",
  backgroundColor: Colors.LightBlue,
});

const Profilecard = styled.div({
  width: "100%",
  height: "70px",
  backgroundColor: Colors.creamy,
  boxShadow: "1px 1px 8px   lightgrey",
  borderRadius: "2px",
});

const Hellotext = styled.p({
  fontWeight: "500",
  fontSize: Font.ExtraSmall,
});

const Hellotext1 = styled.p({
  fontWeight: "500",
  fontSize: Font.Medium,
});

const Ordercard = styled.div({
  width: "100%",
  height: "605px",
  backgroundColor: Colors.creamy,
  boxShadow: "1px 1px 8px   lightgrey",
  borderRadius: "2px",
});

const Plusicon = styled.div({
  color: Colors.Primary,
  paddingTop: "8px",
});

const Oredericon = styled.div({
  color: Colors.Primary,
  paddingTop: "8px",
  paddingLeft: "10px",
});

const Oredertext = styled.p({
  color: Colors.Grey,
  fontWeight: "500",
  fontSize: Font.Large,
});

const Line = styled.div({
  height: "1px",
  width: "100%",
  backgroundColor: Colors.GreyLight,
});

const Accounttext = styled.p({
  color: Colors.Grey,
  fontWeight: "500",
  fontSize: Font.Medium,
});

const Profileinfotext = styled.p({
  fontWeight: "500",
  fontSize: Font.Small,
});

const Changepasstext = styled.p({
  fontWeight: "500",
  fontSize: Font.ExtraSmall,
  color: Colors.Grey,
});

const Infocard = styled.div({
  height: "1000px",
  width: "100%",
  backgroundColor: Colors.creamy,
});

const Inputtype = styled.input({
  padding: "8px 10px 10px 0",
  width: "250px",
  fontSize: " 12px    ",
  fontWeight: "500",
  backgroundColor: Colors.creamy,

  border: "2px solid lightgrey",

  outline: "none",
});

const Savebtn = styled.button({
  height: "38px",
  width: "100px",
  backgroundColor: Colors.Primary,
  boxShadow: "0 1px 2px 0 rgb(0 0 0 / 20%)",
  border: "none",
  color: "white",
  fontSize: Font.Medium,
  fontWeight: "500",
  borderRadius: "2px",
});

const Radiobtn = styled.input({
  display: "inline-block",
  borderColor: Colors.Primary,
  border: "2px solid #979797",
  height: "14px",
  width: "14px",
  position: "relative",
  verticalAlign: "top",
  marginTop: "5px",
});

export default function CartPage() {
  return (
    <div className="w-100 h-100 m-0 p-0">
      <div>
        <TopNav />
        <Header />
        <SearchBar selectedCategory={"All Categories"} queryParams={""} />

        <Cardbackground>
          <div>
            <div className="container">
              <div className="row">
                <div className="col-3 my-4">
                  <Profilecard>
                    <div>
                      <div className="d-flex">
                        <img
                          src={Profile}
                          style={{
                            height: "55px",
                            width: "55px",
                            marginTop: "8px",
                            marginLeft: "5px",
                            borderRadius: "100%",
                          }}
                        />

                        <Hellotext className="mt-3 ms-2">
                          Hello,
                          <Hellotext1>Flipkart Customer</Hellotext1>
                        </Hellotext>
                      </div>
                    </div>
                  </Profilecard>

                  <div className="pt-3">
                    <Ordercard>
                      <Oredericon className="d-flex ms-2  pt-3">
                        <BsCreditCardFill className="mt-1"></BsCreditCardFill>

                        <Oredertext className=" ps-3">MY ORDER</Oredertext>
                        <div className="ms-5">
                          <IoIosArrowForward className="ms-5"></IoIosArrowForward>
                        </div>
                      </Oredericon>

                      <Line className="mt-3"></Line>

                      <Oredericon className="d-flex ms-2  pt-3">
                        <GoPerson></GoPerson>

                        <Accounttext className=" ps-3">
                          ACCOUNT SETTINGS
                        </Accounttext>
                      </Oredericon>

                      <div className="ps-5 pt-3">
                        <Profileinfotext>Profile Information</Profileinfotext>
                        <Profileinfotext className="pt-1">
                          Manage Addresses
                        </Profileinfotext>
                        <Profileinfotext className="pt-1">
                          PAN Card Information
                        </Profileinfotext>
                      </div>

                      <Line className="mt-3"></Line>

                      <div>
                        <Oredericon className="d-flex ms-2  pt-3">
                          <MdAccountBalanceWallet className="mt-1"></MdAccountBalanceWallet>
                          <Accounttext className=" ps-3">PAYMENTS</Accounttext>
                        </Oredericon>

                        <div className="ps-5 pt-3">
                          <Profileinfotext>Gift Cards</Profileinfotext>
                          <Profileinfotext className="pt-1">
                            Saved UPI
                          </Profileinfotext>
                          <Profileinfotext className="pt-1">
                            Saved Cards
                          </Profileinfotext>
                        </div>

                        <Line className="mt-3"></Line>

                        <div>
                          <Oredericon className="d-flex ms-2  pt-3">
                            <BsChatLeftTextFill className="mt-1"></BsChatLeftTextFill>
                            <Accounttext className=" ps-3">
                              MY CHATS
                            </Accounttext>
                            <div className="ms-5">
                              <IoIosArrowForward className="ms-5"></IoIosArrowForward>
                            </div>
                          </Oredericon>
                          <Line className="mt-3"></Line>

                          <div>
                            <Oredericon className="d-flex ms-2  pt-3">
                              <BsPersonSquare className="mt-1"></BsPersonSquare>
                              <Accounttext className=" ps-3">
                                MY STUFF
                              </Accounttext>
                            </Oredericon>

                            <div className="ps-5 pt-3">
                              <Profileinfotext>My Coupons</Profileinfotext>
                              <Profileinfotext className="pt-1">
                                My Reviews & Ratings
                              </Profileinfotext>
                              <Profileinfotext className="pt-1">
                                All Notifications
                              </Profileinfotext>
                              <Profileinfotext className="pt-1">
                                My Wishlist
                              </Profileinfotext>
                            </div>
                          </div>

                          <Line className="mt-3"></Line>

                          <div>
                            <Oredericon className="d-flex ms-2  pt-3">
                              <ImSwitch className="mt-1"></ImSwitch>
                              <Oredertext className=" ms-3">Logout</Oredertext>
                            </Oredericon>
                          </div>
                        </div>
                      </div>
                    </Ordercard>

                    <div className="mt-3">
                      <Profilecard>
                        <div className="ms-3 pt-3">
                          <Hellotext> Frequently Visited: </Hellotext>
                          <Changepasstext>
                            Change Password, Track Order, Help Center.
                          </Changepasstext>
                        </div>
                      </Profilecard>
                    </div>
                  </div>
                </div>

                <div className="col-9 my-4">
                  <Infocard>
                    <div className="ps-4 pt-3 d-flex">
                      <p
                        style={{
                          fontWeight: "500",
                          fontSize: Font.Large,
                        }}
                      >
                        Personal Information
                      </p>

                      <p
                        className="ps-3 mt-1"
                        style={{
                          fontWeight: "500",
                          fontSize: Font.Small,
                          color: Colors.Primary,
                        }}
                      >
                        Edit
                      </p>
                    </div>

                    <div className="ps-4 pt-3 d-flex">
                      <Inputtype
                        type="text"
                        placeholder="First Name"
                      ></Inputtype>

                      <Inputtype
                        className="ms-2"
                        type="text"
                        placeholder="Last Name"
                      ></Inputtype>

                      <Savebtn className="ms-3"> SAVE </Savebtn>
                    </div>

                    <p
                      className="ps-4 pt-3"
                      style={{
                        fontWeight: "500",
                        fontSize: Font.Medium,
                      }}
                    >
                      Your Gender{" "}
                    </p>

                    <div className="ps-4 pt-2 d-flex">
                      <Radiobtn type="radio"></Radiobtn>
                      <p
                        className="ps-2"
                        style={{
                          fontWeight: "500",
                          fontSize: Font.Medium,
                        }}
                      >
                        Male
                      </p>

                      <Radiobtn className="ms-5" type="radio"></Radiobtn>
                      <p
                        className="ps-2"
                        style={{
                          fontWeight: "500",
                          fontSize: Font.Medium,
                        }}
                      >
                        Female
                      </p>
                    </div>

                    <div className="ps-4 pt-5 d-flex">
                      <p
                        style={{
                          fontWeight: "500",
                          fontSize: Font.Large,
                        }}
                      >
                        Email Address
                      </p>

                      <p
                        className="ps-3 mt-1"
                        style={{
                          fontWeight: "500",
                          fontSize: Font.Small,
                          color: Colors.Primary,
                        }}
                      >
                        Edit
                      </p>

                      <p
                        className="ps-3 mt-1"
                        style={{
                          fontWeight: "500",
                          fontSize: Font.Small,
                          color: Colors.Primary,
                        }}
                      >
                        Change Password
                      </p>
                    </div>

                    <div className="ps-4 pt-3 d-flex">
                      <Inputtype
                        type="email"
                        placeholder="Email Address"
                      ></Inputtype>

                      <Savebtn className="ms-3"> SAVE </Savebtn>
                    </div>

                    <div className="ps-4 pt-5 d-flex">
                      <p
                        style={{
                          fontWeight: "500",
                          fontSize: Font.Large,
                        }}
                      >
                        Mobile Number
                      </p>

                      <p
                        className="ps-3 mt-1"
                        style={{
                          fontWeight: "500",
                          fontSize: Font.Small,
                          color: Colors.Primary,
                        }}
                      >
                        Edit
                      </p>
                    </div>

                    <div className="ps-4 pt-3 d-flex">
                      <Inputtype
                        type="number"
                        placeholder="  Mobile Number"
                      ></Inputtype>

                      <Savebtn className="ms-3"> SAVE </Savebtn>
                    </div>

                    <div className="ps-4 pt-5 d-flex">
                      <p
                        style={{
                          fontWeight: "500",
                          fontSize: Font.Large,
                        }}
                      >
                        FAQs
                      </p>
                    </div>

                    <div className="ps-4 pt-3">
                      <p
                        style={{
                          fontWeight: "500",
                          fontSize: Font.Small,
                        }}
                      >
                        What happens when I update my email address (or mobile
                        number)?
                      </p>

                      <p
                        className="pt-1"
                        style={{
                          fontSize: Font.Small,
                        }}
                      >
                        Your login email id (or mobile number) changes,
                        likewise. You'll receive all your account related
                        communication on your updated email address (or mobile
                        number).
                      </p>
                    </div>

                    <div className="ps-4 pt-3">
                      <p
                        style={{
                          fontWeight: "500",
                          fontSize: Font.Small,
                        }}
                      >
                        When will my Flipkart account be updated with the new
                        email address (or mobile number)?
                      </p>

                      <p
                        className="pt-1"
                        style={{
                          fontSize: Font.Small,
                        }}
                      >
                        It happens as soon as you confirm the verification code
                        sent to your email (or mobile) and save the changes.
                      </p>
                    </div>

                    <div className="ps-4 pt-3">
                      <p
                        style={{
                          fontWeight: "500",
                          fontSize: Font.Small,
                        }}
                      >
                        {" "}
                        What happens to my existing Flipkart account when I
                        update my email address (or mobile number)?
                      </p>

                      <p
                        className="pt-1"
                        style={{
                          fontSize: Font.Small,
                        }}
                      >
                        Updating your email address (or mobile number) doesn't
                        invalidate your account. Your account remains fully
                        functional. You'll continue seeing your Order history,
                        saved information and personal details.
                      </p>
                    </div>

                    <div className="ps-4 pt-3">
                      <p
                        style={{
                          fontWeight: "500",
                          fontSize: Font.Small,
                        }}
                      >
                        Does my Seller account get affected when I update my
                        email address?{" "}
                      </p>

                      <p
                        className="pt-1"
                        style={{
                          fontSize: Font.Small,
                        }}
                      >
                        Flipkart has a 'single sign-on' policy. Any changes will
                        reflect in your Seller account also.
                      </p>
                    </div>

                    <div className="ps-4 pt-4">
                      <p
                        style={{
                          fontWeight: "500",
                          fontSize: Font.Small,
                          color: Colors.Primary,
                        }}
                      >
                        Deactivate Account
                      </p>
                    </div>

                    <div>
                      <div>
                        <img
                          src={logoimg2}
                          style={{
                            height: "180px",
                            width: "800px",
                            marginLeft: "15px",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                    </div>
                  </Infocard>
                </div>
              </div>
            </div>
          </div>
        </Cardbackground>

        <Footer />
      </div>
    </div>
  );
}
