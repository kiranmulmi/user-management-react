import { useNavigate } from "react-router-dom";
const Header  = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('isLogin');
    navigate('/login');
  }
  return (
    <div className="header">
      <div className="vi-flex-container">
        <div style={{flexGrow: '20'}}>
          <h2>Virinchi College</h2>
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