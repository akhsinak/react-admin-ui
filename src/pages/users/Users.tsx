import DataTable from "../../components/dataTable/dataTable";

const Users = () => {
  return (
    <div className="users">
      <div className="info">
        <h1>Users Registered Here</h1>
        <button>Add User</button>
        <DataTable />
      </div>
    </div>
  );
};

export default Users;
