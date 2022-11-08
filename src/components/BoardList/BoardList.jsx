import React from "react";
import { useNavigate } from "react-router-dom";

// components
import BoardBox from "components/BoardBox/BoardBox";

// css
import styled from "styled-components";
import {
  Card,
  Col,
  Row,
  FloatingLabel,
  Form,
  Input,
  Button,
} from "react-bootstrap";

const BoardList = (props) => {
  const navigate = useNavigate();

  const handleRegisterButton = () => {
    navigate("/delivery-register");
  };
  return (
    <MainContainer>
      <Title>공동 배달</Title>
      <CustomButton onClick={handleRegisterButton}>배달 등록하기</CustomButton>
      <BoxContainer>
        <BoardBox />
        <BoardBox />
        <BoardBox />
        <BoardBox />
        <BoardBox />
        <BoardBox />
      </BoxContainer>
      <div>pagination</div>
    </MainContainer>
  );
};
export default BoardList;

// .title {
//   margin: 30px 250px 0px 250px;
//   font-weight: bold;
// }

// .write {
//   cursor: pointer;
//   width: 120px;
//   height: 30px;
//   font-size: 13px;
// }

const MainContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-weight: bold;
  margin: 30px;
  color: #3188ba;
`;

const BoxContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;

const CustomButton = styled(Button)`
  background-color: #76c1ed;
  border: 1px solid #a9d5fd;
  font-size: 14px;
  font-weight: bold;
  height: 15%;
`;
