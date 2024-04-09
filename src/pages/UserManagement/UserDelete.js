import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';

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

  const deleteUser = () => {
    const confirm = window.confirm("Are you sure want to delete this user?");
    if(confirm) {
      axios.delete(`http://localhost:4000/users/${userId}`)
      .then((res) => {
        toast.error('Delete user success', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
        navigate('/user-management');
        console.log("Delete user success");
      })
      .catch((err) => {
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
          onClick={deleteUser}
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