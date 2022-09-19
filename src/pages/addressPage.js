import React from "react";
import Header from "../components/Header";
import TopNav from "../components/TopNav";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import styled from "styled-components";
import { Colors } from "../config/Colors";
import { Font } from "../config/Font";
import { left } from "@popperjs/core";
import { AiOutlinePlus } from "react-icons/ai";

const Cardbackground = styled.div({
  height: "900px",
  width: "100%",
  backgroundColor: Colors.LightBlue,
});

const Logincard = styled.div({
  height: "70px",
  width: "700px",
  backgroundColor: Colors.creamy,
  boxShadow: "1px 1px 8px   lightgrey",
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
  height: "550px",
  width: "700px",
  backgroundColor: Colors.creamy,
  boxShadow: "1px 1px 8px   lightgrey",
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

const Editaddtext = styled.p({
  color: Colors.Primary,
  fontWeight: "500",
  fontSize: Font.Medium,
});

const Locationbtn = styled.button({
  height: "40px",
  width: "200px",
  backgroundColor: Colors.Primary,
  boxShadow: "0 1px 2px 0 rgb(0 0 0 / 20%)",
  border: "none",
  color: "white",
  fontSize: Font.Medium,
  fontWeight: "500",
  marginTop: "13px",
  marginLeft: "38px",
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

const Inputadd = styled.input({
  padding: "8px 10px 10px 0",
  width: "516px",
  height: "80px",
  fontSize: " 12px",
  fontWeight: "500",
  backgroundColor: Colors.creamy,
  border: "2px solid lightgrey",
  marginLeft: "14px",
  outline: "none",
});

const Addtypetext = styled.p({
  fontSize: " 12px",
  fontWeight: "500",
  color: Colors.Grey,
});

const Hometext = styled.p({
  fontWeight: "500",
  fontSize: Font.Medium,
});

const Addcard2 = styled.div({
  height: "40px",
  width: "700px",
  backgroundColor: Colors.creamy,
  boxShadow: "1px 1px 8px   lightgrey",
  borderRadius: "2px",
});

const Plusicon = styled.div({
  color: Colors.Primary,
  paddingTop: "8px",
});

const Addnewtext = styled.p({
  fontSize: Font.Medium,
  fontWeight: "500",
});

const OrdersumText = styled.p({
  fontWeight: "500",
  fontSize: Font.Medium,
  color: Colors.Grey,
});

const Pricedetailcard = styled.div({
  height: "370px",
  width: "300px",
  backgroundColor: Colors.creamy,
  boxShadow: "1px 1px 8px   lightgrey",
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

        <Cardbackground className="">
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
                    <Bluecard>
                      <div className="pt-2 ps-3 d-flex">
                        <Twotext>2</Twotext>

                        <Delivertext className="ps-2">
                          {" "}
                          DELIVERY ADDRESS
                        </Delivertext>
                      </div>
                    </Bluecard>
                  </div>

                  <Addcard>
                    <div className="d-flex pt-3 ps-3">
                      <Radiobtn type="radio"></Radiobtn>
                      <Editaddtext className="ps-2">EDIT ADDRESS</Editaddtext>
                    </div>

                    <Locationbtn> Use my current location </Locationbtn>

                    <div className="ps-4 pt-3">
                      <Inputtype type="text" placeholder="Name"></Inputtype>

                      <Inputtype
                        type="number"
                        placeholder="10-digit mobile number"
                      ></Inputtype>
                    </div>

                    <div className="ps-4 pt-3">
                      <Inputtype
                        type="number"
                        placeholder="Pincode"
                      ></Inputtype>

                      <Inputtype type="text" placeholder="Locality"></Inputtype>
                    </div>

                    <div className="pt-3 ps-4">
                      <Inputadd
                        type="text"
                        placeholder="Address (Area and Street)"
                      ></Inputadd>
                    </div>

                    <div className="ps-4 pt-3">
                      <Inputtype
                        type="text"
                        placeholder="City/District/Town"
                      ></Inputtype>

                      <Inputtype type="text" placeholder="State"></Inputtype>
                    </div>

                    <div className="ps-4 pt-3">
                      <Inputtype
                        type="text"
                        placeholder="Landmark (Optional)"
                      ></Inputtype>

                      <Inputtype
                        type="number"
                        placeholder="Alternate Phone (Optional)"
                      ></Inputtype>
                    </div>

                    <Addtypetext className="ps-5 pt-3">
                      {" "}
                      Address Type{" "}
                    </Addtypetext>

                    <div className="d-flex">
                      <div className="d-flex pt-1 ps-5">
                        <Radiobtn type="radio"></Radiobtn>
                        <Hometext className="ps-2">
                          Home (All day delivery)
                        </Hometext>
                      </div>

                      <div className="d-flex pt-1 ps-5">
                        <Radiobtn type="radio"></Radiobtn>
                        <Hometext className="ps-2">
                          Work (Delivery between 10 AM - 5 PM)
                        </Hometext>
                      </div>
                    </div>

                    <div className=" d-flex  pt-3">
                      <Locationbtn> SAVE AND DELIVER HERE</Locationbtn>

                      <Editaddtext className="ps-4 pt-4">CANCEL</Editaddtext>
                    </div>
                  </Addcard>

                  <div className="pt-3">
                    <Addcard2>
                      <Plusicon className=" d-flex">
                        <div className="ps-3 ">
                          <AiOutlinePlus />
                        </div>

                        <Addnewtext className="pt-1 ps-3">
                          Add a new address
                        </Addnewtext>
                      </Plusicon>
                    </Addcard2>
                  </div>

                  <div className="pt-3">
                    <Addcard2>
                      <div className="ps-3 pt-2 d-flex">
                        <OneText className="pt-1">3</OneText>

                        <OrdersumText className="ps-3 pt-1">
                          ORDER SUMMARY{" "}
                        </OrdersumText>
                      </div>
                    </Addcard2>
                  </div>

                  <div className="pt-3">
                    <Addcard2>
                      <div className="ps-3 pt-2 d-flex">
                        <OneText className="pt-1">4</OneText>

                        <OrdersumText className="ps-3 pt-1">
                          PAYMENT OPTIONS{" "}
                        </OrdersumText>
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
