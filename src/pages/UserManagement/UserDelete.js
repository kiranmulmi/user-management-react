import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { showDangerMessage } from "../../utils/notification";
import { deleteUser } from "../../service/user-management.service";

const UserDelete = () => {
  const navigate = useNavigate();
  const { userId } = useParams();

  const [user, setUser] = useState({
    username: "",
    email: "",
    age: "",
    city: "",
  });

  useEffect(() => {
    axios.get(`http://localhost:4000/users/${userId}`)
    .then((res) => {
      setUser(res.data);
    } ).catch((err) => {  
      alert("API server error");
      console.log(err);
    });
  }, []);

  const handleDeleteUser = () => {
    const confirm = window.confirm("Are you sure want to delete this user?");
    if(confirm) {
      deleteUser(userId).then(() => {
        showDangerMessage('Delete user success')
        navigate('/user-management');
        console.log("Delete user success");
      }).catch((err) => {
        console.log(err);
      });
    };
  }

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
          onClick={handleDeleteUser}
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