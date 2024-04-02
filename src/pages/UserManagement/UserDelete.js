import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const UserDelete = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const data = [
    {
      id: 1,
      username: 'John',
      email: 'jon@gmailcom',
      age: 25,
      city: 'London'
    },
    {
      id: 2,
      username: 'Jane',
      email: 'jane@gmailcom',
      age: 22,
      city: 'New York'
    },
    {
      id: 3,
      username: 'Paul',
      email: 'paul@gmailcom',
      age: 30,
      city: 'Paris'
    }
  ];
  const [user, setUser] = useState({
    username: "",
    email: "",
    age: "",
    city: "",
  });

  useEffect(() => {
    const newUser = data.find((obj) => obj.id.toString() === userId.toString())
    if(newUser) {
      setUser(newUser);
    }
  }, []);

  return (
    <div>
      <h2>Arew you sure want delete this?</h2>
      <div>Username: {user.username}</div>
      <div>Email: {user.email}</div>
      <div>Age: {user.age}</div>
      <div>City: {user.city}</div>
      <div>
        <button 
          type="button" 
          className="btn btn-danger"
          onClick={() => {
            navigate('/user-management');
          }}
          
          >Yes</button>
        <button 
          type="button" 
          className="btn"
          onClick={() => {
            navigate('/user-management');
          }}
          >No</button>
      </div>
    </div>
  )
}

export default UserDelete;