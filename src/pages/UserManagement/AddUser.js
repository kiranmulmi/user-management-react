import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ViTextInput from "../../components/ViTextInput";
import { validateEmail } from "../../utils/common";

const AddUser = () => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [user, setUser] = useState({
    username: "",
    email: "",
    age: "",
    city: "",
  });

  const [errorMsg, setErrMsg] = useState({
    username: "",
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
    }
    if(user.email === '') {
      err.email = 'Email is required';
      isValid = false
    } else if(!validateEmail(user.email)) {
      err.email = 'Email is not valid';
      isValid = false
    }

    if(user.age === '') {
      err.age = 'Age is required';
      isValid = false
    }
    if(user.city === '') {
      err.city = 'City is required';
      isValid = false
    }
    setErrMsg(err);
    return isValid;
  }
  
  const handleInputChange = (event) => {
    setUser({...user, [event.target.name]: event.target.value})
  }

  const saveForm = () => {
    console.log(errorMsg);
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
        isSubmitted={isSubmitted}
        errMessage={errorMsg.username}/>

      <ViTextInput 
        title="Email"
        name="email"
        value={user.email}
        handleInputChange={handleInputChange}
        isSubmitted={isSubmitted}
        errMessage={errorMsg.email}/>

      <ViTextInput 
        title="Age"
        name="age"
        value={user.age}
        handleInputChange={handleInputChange}
        isSubmitted={isSubmitted}
        errMessage={errorMsg.age}/>

      <ViTextInput 
        title="City"
        name="city"
        value={user.city}
        handleInputChange={handleInputChange}
        isSubmitted={isSubmitted}
        errMessag={errorMsg.city}/>
      
      <div className="form-group">
        <button onClick={saveForm} className="btn">Save</button>
      </div>
    </div>
  );
}

export default AddUser;