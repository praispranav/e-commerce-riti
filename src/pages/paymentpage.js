import React from "react";
import Header from "../components/Header";
import TopNav from "../components/TopNav";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import styled from "styled-components";
import { Colors } from "../config/Colors";
import { Font } from "../config/Font";
import { AiOutlinePlus } from "react-icons/ai";

const Cardbackground = styled.div({
  height: "1080px",
  width: "100%",
  backgroundColor: Colors.LightBlue,
  borderBottom: "1px solid grey",
});

const Logincard = styled.div({
  height: "70px",
  width: "700px",
  backgroundColor: Colors.creamy,
  boxShadow: "1px 3px 3px  grey",
  borderRadius: "2px",
});

const OneText = styled.p({
  color: Colors.Primary,
  backgroundColor: Colors.LightGrey2,
  height: "18px",
  width: "18px",
  borderRadius: "1px",
  fontSize: Font.ExtraSmall,
  fontWeight: "500",
  textAlign: "center",
});

const Loginfont = styled.p({
  color: Colors.Grey,
  fontSize: Font.Normal,
  fontWeight: "500",
});

const Customerfont = styled.p({
  fontWeight: "500",
  fontSize: Font.Small,
});

const Changebtn = styled.button({
  border: "1px solid #e0e0e0",
  backgroundColor: Colors.White,
  borderRadius: "4px",
  padding: "4px 10px",
  color: Colors.Primary,
  cursor: "pointer",
  fontWeight: "500",
  boxShadow: "0 0 2px rgb(0 0 0 / 12%)",
  fontSize: Font.Small,
});

const Bluecard = styled.div({
  height: "35px",
  width: "700px",
  backgroundColor: Colors.Primary,
  boxShadow: "1px 3px 3px  grey",
  borderRadius: "2px",
});

const Twotext = styled.p({
  color: Colors.Primary,
  backgroundColor: Colors.LightGrey2,
  height: "18px",
  width: "18px",
  borderRadius: "1px",
  fontSize: Font.ExtraSmall,
  fontWeight: "500",
  textAlign: "center",
});

const Delivertext = styled.p({
  fontWeight: "500",
  color: Colors.White,
  fontSize: Font.Normal,
});

const Addcard = styled.div({
  height: "670px",
  width: "700px",
  backgroundColor: Colors.creamy,
  boxShadow: "1px 3px 3px  grey",
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

const Inputtype = styled.input({
  padding: "8px 10px 10px 0",
  width: "250px",
  fontSize: " 12px    ",
  fontWeight: "500",
  backgroundColor: Colors.creamy,
  border: "2px solid lightgrey",
  marginLeft: "14px",
  outline: "none",
});

const Continuerbtn = styled.button({
  height: "40px",
  width: "120px",
  backgroundColor: Colors.Primary,
  boxShadow: "0 1px 2px 0 rgb(0 0 0 / 20%)",
  border: "none",
  color: "white",
  fontSize: Font.Medium,
  fontWeight: "500",
  marginLeft: "10px",
});

const Inputtype2 = styled.input({
  padding: "8px 10px 10px 0",
  width: "120px",
  fontSize: " 12px    ",
  fontWeight: "500",
  backgroundColor: Colors.creamy,
  border: "2px solid lightgrey",
  marginLeft: "14px",
  outline: "none",
});

const Line = styled.div({
  height: "1px",
  width: "100%",
  backgroundColor: Colors.GreyLight,
});

const Continuerbtn2 = styled.button({
  height: "40px",
  width: "160px",
  backgroundColor: Colors.Primary,
  boxShadow: "0 1px 2px 0 rgb(0 0 0 / 20%)",
  border: "none",
  color: "white",
  fontSize: Font.Medium,
  fontWeight: "500",
  marginLeft: "10px",
});

const Addcard2 = styled.div({
  height: "40px",
  width: "700px",
  backgroundColor: Colors.creamy,
  boxShadow: "1px 3px 3px  grey",
  borderRadius: "2px",
});

const Plusicon = styled.div({
  color: Colors.Primary,
  paddingTop: "8px",
});

const Pricedetailcard = styled.div({
  height: "370px",
  width: "300px",
  backgroundColor: Colors.creamy,
  boxShadow: "1px 3px 3px  grey",
  borderRadius: "2px",
});

const Pricedetailtext = styled.p({
  fontSize: Font.Normal,
  fontWeight: "500",
  color: Colors.Grey,
});

const Priceline = styled.div({
  width: "100%",
  height: "1px",
  backgroundColor: Colors.GreyLight,
});

const Pricedetailtext1 = styled.div({
  fontSize: Font.Medium,
  fontFamily: "    Sans-Serif",
});

const Pricediscount = styled.p({
  color: Colors.Green,
});

const Priceline1 = styled.div({
  width: "100%",
  height: "1px",
  backgroundColor: Colors.GreyLight,
});

const Totalamount = styled.p({
  fontWeight: "600",
  fontSize: Font.Normal,
});

const LastFont = styled.p({
  fontWeight: "500",
  color: Colors.Green,
  fontSize: Font.Medium,
});

const Lasttext = styled.p({
  fontSize: Font.Small,
  fontWeight: "500",
  backgroundColor: Colors.lightOrange,
  height: "54px",
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
                <div className="col-8 my-4">
                  <Logincard>
                    <div>
                      <div className="container pt-3">
                        <div className="d-flex">
                          <div className="d-flex ">
                            <OneText>1</OneText>
                            <div className="logintext ps-2">
                              <Loginfont> LOGIN </Loginfont>
                              <div className="d-flex">
                                <Customerfont> Flipkart</Customerfont>

                                <Customerfont>Customer</Customerfont>

                                <Customerfont> +999xxxxxxx</Customerfont>
                              </div>
                            </div>
                          </div>

                          <div>
                            <Changebtn className=" mt-2 ">Change</Changebtn>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Logincard>

                  <div className="mt-3">
                    <Logincard>
                      <div>
                        <div className="container pt-3">
                          <div className="d-flex">
                            <div className="d-flex ">
                              <OneText>2</OneText>
                              <div className="logintext ps-2">
                                <Loginfont> DELIVERY ADDRESS </Loginfont>
                                <div className="d-flex">
                                  <Customerfont> Flipkart</Customerfont>

                                  <Customerfont>Customer</Customerfont>

                                  <Customerfont> +999xxxxxxx</Customerfont>
                                </div>
                              </div>
                            </div>

                            <div>
                              <Changebtn className=" mt-2 ">Change</Changebtn>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Logincard>
                  </div>

                  <div className="mt-3">
                    <Logincard>
                      <div>
                        <div className="container pt-3">
                          <div className="d-flex">
                            <div className="d-flex ">
                              <OneText>3</OneText>
                              <div className="logintext ps-2">
                                <Loginfont> ORDER SUMMARY </Loginfont>
                                <div className="d-flex">
                                  <Customerfont> 3 Items</Customerfont>
                                  <Customerfont>(Flipkart</Customerfont>

                                  <Customerfont className="ps-1 ">
                                    Customer){" "}
                                  </Customerfont>
                                </div>
                              </div>
                            </div>

                            <div>
                              <Changebtn className=" mt-2 ">Change</Changebtn>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Logincard>
                  </div>

                  <div className="mt-3">
                    <Bluecard>
                      <div className="pt-2 ps-3 d-flex">
                        <Twotext>4</Twotext>

                        <Delivertext className="ps-2">
                          {" "}
                          PAYMENT OPTIONS
                        </Delivertext>
                      </div>
                    </Bluecard>
                  </div>

                  <Addcard>
                    <div className="d-flex pt-3 ps-3">
                      <Radiobtn type="radio"></Radiobtn>

                      <p
                        className="ps-3"
                        style={{
                          fontWeight: "500",
                          fontSize: Font.Medium,
                        }}
                      >
                        UPI
                      </p>
                    </div>

                    <div className="ms-5 mt-2">
                      <p
                        style={{
                          fontWeight: "500",
                          fontSize: Font.Small,
                        }}
                      >
                        Choose an option
                      </p>

                      <div className="d-flex pt-2 ">
                        <Radiobtn type="radio"></Radiobtn>

                        <p
                          className="ps-3"
                          style={{
                            fontSize: Font.Medium,
                          }}
                        >
                          PhonePe
                        </p>
                      </div>

                      <div className="d-flex pt-2 ">
                        <Radiobtn type="radio"></Radiobtn>

                        <p
                          className="ps-3"
                          style={{
                            fontSize: Font.Medium,
                          }}
                        >
                          Your UPI ID
                        </p>
                      </div>
                    </div>

                    <Line className="mt-4"></Line>

                    <div className="d-flex pt-4 ps-3">
                      <Radiobtn type="radio"></Radiobtn>

                      <p
                        className="ps-3"
                        style={{
                          fontWeight: "500",
                          fontSize: Font.Medium,
                        }}
                      >
                        Wallets
                      </p>
                    </div>

                    <div className="ms-5 mt-2">
                      <div className="d-flex  ">
                        <Radiobtn type="radio"></Radiobtn>

                        <p
                          className="ps-3"
                          style={{
                            fontWeight: "500",
                            fontSize: Font.Small,
                          }}
                        >
                          Paytm
                        </p>
                      </div>

                      <div className="ps-3 pt-3">
                        <Inputtype
                          type="number"
                          placeholder="Enter Paytm linked no."
                        ></Inputtype>

                        <Continuerbtn>CONTINUE</Continuerbtn>
                      </div>
                    </div>

                    <Line className="mt-4"></Line>

                    <div className="d-flex pt-4 ps-3">
                      <Radiobtn type="radio"></Radiobtn>

                      <p
                        className="ps-3"
                        style={{
                          fontWeight: "500",
                          fontSize: Font.Medium,
                        }}
                      >
                        Credit/Debit/ATM Card
                      </p>
                    </div>

                    <div className="ps-4 pt-3">
                      <Inputtype
                        style={{
                          marginLeft: "20px",
                        }}
                        type="number"
                        placeholder="Enter Card Number"
                      ></Inputtype>
                    </div>

                    <div className="ps-4 pt-3">
                      <Inputtype2
                        style={{
                          marginLeft: "20px",
                        }}
                        type="dob"
                        placeholder="Expiry Date"
                      ></Inputtype2>

                      <Inputtype2
                        style={{
                          marginLeft: "10px",
                        }}
                        type="dob"
                        placeholder="CVV"
                      ></Inputtype2>
                    </div>

                    <div className="ps-4 pt-3">
                      <Continuerbtn
                        style={{
                          marginLeft: "20px",
                        }}
                      >
                        PAY $150
                      </Continuerbtn>
                    </div>

                    <Line className="mt-4"></Line>

                    <div className="d-flex pt-4 ps-3">
                      <Radiobtn type="radio"></Radiobtn>

                      <p
                        className="ps-3"
                        style={{
                          fontWeight: "500",
                          fontSize: Font.Medium,
                        }}
                      >
                        Cash on Delivery
                      </p>
                    </div>

                    <div className="ps-4 pt-3">
                      <Continuerbtn2
                        style={{
                          marginLeft: "20px",
                        }}
                      >
                        CONFIRM ORDER
                      </Continuerbtn2>
                    </div>
                  </Addcard>

                  <div className="mt-3">
                    <Addcard2>
                      <div className=" d-flex">
                        <Plusicon>
                          <div className="ps-3 ">
                            <AiOutlinePlus />
                          </div>
                        </Plusicon>

                        <p
                          className="ps-2 pt-2"
                          style={{
                            fontWeight: "500",
                            fontSize: Font.Medium,
                          }}
                        >
                          Add Gift Card
                        </p>
                      </div>
                    </Addcard2>
                  </div>
                </div>

                <div className="col-4 my-4">
                  <Pricedetailcard>
                    <Pricedetailtext className=" ps-4 py-2">
                      {" "}
                      PRICE DETAILS
                    </Pricedetailtext>

                    <Priceline></Priceline>

                    <Pricedetailtext1>
                      <div className=" d-flex justify-content-between align-items-center py-3 ">
                        <p className="ps-4"> Price ( 3 items) </p>
                        <p className="px-4 ">₹150$</p>
                      </div>

                      <div className=" d-flex justify-content-between align-items-center py- 2">
                        <p className="ps-4"> Discount</p>
                        <Pricediscount className="px-4">− ₹15$</Pricediscount>
                      </div>
                      <div className=" d-flex justify-content-between align-items-center py-3">
                        <p className="ps-4">Delivery Charges</p>
                        <p className="px-4">₹5$</p>
                      </div>

                      <div>
                        <Priceline1> </Priceline1>
                      </div>

                      <div className=" d-flex justify-content-between align-items-center py-3">
                        <Totalamount className="ps-4">Total Amount</Totalamount>
                        <Totalamount className="px-4">₹140$</Totalamount>
                      </div>

                      <div>
                        <Priceline1></Priceline1>
                      </div>
                    </Pricedetailtext1>
                    <LastFont className="ps-4 pt-2">
                      You will save ₹14,240 on this order
                    </LastFont>

                    <Priceline className="mt-2"></Priceline>

                    <div className="">
                      <Lasttext className="ps-4 pt-4">
                        Save extra ₹2$ using 2$ SuperCoins on the next step
                      </Lasttext>
                      <Lasttext className="ps-4 pt-3">
                        Available Balance: 2$
                      </Lasttext>
                    </div>
                  </Pricedetailcard>
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
