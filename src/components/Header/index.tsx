import { FC } from "react";
import { NavLink } from "react-router-dom";
import './style.css';

const Header: FC = () => {
  return (
    <header className="header">
      {
        <nav className="navigation">
          <ul className="navigation-ul">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? "text-red" : "text-black"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/categories"}
                className={({ isActive }) =>
                  isActive ? "text-red" : "text-black"
                }
              >
                Categories
              </NavLink>
            </li>
          </ul>
        </nav>
      }
    </header>
  );
};

export default Header;
