import "./topbox.scss";
import { topdealusers } from "../../data";

const TopBox = () => {
  return (
    <div className="topbox">
      <h2>Top Deals</h2>
      <div className="list">
        {topdealusers.map((user) => (
          <div className="listitem" key={user.id}>
            <div className="usersection">
              <img src={user.img} alt="" />
              <div className="userdetails">
                <span>{user.username}</span>
                <span>{user.email}</span>
              </div>
            </div>
            <span className="amount">{user.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;
