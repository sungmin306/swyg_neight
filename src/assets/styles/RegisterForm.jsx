// css
import { Form, FormGroup, Col, Label, Input } from "reactstrap";
import { Button } from "react-bootstrap";
import styled from "styled-components";

/**styled components define */

export const MainContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;

export const ContainerWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #209ee7;
  border-radius: 5px;
  width: 50%;
  padding: 20px;
  font-size: 12px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #a8a9ac;
  border-radius: 5px;
  padding: 15px;
  font-size: 12px;
  margin-bottom: 2%;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  width: 100%;
`;

export const ContainerTitle = styled.h2`
  font-weight: bold;
  margin: 30px;
  color: #3188ba;
`;

export const CustomForm = styled(Form)`
  width: 100%;
  padding: 16px 0px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 28px;
  box-sizing: border-box;
  border-bottom: 1px solid rgb(231, 231, 237);
  font-weight: 700;
  font-size: 17px;
  line-height: 24px;
  color: rgb(54, 54, 68);
`;

export const CustomFormGroup = styled(FormGroup)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 28px;
  box-sizing: border-box;
`;

export const CustomFormWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CustomLabel = styled(Label)`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 34px;
  width: 150px;
  padding-right: 4px;
  font-size: 13px;
  font-weight: 600;
  color: rgb(120, 120, 135);
`;

export const CustomInput = styled(Input)`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  box-sizing: border-box;
  font-size: 13px;
`;

export const CustomButton = styled(Button)`
  margin-top: -20px;
  width: 180px;
  height: 45px;
  background-color: #76c1ed;
  border: 1px solid #76c1ed;
  font-weight: bold;
`;

export const Text = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 34px;
  font-size: 13px;
  font-weight: 400;
  flex-wrap: wrap;
`;

export const DetailTitle = styled.h3`
  flex-flow: row wrap;
  margin-top: -20px;
  margin-bottom: 20px;
`;
