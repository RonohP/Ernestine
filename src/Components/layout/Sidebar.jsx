import React from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import "./sidebar.css";
import { NavLink } from "react-router-dom";
import { AiFillSchedule } from "react-icons/ai";
import { RiDashboardLine } from "react-icons/ri";
import { IoSchoolSharp, IoBookSharp } from "react-icons/io5";

function Sidebar() {
  const history = useHistory();
  return (
    <div className="sidebar">
      <div className="scheduleIcon">
        <AiFillSchedule
          color="#ED814A"
          size="6rem"
          activeClassName="active-nav-link"
        />
      </div>
      <ul className="sidebar-ul">
        <NavLink
          to="/dashboard"
          className="navLink"
          activeClassName="active-nav-link"
        >
          <span className="list-icons">
            <RiDashboardLine />
          </span>
          Dashboard
        </NavLink>

        <NavLink
          to="/schools"
          className="navLink"
          activeClassName="active-nav-link"
        >
          <span className="list-icons">
            <IoSchoolSharp />
          </span>
          Schools
        </NavLink>

        <NavLink
          to="/classes"
          className="navLink"
          activeClassName="active-nav-link"
        >
          <span className="list-icons">
            <IoBookSharp />
          </span>
          Classes
        </NavLink>
        <NavLink
          to="/schedule"
          className="navLink"
          activeClassName="active-nav-link"
        >
          <span className="list-icons">
            <AiFillSchedule />
          </span>
          Schedule
        </NavLink>

        <button
          className="logout-btn"
          onClick={() => {
            history.push("/login");
            toast.success("LogOut Successful");
          }}
        >
          Logout
        </button>
      </ul>
    </div>
  );
}

export default Sidebar;
