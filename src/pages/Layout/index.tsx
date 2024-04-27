import { FC } from "react";
import { Outlet } from "react-router-dom";
import BackgroundEffect from "../../components/BackgroundEffect";
import Header from "../../components/Header";
import "./style.css";

const Layout: FC = () => {
  return (
    <>
      <Header />
      <div className="main-container">
        <Outlet />
        <BackgroundEffect />
      </div>
    </>
  );
};

export default Layout;
