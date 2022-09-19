import React from "react";
import Header from "../components/Header";
import TopNav from "../components/TopNav";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import styled from "styled-components";
import { Colors } from "../config/Colors";
import { Font } from "../config/Font";
import ProductImage from "../assets/images/product2.jpg";

const Cardbackground = styled.div({
  height: "1030px",
  width: "100%",
  backgroundColor: Colors.LightBlue,
  borderBottom: "1px solid grey",
});

const Bluecard = styled.div({
  height: "35px",
  width: "700px",
  backgroundColor: Colors.Primary,
  boxShadow: "1px 1px 8px   lightgrey",
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

const Cartcard2 = styled.div({
  height: "570px",
  width: "700px",
  backgroundColor: Colors.creamy,
  boxShadow: "1px 1px 8px   lightgrey",
  borderRadius: "2px",
});

const Asustext = styled.p({
  fontSize: Font.Small,
  fontWeight: "500",
  marginTop: "50px",
});

const Asustext1 = styled.p({
  fontSize: Font.ExtraSmall,
  fontWeight: "500",
  color: Colors.Grey,
});

const Asustext2 = styled.p({
  fontSize: Font.Small,
  fontWeight: "450",
  color: Colors.Grey,
});

const Asustext3 = styled.p({
  fontSize: Font.Small,
  color: Colors.Green,
  fontWeight: " 500",
});

const Asustext4 = styled.p({
  fontSize: Font.Small,
  fontWeight: "500",
});

const Savefont = styled.p({
  fontSize: Font.Small,
  fontWeight: "500",
  color: Colors.lightGreen,
});

const Removefont = styled.p({
  fontSize: Font.Small,
  fontWeight: "500",
  color: Colors.lightRed,
});

const Deliveryfee = styled.p({
  fontSize: Font.Small,
  fontWeight: "500",
});

const Policytext = styled.p({
  fontSize: Font.ExtraSmall,
  color: Colors.Grey,
  fontWeight: "500",
});

const Line = styled.div({
  height: "1px",
  width: "100%",
  backgroundColor: Colors.GreyLight,
});

const Orderbtn = styled.button({
  height: "40px",
  width: "200px",
  backgroundColor: Colors.Primary,
  boxShadow: "0 1px 2px 0 rgb(0 0 0 / 20%)",
  border: "none",
  color: "white",
  fontSize: Font.Medium,
  fontWeight: "500",
  marginTop: "10px",
  marginLeft: "480px",
});

const Addcard2 = styled.div({
  height: "40px",
  width: "700px",
  backgroundColor: Colors.creamy,
  boxShadow: "1px 1px 8px   lightgrey",
  borderRadius: "2px",
});

const OrdersumText = styled.p({
  fontWeight: "500",
  fontSize: Font.Medium,
  color: Colors.Grey,
});

const Gsttext = styled.p({
  fontWeight: "500",
  fontSize: Font.Medium,
});

const Detailstext = styled.p({
  fontWeight: "500",
  fontSize: Font.Medium,
  color: Colors.Primary,
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
  marginLeft: "100px",
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
                    <Bluecard>
                      <div className="pt-2 ps-3 d-flex">
                        <Twotext>3</Twotext>

                        <Delivertext className="ps-2">
                          {" "}
                          ORDER SUMMARY
                        </Delivertext>
                      </div>
                    </Bluecard>
                  </div>

                  <Cartcard2>
                    <div className="d-flex">
                      <img
                        src={ProductImage}
                        style={{
                          height: "100px",
                          width: "150px",
                          paddingLeft: "20px",
                          paddingTop: "20px",
                          marginTop: "15px",
                        }}
                      />

                      <div className="container pt-3">
                        <Asustext>
                          {" "}
                          ASUS VivoBook 15 (2022) Core i3 10th Gen - (8
                          GB/512....
                        </Asustext>
                        <Asustext1>
                          15.6 inch, Transparent Silver, 1.80 kg, With MS Office
                        </Asustext1>
                        <Asustext2> Seller:TBL Online</Asustext2>
                        <div>
                          <div className="d-flex pt-3">
                            <Asustext>₹50$</Asustext>
                            <Asustext3 className="ps-4">
                              27% Off6 offers applied
                            </Asustext3>
                          </div>
                          <div>
                            <Asustext4>Or Pay ₹50$ + 0.1$</Asustext4>
                          </div>
                          <div className="d-flex">
                            <Savefont className=" pt-2">
                              {" "}
                              SAVE FOR LATER{" "}
                            </Savefont>

                            <Removefont className=" pt-2 ps-4">
                              {" "}
                              REMOVE
                            </Removefont>
                          </div>
                        </div>
                      </div>

                      <div className="deliveryfeetext  ">
                        <Deliveryfee className=" deliveryfee ">
                          Delivery by Thu May 26 | ₹5$
                        </Deliveryfee>
                        <Policytext className="pt-2">
                          7 Days Replacement Policy
                        </Policytext>
                      </div>
                    </div>

                    <div className="pt-2">
                      <Line></Line>
                    </div>

                    <div className="d-flex">
                      <img
                        src={ProductImage}
                        style={{
                          height: "100px",
                          width: "150px",
                          paddingLeft: "20px",
                          paddingTop: "20px",
                          marginTop: "15px",
                        }}
                      />

                      <div className="container pt-3">
                        <Asustext>
                          {" "}
                          ASUS VivoBook 15 (2022) Core i3 10th Gen - (8
                          GB/512....
                        </Asustext>
                        <Asustext1>
                          15.6 inch, Transparent Silver, 1.80 kg, With MS Office
                        </Asustext1>
                        <Asustext2> Seller:TBL Online</Asustext2>
                        <div>
                          <div className="d-flex pt-3">
                            <Asustext>₹50$</Asustext>
                            <Asustext3 className="ps-4">
                              27% Off6 offers applied
                            </Asustext3>
                          </div>
                          <div>
                            <Asustext4>Or Pay ₹50$ + 0.1$</Asustext4>
                          </div>
                          <div className="d-flex">
                            <Savefont className=" pt-2">
                              {" "}
                              SAVE FOR LATER{" "}
                            </Savefont>

                            <Removefont className=" pt-2 ps-4">
                              {" "}
                              REMOVE
                            </Removefont>
                          </div>
                        </div>
                      </div>

                      <div className="deliveryfeetext  ">
                        <Deliveryfee className=" deliveryfee ">
                          Delivery by Thu May 26 | ₹5$
                        </Deliveryfee>
                        <Policytext className="pt-2">
                          7 Days Replacement Policy
                        </Policytext>
                      </div>
                    </div>

                    <div className="pt-2">
                      <Line></Line>
                    </div>

                    <div className="d-flex">
                      <img
                        src={ProductImage}
                        style={{
                          height: "100px",
                          width: "150px",
                          paddingLeft: "20px",
                          paddingTop: "20px",
                          marginTop: "15px",
                        }}
                      />

                      <div className="container pt-3">
                        <Asustext>
                          {" "}
                          ASUS VivoBook 15 (2022) Core i3 10th Gen - (8
                          GB/512....
                        </Asustext>
                        <Asustext1>
                          15.6 inch, Transparent Silver, 1.80 kg, With MS Office
                        </Asustext1>
                        <Asustext2> Seller:TBL Online</Asustext2>
                        <div>
                          <div className="d-flex pt-3">
                            <Asustext>₹50$</Asustext>
                            <Asustext3 className="ps-4">
                              27% Off6 offers applied
                            </Asustext3>
                          </div>
                          <div>
                            <Asustext4>Or Pay ₹50$ + 0.1$</Asustext4>
                          </div>
                          <div className="d-flex">
                            <Savefont className=" pt-2">
                              {" "}
                              SAVE FOR LATER{" "}
                            </Savefont>

                            <Removefont className=" pt-2 ps-4">
                              {" "}
                              REMOVE
                            </Removefont>
                          </div>
                        </div>
                      </div>

                      <div className="deliveryfeetext  ">
                        <Deliveryfee className=" deliveryfee ">
                          Delivery by Thu May 26 | ₹5$
                        </Deliveryfee>
                        <Policytext className="pt-2">
                          7 Days Replacement Policy
                        </Policytext>
                      </div>
                    </div>
                  </Cartcard2>

                  <div className="mt-3">
                    <Addcard2>
                      <div className="pt-2 ps-3 d-flex">
                        <Gsttext>GST Invoice not available</Gsttext>

                        <Detailstext className="ps-2"> Details</Detailstext>
                      </div>
                    </Addcard2>
                  </div>

                  <div className="pt-3">
                    <Logincard>
                      <div className="d-flex ">
                        <Gsttext className=" ps-3 pt-4">
                          Order confirmation email will be sent to :
                          www.xxxxx9999@gmail.com{" "}
                        </Gsttext>
                        <div className="pt-3">
                          <Continuerbtn>CONTINUE</Continuerbtn>
                        </div>
                      </div>
                    </Logincard>
                  </div>

                  <div className="mt-3">
                    <Addcard2>
                      <div className="ps-3 pt-2 d-flex">
                        <OneText className="pt-1">4</OneText>

                        <OrdersumText className="ps-3 pt-1">
                          PAYMENT OPTION{" "}
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
