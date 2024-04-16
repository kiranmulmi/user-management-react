import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ViTable from "../../components/ViTable";
import { getAllUsers, searchByEmail, searchByUsername } from "../../service/user-management.service";
import ViTextInput from "../../components/ViTextInput";

const UserManagement = () => {
  const header = [
    {
      key: "username",
      label: "Username",
    },
    {
      key: "email",
      label: "Email",
    },
    {
      key: "age",
      label: "Age",
    },
    {
      key: "city",
      label: "City",
    }
  ]

  const [users, setUsers] = useState([]);
  const [searchUsername, setSearchUsername] = useState('');
  const [searchEmail, setSearchEmail] = useState('');
  useEffect(() => {
    getAllUsers().then((data) => {
      setUsers(data);
    }).catch((err) => {
      alert("API server error");
      console.log(err);
    });
  }, []);
  const handleSearchUsername = (e) => {
    setSearchUsername(e.target.value);
    searchByUsername(e.target.value).then((data) => {
      setUsers(data);
    }).catch((err) => {
      alert("API server error");
      console.log(err);
    });
  }
  const handleSearchEmail = (e) => {
    setSearchEmail(e.target.value);
    searchByEmail(e.target.value).then((data) => {
      setUsers(data);
    }).catch((err) => {
      alert("API server error");
      console.log(err);
    });
  }
  return (
    <div>
      <h1>User Management</h1>
      <Link to="/user-management/add" className="btn pull-right">Add Uer</Link>
      <br/>
      <div className="vi-flex-container">
        <div style={{flexGrow: '5'}}>
          <ViTextInput
            title="Username"
            name="username"
            placeholder="Search by username"
            value={searchUsername}
            handleInputChange={handleSearchUsername}
            />
        </div>
        <div style={{flexGrow: '5'}}>
          <ViTextInput
            title="Email"
            name="email"
            placeholder="Search by email"
            value={searchEmail}
            handleInputChange={handleSearchEmail}
            />
        </div>
      </div>
      <ViTable 
        data={users}
        header={header}
        actions={[
          {
            name: "Detail",
            link: "/user-management/detail",
            className: "btn btn-default"
          },
          {
            name: "Edit",
            link: "/user-management/edit",
            className: "btn"
          },
          {
            name: "Delete",
            link: "/user-management/delete",
            className: "btn btn-danger"
          }
        ]}
      />
    </div>
  );
}

export default UserManagement;