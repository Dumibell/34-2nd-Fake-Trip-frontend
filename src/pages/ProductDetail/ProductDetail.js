import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import SideBar from "./components/SideBar/SideBar";
import DetailHeader from "./components/DetailHeder/DetailHeader";
import ProductInformation from "./components/ProductInformation/ProductInformation";
import ProductNav from "./components/ProductNav/ProductNav";
import DetailOptional from "./components/DetailOptional/DetailOptional";
import CustomerReview from "./components/CustomerReview/CustomerReview";
import { API } from "../../config";

const Productdetail = () => {
  const [itemInfo, setItemInfo] = useState({});

  const params = useParams();

  useEffect(() => {
    fetch(`${API.PRODUCTS}/${params.id}`, { method: "GET" })
      .then(res => res.json())
      .then(res => setItemInfo(res));
  }, [params.id]);

  if (!itemInfo.name) return;

  return (
    <>
      <ProductNav />
      <Detail>
        <DetailContainer>
          <MainContents>
            <DetailHeader itemInfo={itemInfo} />
            <DetailOptional params={params} />
            <ProductInformation />
            <CustomerReview itemInfo={itemInfo} id={params.id} />
          </MainContents>
          <SideBar price={itemInfo.price} />
        </DetailContainer>
      </Detail>
    </>
  );
};

const Detail = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-top: 170px;
`;

const DetailContainer = styled.div`
  width: 1060px;
  display: flex;
`;

const MainContents = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
`;

export default Productdetail;
