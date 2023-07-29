import DataTable from "../../components/dataTable/dataTable";
import "./users.scss";
const Users = () => {
  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button>Add User</button>
      </div>
      <DataTable />
    </div>
  );
};

export default Users;
