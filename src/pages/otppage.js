import React from "react";
import Header from "../components/Header";
import TopNav from "../components/TopNav";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import styled from "styled-components";
import { Colors } from "../config/Colors";
import { Font } from "../config/Font";
import LoginImage from "../assets/images/loginimg.jpg";
import { Link } from "react-router-dom";

const Whitebackground = styled.div({
  height: "700px",
  width: "100%",
  backgroundColor: Colors.creamy,
});

const Signupcard = styled.div({
  display: "flex",
  paddingLeft: "370px",
  paddingTop: "85px",
});

const Bluecard = styled.div({
  height: "500px",
  width: "230px",
  backgroundColor: Colors.Primary,
  borderRadius: " 3px",
  color: Colors.White,

  fontFamily: "sans-serif",
});

const BluecardFont = styled.p({
  fontFamily: "sans-serif",
  fontSize: "20px",
});

const BluecardFont2 = styled.p({
  fontFamily: "sans-serif",
  fontSize: Font.Medium,
});

const Whitecard = styled.div({
  height: "500px",
  width: "400px",
  backgroundColor: Colors.White,
  borderRadius: " 3px",
});

const Otpinput = styled.div({
  marginTop: "70px",
  marginLeft: "110px",
});

const Otpenterfont = styled.p({
  fontWeight: "500",
  fontFamily: "sans-serif",
  fontSize: Font.Normal,
  textAlign: "center",
});

const ChangeFont = styled.p({
  fontWeight: "500",
  fontFamily: "sans-serif",
  fontSize: Font.Normal,

  color: Colors.Primary,
});

const Otpenterfont2 = styled.div({
  marginLeft: "130px",
});

const Continuebtn = styled.button({
  backgroundColor: Colors.Primary,
  boxShadow: "0 1px 2px 0 rgb(0 0 0 / 20%)",
  border: "none",
  color: Colors.White,
  width: "320px",
  height: "48px",
  fontSize: Font.Normal,
  borderRadius: "2px",
  fontWeight: "500",
  marginLeft: "40px",
});

const Notrecievefont = styled.p({
  fontWeight: "500",
  color: Colors.Grey,
  fontSize: Font.Small,
});

const Resendfont = styled.p({
  fontWeight: "500",
  color: Colors.Primary,
  fontSize: Font.Small,
});

const Notrecievefont2 = styled.div({
  marginLeft: "90px",
});
export default function addressPage() {
  return (
    <div className="w-100 h-100 m-0 p-0">
      <div>
        <TopNav />
        <Header />
        <SearchBar selectedCategory={"All Categories"} queryParams={""} />

        <div>
          <Whitebackground>
            <Signupcard>
              <Bluecard>
                <BluecardFont className="pt-4 ps-3"> Login </BluecardFont>
                <BluecardFont2 className="pt-2 ps-3">
                  Get access to your Orders, Wishlist and Recommendations
                </BluecardFont2>
                <div>
                  <img
                    src={LoginImage}
                    style={{
                      height: "200px",
                      width: "200px",
                      marginTop: "180px",
                      marginLeft: "15px",
                    }}
                  />
                </div>
              </Bluecard>

              <Whitecard>
                <div className="pt-5 mt-3">
                  <Otpenterfont>Please enter the OTP sent to</Otpenterfont>
                  <Otpenterfont2>
                    <div className="d-flex ">
                      <Otpenterfont>999xxxxxxx.</Otpenterfont>
                      <ChangeFont>Change</ChangeFont>
                    </div>
                  </Otpenterfont2>
                  <Otpinput>
                    <div>
                      <div id="otp-holder">
                        <div id="otp-content">
                          <input
                            id="otp-input"
                            type="tel"
                            maxlength="6"
                            pattern="\d{6}"
                            autocomplete="off"
                          />
                        </div>
                      </div>
                    </div>
                  </Otpinput>

                  <div className="pt-4">
                    <Link to={"/"}>
                    <Continuebtn type="submit">Verify</Continuebtn>
                    </Link>
                  </div>
                  <Notrecievefont2>
                    <div className="d-flex pt-4 ">
                      <Notrecievefont>Not received your code?</Notrecievefont>
                      <Resendfont className="ps-1"> Resend code</Resendfont>
                    </div>
                  </Notrecievefont2>
                </div>
              </Whitecard>
            </Signupcard>
          </Whitebackground>
        </div>

        <Footer />
      </div>
    </div>
  );
}
