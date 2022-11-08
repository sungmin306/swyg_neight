import { BrowserRouter, Route, Routes } from "react-router-dom";
import "app.css";

// 공통 레이아웃
import Header from "layouts/Header";

// 시작 페이지
import StartPage from "pages/StartPage";

// 로그인, 회원가입 페이지
import Login from "pages/Login";
import Signup from "pages/Signup";

// 공동배달 페이지
import DeliveryBoard from "pages/DeliveryBoard";
import DeliveryRegister from "pages/DeliveryRegister";
import DeliveryDetail from "pages/DeliveryDetail";

function MainRoute() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/delivery-board" element={<DeliveryBoard />} />
          <Route path="/delivery-register" element={<DeliveryRegister />} />
          <Route path="/delivery-detail" element={<DeliveryDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default MainRoute;
