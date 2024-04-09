import { useNavigate } from "react-router-dom";
import VirinchiLogo from "../../assets/images/virinchi-logo.png";
import { toast } from 'react-toastify';
const Header  = () => {
  const navigate = useNavigate();
  const logout = () => {
    toast.success('Logout success', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      });
    localStorage.removeItem('isLogin');
    navigate('/login');
  }
  return (
    <div className="header">
      <div className="vi-flex-container">
        <div style={{flexGrow: '20'}}>
          <h2>
            <img src={VirinchiLogo} style={{width: "188px"}}/>
          </h2>
        </div>
        <div style={{flexGrow: '0.5'}}>
          <button 
            type="button"
            onClick={logout}
            className="btn btn-danger"
            >Logout</button>
        </div>
      </div>
    </div>
  );
};
export default Header;