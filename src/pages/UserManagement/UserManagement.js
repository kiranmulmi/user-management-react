import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ViTable from "../../components/ViTable";
import axios from "axios";

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
  useEffect(() => {
    // API INTEGRATION
    axios
    .get("http://localhost:4000/users").then((res) => {
      setUsers(res.data);
    }).catch((err) => {
      alert("API server error");
      console.log(err);
    });
  }, []);

  return (
    <div>
      <h1>User Management</h1>
      <Link to="/user-management/add" className="btn pull-right">Add Uer</Link>
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