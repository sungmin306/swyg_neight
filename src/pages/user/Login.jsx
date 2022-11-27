import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// api
import useApis from "services/apis/userApis";

// zustand
import { user } from "store/index";

// css
import styled from "styled-components";
import {
  Container,
  Card,
  Col,
  Row,
  FloatingLabel,
  Form,
  Input,
  Button,
} from "react-bootstrap";

function Login() {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const navigate = useNavigate();

  // zustand
  const { thisUser, userLogin } = user((state) => state);

  // 세션에 id 저장 관리
  const [savedId, setSavedId] = useState(false);

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  // 로그인 버튼 클릭 이벤트
  const onClickLogin = (e) => {
    e.preventDefault();
    console.log("click login");
    console.log(inputId, inputPw);

    axios({
      url: "https://sungmin.pythonanywhere.com/account/rest-auth/login",
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        email: inputId,
        password: inputPw,
      },
    })
      // 서버에서 보내준 결과값이 response
      .then(function (response) {
        if (parseInt(response.status / 200) == 1) {
          alert("로그인 성공");
          localStorage.setItem("login-token", response.data.token);
          console.log(response.data.token);
          navigate("/delivery-board");
        }
      })
      .catch(function (error) {
        alert("로그인 실패");
      });
  };

  return (
    <LoginWrap border="primary" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>로그인</Card.Title>
        <Form>
          <Form.Group className="mb-3">
            <CustomLable>이메일</CustomLable>
            <CustomInput
              type="email"
              placeholder="이메일을 입력해주세요."
              onChange={handleInputId}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <CustomLable>비밀번호</CustomLable>
            <CustomInput
              type="password"
              placeholder="비밀번호를 입력해주세요."
              onChange={handleInputPw}
            />
          </Form.Group>
          <CustomButton type="submit" onClick={onClickLogin}>
            로그인
          </CustomButton>
        </Form>
        <CustomSignupButton>회원가입</CustomSignupButton>
      </Card.Body>
    </LoginWrap>
  );
}
export default Login;

const LoginWrap = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 8% auto;
`;

const CustomLable = styled(Form.Label)`
  font-size: 14px;
  display: flex;
  margin-top: 15%;
`;

const CustomInput = styled(Form.Control)`
  font-size: 14px;
  width: 240px;
`;

const CustomButton = styled(Button)`
  background-color: #76c1ed;
  border: 1px solid #76c1ed;
  font-size: 14px;
  font-weight: bold;
  width: 100%;
  height: 20%;
  margin: 20px 0;
  :hover {
    background-color: #77aada;
  }
`;

const CustomSignupButton = styled.div`
  font-size: 12px;
`;
