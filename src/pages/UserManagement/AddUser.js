import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    age: "",
    city: "",
  })
  
  const handleInputChange = (event) => {
    setUser({...user, [event.target.name]: event.target.value})
  }

  const saveForm = () => {
    console.log('User:', user);
    navigate('/user-management');
  }
  return (
    <div>
      <h2>Add User</h2>
      <div>
        <label>Username</label>
        <input 
          type="text"
          onChange={handleInputChange}
          name="username"
          value={user.username} />
      </div>
      <div>
        <label>Email</label>
        <input 
          type="text"
          name="email"
          value={user.email} 
          onChange={handleInputChange}/>
      </div>
      <div>
        <label>Age</label>
        <input 
          type="text" 
          name="age"
          value={user.age} 
          onChange={handleInputChange} />
      </div>
      <div>
        <label>City</label>
        <input 
          type="text" 
          value={user.city}
          name="city"
          onChange={handleInputChange} />
      </div>
      <div>
        <button onClick={saveForm} className="btn">Save</button>
      </div>
    </div>
  );
}

export default AddUser;