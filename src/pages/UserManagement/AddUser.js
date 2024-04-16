import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ViTextInput from "../../components/ViTextInput";
import { validateEmail } from "../../utils/common";
import ViPasswordInput from "../../components/ViPasswordInput";
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useParams } from "react-router-dom";

const AddUser = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    age: "",
    city: "",
  });
  useEffect(() => {
    if (userId) {
      axios.get(`http://localhost:4000/users/${userId}`).then((res) => {
      setUser({
        username: res.data.username,
        password: res.data.password,
        email: res.data.email,
        age: res.data.age,
        city: res.data.city,
      });
    }).catch((err) => {
      alert("API server error");
      console.log(err);
    });
    }
  }, []);
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
    
    
    if (validateForm()) {

      
      if (userId) {
      // UPDATE Case
        console.log('Updating user:', user);
        axios.put(`http://127.0.0.1:4000/users/${userId}`, user)
        .then(() => {
          toast.success('User updated', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
            });
          console.log("user saved");
          navigate('/user-management');
        }).catch((err) => {
          console.log(err);
          alert("SERVER ERROR");
        })
      } else {
        // ADD Case
        const uuid = uuidv4();
        const item = {...user, id: uuid}
        console.log('User:', item);
        axios.post('http://localhost:4000/users', item)
        .then(() => {
          toast.success('User saved', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
            });
          console.log("user saved");
          navigate('/user-management');
        }).catch((err) => {
          console.log(err);
          alert("SERVER ERROR");
        })
      }
    }
  }
  return (
    <div>
      <h2>{ userId ? 'Edit User': 'Add User'}</h2>
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
        <button onClick={saveForm} className="btn">
          { userId ? 'Update': 'Save'}
        </button>
      </div>
    </div>
  );
}

export default AddUser;