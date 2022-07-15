import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import qs from "qs";
import axios from "axios";
import { Button, Dropdown, Space, DatePicker, Switch } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { IP } from "../../config";
import koKR from "antd/lib/locale/ko_KR";
import ProfileSlider from "./ProfileSlider";
import SearchModal from "./SearchModal";
import * as MS from "./Main-style";
import * as PS from "./ProductImgSlider";
import "antd/dist/antd.css";
import "moment/locale/ko";

const { RangePicker } = DatePicker;

const Main = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [adultNum, setAdultNum] = useState(1);
  const [kidNum, setKidNum] = useState(0);
  const [totalAdultHeadNum, setTotalAdultHeadNum] = useState(1);
  const [totalKidHeadNum, setTotalKidHeadNum] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [isDropDownModalOpen, setIsDropDownModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = "http://localhost:3000/";
  const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
  const code = new URL(window.location.href).searchParams.get("code");

  const navigate = useNavigate();
  const location = useLocation();

  const getKaKaoToken = async () => {
    const payload = qs.stringify({
      grant_type: "authorization_code",
      client_id: REST_API_KEY,
      redirect_uri: REDIRECT_URI,
      code: code,
      client_secret: CLIENT_SECRET,
    });

    await axios
      .post("https://kauth.kakao.com/oauth/token", payload)
      .then(res => {
        console.log(res.data.access_token);
        fetch(`${IP}/users/signin`, {
          headers: {
            Authorization: res.data.access_token,
          },
        })
          .then(res => res.json())
          .then(data => {
            localStorage.setItem(
              "Authorization",
              "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxNX0.xLWeDmh7RRSz-3FWth2UlgiqSfU7d2pMufCfuWzLGYY"
            );
          })
          .then(res => console.log(res));
        // localStorage.setItem("kakaotoken", res.data.access_token);
      });

    // const kakaoToken = localStorage.getItem("kakaotoken");
  };

  useEffect(() => {
    getKaKaoToken();
  }, []);

  const onClickAddAdultCount = () => {
    setAdultNum(adultNum + 1);
  };

  const onClickSubAdultCount = () => {
    if (adultNum === 1) {
      return;
    } else {
      setAdultNum(adultNum - 1);
    }
  };

  const onClickAddKidCount = () => {
    setKidNum(kidNum + 1);
  };

  const onClickSubKidCount = () => {
    if (kidNum === 0) {
      return;
    } else {
      setKidNum(kidNum - 1);
    }
  };

  const onClickClose = () => {
    setTotalAdultHeadNum(adultNum);
    setTotalKidHeadNum(kidNum);
    setIsDropDownModalOpen(false);
  };

  const onClickModalOpen = () => {
    setIsDropDownModalOpen(true);
  };

  const onChangeInput = e => {
    setUserInput(e.target.value);
  };

  const onClickSearchBox = () => {
    setIsSearchModalOpen(true);
  };

  const onCloseModal = e => {
    if (!(e.target.closest(".searchDiv") === null)) {
      setIsSearchModalOpen(true);
    } else {
      setIsSearchModalOpen(false);
    }
  };

  const filter = () => {
    navigate(
      `searchlist?search=${userInput}&start_date=${startDate[0]}&end_date=${
        startDate[1]
      }&guest=${adultNum + kidNum}`
    );
  };

  const menu = (
    <MS.Menu>
      <p>인원 선택</p>
      <MS.ModalDiv>
        <div>성인</div>
        <MS.HeadCount>
          <MS.RoundShape onClick={onClickSubAdultCount}>-</MS.RoundShape>
          <div>{adultNum}</div>
          <MS.RoundShape onClick={onClickAddAdultCount}>+</MS.RoundShape>
        </MS.HeadCount>
      </MS.ModalDiv>
      <MS.ModalDiv style={{ display: "flex", flexDirection: "row" }}>
        <div>
          어린이
          <span>(18세 미만)</span>
        </div>
        <MS.HeadCount>
          <MS.RoundShape onClick={onClickSubKidCount}>-</MS.RoundShape>
          <div>{kidNum}</div>
          <MS.RoundShape onClick={onClickAddKidCount}>+</MS.RoundShape>
        </MS.HeadCount>
      </MS.ModalDiv>
      <div className="setBtn">
        <button onClick={onClickClose}>적용하기</button>
      </div>
    </MS.Menu>
  );

  console.log(startDate);

  const getDateValue = (date, dateString) => {
    setStartDate(dateString);
  };

  return (
    <MS.MainStyle onClick={onCloseModal}>
      <div className="topDiv">
        <a href="https://ifh.cc/v-R4jq6G" target="_blank" rel="noreferrer">
          <video
            src="https://ifh.cc/v/R4jq6G.mp4"
            muted
            autoPlay
            loop
            playsInline
            className="topVideo"
          />
        </a>
        <div className="topBox" />
      </div>
      <div className="section">
        <MS.MainTitle>어떤 숙소 찾으세요?</MS.MainTitle>
        <MS.OnOffBtn>
          <Switch
            checkedChildren="여행가자~~"
            unCheckedChildren="해외"
            style={{}}
          />
        </MS.OnOffBtn>
        <MS.SearchBoxDiv>
          <MS.AccomodationInfo>
            <div>호텔 리조트</div>
            <div>펜션, 풀빌라</div>
            <div>제주감성숙소</div>
          </MS.AccomodationInfo>
          <MS.SearchBox>
            <MS.LocationSearchDiv className="searchDiv">
              <img />
              <input
                placeholder="지역, 숙소 이름을 찾아보세요"
                onChange={onChangeInput}
                onClick={onClickSearchBox}
              />
              {isSearchModalOpen ? <SearchModal userInput={userInput} /> : null}
            </MS.LocationSearchDiv>
            <MS.DateSelectDiv>
              <Space direction="vertical" size={12} locale={koKR}>
                <RangePicker
                  onChange={getDateValue}
                  placeholder={["체크인 날짜", "체크 아웃 날짜"]}
                  style={{
                    height: "48px",
                    width: "306px",
                    border: "none",
                    borderRadius: "0px",
                    cursor: "pointer",
                    fontSize: "17px",
                    margin: "0px",
                    padding: "20px",
                  }}
                />
              </Space>
            </MS.DateSelectDiv>
            <MS.HeadCountDiv>
              <Dropdown
                overlay={menu}
                placeholder="hello"
                // placement="bottomRight"
                trigger={["click"]}
                visible={isDropDownModalOpen}
                onClick={onClickModalOpen}
              >
                <Button>
                  {`성인 ${totalAdultHeadNum}명, 어린이 ${totalKidHeadNum}명`}{" "}
                  <DownOutlined />
                </Button>
              </Dropdown>
            </MS.HeadCountDiv>
            <MS.SearchBtn onClick={filter}>검색</MS.SearchBtn>
          </MS.SearchBox>
        </MS.SearchBoxDiv>
      </div>
      <div className="bottomDiv">
        <div className="carouselDiv">
          <div>오늘의 추천 호텔</div>
          <MS.CarouselBox>
            <PS.ProductSliderRandom />
          </MS.CarouselBox>
        </div>
        <div className="carouselDiv">
          <div>여름엔 제주도! 제주 인기 호텔</div>
          <MS.CarouselBox>
            <PS.ProductSliderJeju />
          </MS.CarouselBox>
        </div>
        <div className="carouselDiv">
          <div>무더운 여름은 수영장에서! 수영장 있는 호텔!</div>
          <MS.CarouselBox>
            <PS.ProductSliderPool />
          </MS.CarouselBox>
        </div>
      </div>
    </MS.MainStyle>
  );
};

export default Main;
