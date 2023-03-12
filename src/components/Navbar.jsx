import "./Navbar.scss";
import { useState } from "react";

const Navbar = ({ link, color }) => {
  const [expand, setExpand] = useState(false);
  const items = ["Home", "Services", "About Us"];
  const links = ["", "services", "about"];
  return (
    <nav>
      <div className={expand ? `items active` : `items`}>
        {items.map((el, i) => (
          <a
            key={i}
            style={{
              color: color,
              fontWeight: color === "black" ? "w500" : "normal",
            }}
            href={`#${links[i]}`}
            className={link === links[i] ? `active` : ""}
          >
            {el}
          </a>
        ))}
      </div>
      <div className="left">
        <i
          className="fa-solid fa-bars fa-2x ham"
          onClick={() => {
            setExpand(!expand);
          }}
        ></i>
        <p style={{ color: "white", fontSize: "1.25rem" }}>Recipe Smith</p>
      </div>
    </nav>
  );
};

export default Navbar;
