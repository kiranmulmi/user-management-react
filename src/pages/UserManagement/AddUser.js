import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ViTextInput from "../../components/ViTextInput";
import { validateEmail } from "../../utils/common";
import ViPasswordInput from "../../components/ViPasswordInput";

const AddUser = () => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    age: "",
    city: "",
  });

  const [errorMsg, setErrMsg] = useState({
    username: "",
    password: "",
    email: "",
    age: "",
    city: "",
  });

  const validateForm = () => {
    let isValid = true;
    const err = {...errorMsg};
    if(user.username === '') {
      err.username = 'Username is required';
      isValid = false
    } else {
      err.username = '';
    }
    if(user.email === '') {
      err.email = 'Email is required';
      isValid = false
    } else if(!validateEmail(user.email)) {
      err.email = 'Email is not valid';
      isValid = false
    } else {
      err.email = '';
    }

    if(user.age === '') {
      err.age = 'Age is required';
      isValid = false
    }else {
      err.age = '';
    }
    if(user.city === '') {
      err.city = 'City is required';
      isValid = false
    } else {
      err.city = '';
    }
    setErrMsg(err);
    return isValid;
  }
  
  const handleInputChange = (event) => {
    setUser({...user, [event.target.name]: event.target.value})
  }

  const saveForm = () => {
    console.log("error message", errorMsg);
    setIsSubmitted(true);
    console.log('User:', user);
    if (validateForm()) {
      navigate('/user-management');
    }
  }
  return (
    <div>
      <h2>Add User</h2>
      <ViTextInput 
        title="Username"
        name="username"
        value={user.username}
        handleInputChange={handleInputChange}
        errMessage={errorMsg.username}/>

      <ViPasswordInput 
        title="Password"
        name="password"
        value={user.password}
        handleInputChange={handleInputChange}
        errMessage={errorMsg.password}/>  

      <ViTextInput 
        title="Email"
        name="email"
        value={user.email}
        handleInputChange={handleInputChange}
        errMessage={errorMsg.email}/>

      <ViTextInput 
        title="Age"
        name="age"
        value={user.age}
        handleInputChange={handleInputChange}
        errMessage={errorMsg.age}/>

      <ViTextInput 
        title="City"
        name="city"
        value={user.city}
        handleInputChange={handleInputChange}
        errMessage={errorMsg.city}/>
      
      <div className="form-group">
        <button onClick={saveForm} className="btn">Save</button>
      </div>
    </div>
  );
}

export default AddUser;