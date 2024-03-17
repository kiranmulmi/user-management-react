import { Link } from "react-router-dom";
const UserManagement = () => {

  const users = [
    {
      username: 'John',
      email: 'jon@gmailcom',
      age: 25,
      city: 'London'
    },
    {
      username: 'Jane',
      email: 'jane@gmailcom',
      age: 22,
      city: 'New York'
    },
    {
      username: 'Paul',
      email: 'paul@gmailcom',
      age: 30,
      city: 'Paris'
    }
  ];

  return (
    <div>
      <h1>User Management</h1>
      <Link to="/user-management/add">Add Uer</Link>
      <table>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Age</th>
          <th>City</th>
        </tr>
        {
          users.map((row) => {
            return (
              <tr>
                <td>{row.username}</td>
                <td>{row.email}</td>
                <td>{row.age}</td>
                <td>{row.city}</td>
              </tr>
            )
          })
        }
      </table>
    </div>
  );
}

export default UserManagement;