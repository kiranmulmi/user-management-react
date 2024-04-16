import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserImage from "../../assets/images/user-profile.png";
import { getUserById } from "../../service/user-management.service";

const UserDetail = () => {
  const { userId } = useParams();

  const [user, setUser] = useState({
    username: "",
    email: "",
    age: "",
    city: "",
  });

  useEffect(() => {
    getUserById(userId).then((data) => {
      setUser(data);
    }).catch((err) => {
      alert("API server error");
      console.log(err);
    });
  }, []);

  return (
    <div>
      <div className="vi-flex-container">
      <div style={{flexGrow: '10'}}>
        <img src={UserImage} style={{width: "188px"}}/>
        <div style={{margin: '20px auto'}}>
          <button className="btn btn-danger">Connect to LinkedIn</button>
        </div>
      </div>
      <div style={{flexGrow: '40'}}>
        <h2>User Detail</h2>
        <div className="v-space"></div>
        <div>Username</div>
        <hr/>
        <div>{user.username}</div>

        <div className="v-space"></div>
        <div>Email</div>
        <hr/>
        <div>{user.email}</div>

        <div className="v-space"></div>
        <div>Age</div>
        <hr/>
        <div>{user.age}</div>
        <div className="v-space"></div>
        <div>City</div>
        <hr/>
        <div>{user.city}</div>
      </div>
      </div>
    </div>
  )
}

export default UserDetail;