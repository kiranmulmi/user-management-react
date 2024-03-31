import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ViPasswordInput from "../../components/ViPasswordInput";
import ViTextInput from "../../components/ViTextInput";

const Login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = (event) => {
    if(event.target.name === 'email') {
      setEmail(event.target.value);
    }
    if(event.target.name === 'password') {
      setPassword(event.target.value);
    }
  }
  const doLogin = (e) => {
    let isLogin = false;
    if(email === "admin" && password === "admin") {
      isLogin = true;
    }

    if(isLogin) {
      localStorage.setItem('isLogin', '1');
      navigate('/user-management');
    } else {
      alert('Login failed');
    }
  }
  return (
    <div className="login-form">
      <h1>User Login</h1>
      <ViTextInput 
        title="Email" 
        name="email" 
        handleInputChange={handleInputChange}
        value={email} />
      <ViPasswordInput 
        title="Password" 
        name="password" 
        handleInputChange={handleInputChange}
        value={password} />
    
      <div className="form-group">
        <button onClick={doLogin} className="btn">Login</button>
      </div>
    </div>
  );
}

export default Login;