import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="row">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main-body">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Layout;