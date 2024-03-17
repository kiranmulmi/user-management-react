import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <div class="row">
        <div class="sidebar">
          <Sidebar />
        </div>
        <div class="main-body">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Layout;