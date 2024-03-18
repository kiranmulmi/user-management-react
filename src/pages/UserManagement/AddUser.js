import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  }

  const handleCityChange = (event) => {
    setCity(event.target.value);
  }
  const saveForm = () => {
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Age:', age);
    console.log('City:', city);
    navigate('/user-management');
  }
  return (
    <div>
      <h2>Add User</h2>
      <div>
        <label>Username</label>
        <input 
          type="text"
          onChange={handleUsernameChange}
          value={username} />
      </div>
      <div>
        <label>Email</label>
        <input type="text" value={email} onChange={handleEmailChange}/>
      </div>
      <div>
        <label>Age</label>
        <input type="text" value={age} onChange={handleAgeChange} />
      </div>
      <div>
        <label>City</label>
        <input type="text" value={city} onChange={handleCityChange} />
      </div>
      <div>
        <button onClick={saveForm} className="btn">Save</button>
      </div>
    </div>
  );
}

export default AddUser;