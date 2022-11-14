import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

// components
import MenuFilter from "components/MenuFilter/MenuFilter";

// css
import * as RegisterForm from "assets/styles/RegisterForm";
import { Form, FormGroup, Col, Label, Input, Button } from "reactstrap";
import styles from "components/RegisterContent/RegisterContent.module.css";

const DeliveryDetail = (props) => {
  return (
    <RegisterForm.MainContainer>
      <RegisterForm.ContainerTitle>상세페이지</RegisterForm.ContainerTitle>
      <div className={styles.nickName}>
        <i className="fa-regular fa-user"></i>
        <p className={styles.userName}>작성자 닉네임</p>
      </div>
      <RegisterForm.ContainerWrap>
        <RegisterForm.CustomForm>
          <RegisterForm.CustomFormGroup>
            <RegisterForm.DetailTitle>
              제목: 마라탕 시키실 분 구합니다.
            </RegisterForm.DetailTitle>
            <RegisterForm.CustomFormWrap>
              <RegisterForm.CustomLabel>
                가게 이름 / 구매처
              </RegisterForm.CustomLabel>
              <RegisterForm.Text>가게 이름 / 구매처</RegisterForm.Text>
            </RegisterForm.CustomFormWrap>

            <RegisterForm.CustomFormWrap>
              <RegisterForm.CustomLabel>모집 인원</RegisterForm.CustomLabel>
              <RegisterForm.Text>모집 인원</RegisterForm.Text>
            </RegisterForm.CustomFormWrap>

            <RegisterForm.CustomFormWrap>
              <RegisterForm.CustomLabel>소요 시간</RegisterForm.CustomLabel>
              <RegisterForm.Text>소요 시간</RegisterForm.Text>
            </RegisterForm.CustomFormWrap>

            <RegisterForm.CustomFormWrap>
              <RegisterForm.CustomLabel>분배 장소</RegisterForm.CustomLabel>
              <RegisterForm.Text>분배 장소</RegisterForm.Text>
            </RegisterForm.CustomFormWrap>

            <RegisterForm.CustomFormWrap>
              <RegisterForm.CustomLabel>
                오픈 카카오톡 url
              </RegisterForm.CustomLabel>
              <RegisterForm.Text>
                <a href="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjI_PWigpn7AhXZpFYBHRljBhsQPAgI">
                  오픈 카카오톡 url
                </a>
              </RegisterForm.Text>
            </RegisterForm.CustomFormWrap>

            <RegisterForm.CustomFormWrap>
              <RegisterForm.CustomLabel>내용</RegisterForm.CustomLabel>
              <RegisterForm.Text>
                내용내용내용내용내용내용내용내용내용내용내용내용내용내용
                내용내용내용내용내용내용내용내용내용내용내용내용내용내용
                내용내용내용내용내용내용내용내용내용내용내용내용내용내용
              </RegisterForm.Text>
            </RegisterForm.CustomFormWrap>
          </RegisterForm.CustomFormGroup>
        </RegisterForm.CustomForm>
      </RegisterForm.ContainerWrap>
    </RegisterForm.MainContainer>
  );
};

export default DeliveryDetail;
