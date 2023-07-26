import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>Akhsinak</span>
      </div>
      <div className="links">
        <img src="search.svg" alt="" />
        <img src="app.svg" alt="" />
        <img src="expand.svg" alt="" />
        <div className="notification">
          <img src="notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Jane</span>
        </div>
        <img src="settings.svg " alt="" />
      </div>
    </div>
  );
};

export default Navbar;
