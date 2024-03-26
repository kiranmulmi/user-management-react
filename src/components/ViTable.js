import { Link } from "react-router-dom";
const ViTable = (props) => {
  return (
    <table>
        <thead>
          <tr>
            { props.header.length > 0 &&
              props.header.map((row, index) => {
                return (
                  <th key={index}>{row.name}</th>
                )
              })
            }
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          { props.users.length > 0 && 
              props.users.map((row, index) => {
                return (
                  <tr key={index}>
                    <td>{row.username}</td>
                    <td>{row.email}</td>
                    <td>{row.age}</td>
                    <td>{row.city}</td>
                    <td>
                      <Link to={`/user-management/detail/${row.id}`} className="btn btn-default">Detail</Link>
                      <Link to={`/user-management/edit/${row.id}`} className="btn">Edit</Link>
                      <Link to={`/user-management/delete/${row.id}`} className="btn btn-danger">Delete</Link>
                    </td>
                  </tr>
                )
              })
            }
          { props.users.length === 0 && 
          <tr>
            <td colSpan={4}>No records found</td>
          </tr>
          }
        </tbody>
      </table>
  );
}

export default ViTable;