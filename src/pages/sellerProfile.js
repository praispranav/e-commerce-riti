import React from "react";
import Header from "../components/Header";
import TopNav from "../components/TopNav";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import styled from "styled-components";
import { Colors } from "../config/Colors";
import { Font } from "../config/Font";
import Profile from "../assets/images/profile.png";
import { MdProductionQuantityLimits } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { MdStarOutline, MdStar } from "react-icons/md";
import { Circle } from "@mui/icons-material";

const Cardbackground = styled.div({
  height: "750px",
  width: "100%",
  backgroundColor: Colors.LightBlue,
});

const Profilecard = styled.div({
  width: "100%",
  height: "70px",
  backgroundColor: Colors.creamy,
  boxShadow: "1px 3px 3px  grey",
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
  boxShadow: "1px 3px 3px  grey",
  borderRadius: "2px",
});

const Oredericon = styled.div({
  color: Colors.Primary,
  paddingTop: "8px",
  paddingLeft: "10px",
  fontWeight: "500",
  fontSize: "20px",
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

const Profileinfotext = styled.p({
  fontWeight: "500",
  fontSize: Font.ExtraLarge,
  color: Colors.Grey,
});

const Infocard = styled.div({
  height: "200px",
  width: "100%",
  backgroundColor: Colors.creamy,
  boxShadow: "1px 3px 3px  grey",
});

const Infocard2 = styled.div({
  height: "693px",
  width: "100%",
  backgroundColor: Colors.creamy,
  boxShadow: "1px 3px 3px  grey",
});

const Infocard3 = styled.div({
  height: "477px",
  width: "100%",
  backgroundColor: Colors.creamy,
  boxShadow: "1px 3px 3px  grey",
});


const Circle2 = styled.div({
  height: "100px",
  width: "100px",
  border: "10px solid blue",
  borderRadius: "100%",
});

const RatingCard = styled.div({
  height: "120px",
  width: "300px",
});

const CommentInput = styled.textarea({
  fontWeight: "500",
  fontSize: Font.Small,
  outline: "none",
  backgroundColor: Colors.LightBlue,
  border: "none",
  borderRadius: "3px",
  width: "100%",
  height: "150px",
});

const Submitbtn = styled.button({
  outline:"none",
  backgroundColor:Colors.Primary,
  color:"white",
  fontSize:Font.Small,
  border:"none",
  height:"30px",
  width:"80px",
  borderRadius:"5px ",
})

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
                        <div>
                          <Hellotext1 className="mt-3 ms-2">
                            Seller Name
                          </Hellotext1>
                          <MdStar
                            className="ms-1"
                            style={{ color: "red" }}
                          />
                          <MdStar style={{ color: "blue" }} />
                          <MdStar style={{ color: "blue" }} />
                          <MdStar style={{ color: "green" }} />
                          <MdStarOutline
                            style={{ color: "green" }}
                          />
                        </div>
                      </div>
                    </div>
                  </Profilecard>
                  <div className="pt-3">
                    <Ordercard>
                      <Oredericon className="d-flex   pt-3    ">
                        <Oredertext className=" ps-3">
                          SELLER DETAILS
                        </Oredertext>
                        <div className="ms-5">
                          <IoIosArrowForward
                            className="ms-5"
                            style={{ marginBottom: "20px" }}
                          />
                        </div>
                      </Oredericon>
                      <Line />

                      <div className="container mt-3">
                        <Profileinfotext>Account details</Profileinfotext>
                        <div className="d-flex">
                          <Hellotext className="mt-1">E-MAIL :</Hellotext>
                          <Hellotext className="ms-2 pt-1">
                            xxxxxx@gmail.com
                          </Hellotext>
                        </div>
                        <div className="d-flex">
                          <Hellotext className="mt-1">PHONE NUMBER :</Hellotext>
                          <Hellotext className="ms-2 pt-1">
                            +31541354415
                          </Hellotext>
                        </div>
                        <Line className="mt-2" />
                        <Profileinfotext className="mt-2">
                          Business Information
                        </Profileinfotext>
                        <div className="d-flex">
                          <Hellotext className="mt-1">GSTIN :</Hellotext>
                          <Hellotext className="ms-2 pt-1">
                            GSM31541354415
                          </Hellotext>
                        </div>
                        <div className="d-flex">
                          <Hellotext className="mt-1">PAN NUMBER :</Hellotext>
                          <Hellotext className="ms-2 pt-1">
                            31541354415
                          </Hellotext>
                        </div>
                        <Line className="mt-2" />
                        <Profileinfotext className="mt-2">
                          DESCRIPTION
                        </Profileinfotext>
                        <Hellotext className="mt-1">
                          {" "}
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum. Lorem ipsum, or
                          lipsum as it is sometimes known, is dummy text used in
                          laying out print, graphic or web designs. The passage
                          is attributed to an unknown typesetter in the 15th
                          century who is thought to have scrambled parts...
                        </Hellotext>
                      </div>
                    </Ordercard>
                  </div>
                </div>

                <div className="col-6 my-4">
                  <Infocard>
                    <div className="container pt-3">
                      <Profileinfotext>Ratings & Reviews</Profileinfotext>
                      <div className="d-flex">
                        <Circle2 className="mt-4"></Circle2>

                        <div className="mt-4 ps-3">
                          <div className="d-flex">
                            <Hellotext>5</Hellotext>
                            <MdStar
                              className="ms-1"
                              style={{ color: "green" }}
                            />
                          </div>
                          <div className="d-flex mt-1">
                            <Hellotext>4</Hellotext>
                            <MdStar
                              className="ms-1"
                              style={{ color: "green" }}
                            />
                          </div>
                          <div className="d-flex mt-1">
                            <Hellotext>3</Hellotext>
                            <MdStar
                              className="ms-1"
                              style={{ color: "blue" }}
                            />
                          </div>
                          <div className="d-flex mt-2">
                            <Hellotext>2</Hellotext>
                            <MdStar
                              className="ms-1"
                              style={{ color: "blue" }}
                            />
                          </div>
                          <div className="d-flex mt-2">
                            <Hellotext>1</Hellotext>
                            <MdStar
                              className="ms-1"
                              style={{ color: "red" }}
                            />
                          </div>
                        </div>

                        <div className="mt-4  ">
                          <RatingCard className="ms-1">
                            <div>
                              <div class="progress">
                                <div
                                  class="progress-bar"
                                  role="progressbar"
                                  style={{
                                    width: "90%",
                                    ariaValuenow: "25",
                                    ariaValuemin: "0",
                                    ariaValuemax: "100",
                                    backgroundColor: "green",
                                  }}
                                ></div>
                              </div>
                            </div>
                            <div class="progress mt-2">
                              <div
                                class="progress-bar"
                                role="progressbar"
                                style={{
                                  width: "70%",
                                  ariaValuenow: "25",
                                  ariaValuemin: "0",
                                  ariaValuemax: "100",
                                  backgroundColor: "green",
                                }}
                              ></div>
                            </div>
                            <div class="progress mt-2">
                              <div
                                class="progress-bar"
                                role="progressbar"
                                style={{
                                  width: "50%",
                                  ariaValuenow: "25",
                                  ariaValuemin: "0",
                                  ariaValuemax: "100",
                                  backgroundColor: "",
                                }}
                              ></div>
                            </div>
                            <div class="progress mt-2">
                              <div
                                class="progress-bar"
                                role="progressbar"
                                style={{
                                  width: "30%",
                                  ariaValuenow: "25",
                                  ariaValuemin: "0",
                                  ariaValuemax: "100",
                                  backgroundColor: "",
                                }}
                              ></div>
                            </div>
                            <div class="progress mt-2">
                              <div
                                class="progress-bar"
                                role="progressbar"
                                style={{
                                  width: "20%",
                                  ariaValuenow: "25",
                                  ariaValuemin: "0",
                                  ariaValuemax: "100",
                                  backgroundColor: "red",
                                }}
                              ></div>
                            </div>
                          </RatingCard>
                        </div>
                        <div className="mt-4 ps-3">
                          <div className="d-flex">
                            <Hellotext>5464</Hellotext>
                          </div>
                          <div className="d-flex mt-1">
                            <Hellotext>3424</Hellotext>
                          </div>
                          <div className="d-flex mt-1">
                            <Hellotext>1343</Hellotext>
                          </div>
                          <div className="d-flex mt-2">
                            <Hellotext>256</Hellotext>
                          </div>
                          <div className="d-flex mt-2">
                            <Hellotext>19</Hellotext>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Infocard>
                  <div className="mt-3">
                  <Infocard3></Infocard3>
                  </div>
                </div>

                <div className="col-3 my-4">
                  <Infocard2>
                    <div className="container pt-3">
                      <Profileinfotext>Comments</Profileinfotext>

                      <CommentInput
                        type="textarea"
                        className="mt-2"
                      ></CommentInput>
                      <div className="ms-4">
<div className="ms-5 ps-5">
<Submitbtn className="mt-2 ms-5">SUBMIT</Submitbtn>
</div></div>
                    </div>
                  </Infocard2>
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
