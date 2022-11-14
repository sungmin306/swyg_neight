import React from "react";
import logo from "assets/img/logo.png";

import styled from "styled-components";

const StartPage = (props) => {
  return (
    <ImgWrap>
      <LogImg src={logo} />
    </ImgWrap>
  );
};

export default StartPage;

// styled-components
const ImgWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
  max-height: 100vh;
`;

const LogImg = styled.img`
  width: 600px;
`;
