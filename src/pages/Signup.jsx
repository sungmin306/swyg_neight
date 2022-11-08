import React, { useState } from "react";
import axios from "axios";

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

function Signup() {
  // 이메일, 비밀번호, 비밀번호 확인, 닉네임, 주소
  const [inputName, setInputName] = useState("");
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [inputHome, setHome] = useState("");
  const [inputHomeNum, setHomeNum] = useState("");
  // const [inputBank, setBankName] = useState("");
  // const [inputBankNum, setBankNum] = useState("");

  const handleInputName = (e) => {
    setInputName(e.target.value);
  };

  const handleInputId = (e) => {
    setInputId(e.target.value);
    // console.log(e.target.value)
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  const handleConfirmPw = (e) => {
    setConfirmPw(e.target.value);
  };

  const handleInputHome = (e) => {
    setHome(e.target.value);
  };

  const handleInputHomeNum = (e) => {
    setHomeNum(e.target.value);
  };

  // const handleInputBank = (e) => {
  //   setBankName(e.target.value);
  // };

  // const handleInputBankNum = (e) => {
  //   setBankNum(e.target.value);
  // };

  // 회원가입 버튼 클릭 이벤트 (비밀번호와 비밀번호 확인 일치 여부)
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(inputPw, confirmPw);
    if (inputPw !== confirmPw) {
      return alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
    } else {
      axios
        .post("http://127.0.0.1:8000/rest-auth/registration/", {
          Username: inputName,
          Email: inputId,
          Password1: inputPw,
          Password2: confirmPw,
        })
        .then(function (response) {
          if (response.status >= 200 && response.status < 300) {
            alert("회원가입 성공");
            return true;
          }
        })
        .catch(function (error) {
          alert("오류");
          return false;
        });
    }
  };

  return (
    <LoginWrap border="primary" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>회원가입</Card.Title>
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
          <Form.Group className="mb-3">
            <CustomLable>비밀번호 확인</CustomLable>
            <CustomInput
              type="password"
              placeholder="비밀번호를 다시 한 번 입력해주세요."
              onChange={handleConfirmPw}
            />
            <Form.Group className="mb-3">
              <CustomLable>닉네임</CustomLable>
              <CustomInput
                type="text"
                placeholder="닉네임을 입력해주세요."
                onChange={handleInputName}
              />
            </Form.Group>
          </Form.Group>
          <CustomButton type="submit" onClick={onSubmit}>
            로그인
          </CustomButton>
        </Form>
      </Card.Body>
    </LoginWrap>
    // <div className="signUp">
    //   <h2>회원가입</h2>
    //   <div>
    //     <h4 class="tag">닉네임</h4>
    //     <StyledInput
    //       className="input-box"
    //       type="text"
    //       id="input_name"
    //       name="input_name"
    //       value={inputName}
    //       placeholder="닉네임"
    //       onChange={handleInputName}
    //     />
    //   </div>

    //   <div>
    //     <h4 class="tag">아이디(이메일)</h4>
    //     <StyledInput
    //       className="input-box"
    //       type="email"
    //       id="input_id"
    //       name="input_id"
    //       value={inputId}
    //       placeholder="아이디(이메일 입력)"
    //       onChange={handleInputId}
    //     />
    //   </div>

    //   <div>
    //     <h4 class="tag">비밀번호</h4>
    //     <StyledInput
    //       className="input-box"
    //       type="password"
    //       id="input_pw"
    //       name="input_pw"
    //       value={inputPw}
    //       placeholder="비밀번호"
    //       onChange={handleInputPw}
    //     />
    //   </div>

    //   <div>
    //     <h4 class="tag">비밀번호 확인</h4>
    //     <StyledInput
    //       className="input-box"
    //       type="password"
    //       id="confirm_pw"
    //       name="confirm_pw"
    //       value={confirmPw}
    //       placeholder="비밀번호 확인"
    //       onChange={handleConfirmPw}
    //     />
    //   </div>

    //   <div>
    //     <h4 class="tag">집 주소</h4>
    //     <StyledInput
    //       className="input-box"
    //       type="text"
    //       id="input_home"
    //       name="input_home"
    //       value={inputHome}
    //       placeholder="집 주소"
    //       onChange={handleInputHome}
    //     />
    //   </div>

    //   <div>
    //     <h4 class="tag">우편번호</h4>
    //     <StyledInput
    //       className="input-box"
    //       type="number"
    //       id="input_home_num"
    //       name="input_home_num"
    //       value={inputHomeNum}
    //       placeholder="우편번호"
    //       onChange={handleInputHomeNum}
    //     />
    //   </div>

    //   <div>
    //     <h4 class="tag">은행명</h4>
    //     <StyledInput
    //       className="input-box"
    //       type="text"
    //       id="input_bank"
    //       name="input_bank"
    //       value={inputBank}
    //       placeholder="은행명"
    //       maxLength="5"
    //       onChange={handleInputBank}
    //     />
    //   </div>

    //   <div>
    //     <h4 class="tag">계좌번호</h4>
    //     <StyledInput
    //       className="input-box"
    //       type="text"
    //       id="input_bank_num"
    //       name="input_bank_num"
    //       value={inputBankNum}
    //       placeholder="계좌번호"
    //       onChange={handleInputBankNum}
    //     />
    //   </div>

    //   <button className="button" type="submit" onClick={onSubmit}>
    //     회원가입
    //   </button>
    // </div>
  );
}

export default Signup;

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
