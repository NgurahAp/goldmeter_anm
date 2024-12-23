import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Landing from "../pages/LandingPage";
import { ProductDetail } from "../pages/detailProduct";

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/detailProduct/:productName" element={<ProductDetail />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default AppRouter;
