import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ViTable from "../../components/ViTable";
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
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setUsers(data);
    }, 500)
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