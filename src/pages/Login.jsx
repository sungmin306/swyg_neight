import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

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

    axios
      .post("http://127.0.0.1:8000/rest-auth/login", {
        Email: inputId,
        Password: inputPw,
      })
      // 서버에서 보내준 결과값이 response
      .then(function (response) {
        alert("로그인 성공");
        return true;
      })
      .catch(function (error) {
        alert("로그인 실패");
        return false;
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
