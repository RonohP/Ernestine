import React from "react";
import "../Styles/sidebar.css";
import { NavLink } from "react-router-dom";
import { AiFillSchedule } from "react-icons/ai";
import { RiDashboardLine } from "react-icons/ri";
import { IoSchoolSharp, IoBookSharp } from "react-icons/io5";

function Sidebar() {
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

        <button className="logout-btn">Logout</button>
      </ul>
    </div>
  );
}

export default Sidebar;
