import { navLinks } from "../constants/data";
import React, { useEffect } from "react";

export default function Navbar({ onScrollToSection }) {
  // useStates
  const [wideEnough, setWideEnough] = React.useState(window.innerWidth > 700);
  const [open, setOpen] = React.useState(false);

  // Components
  const Navitems = () => (
    <ul>
      {navLinks.map((item) => (
        <li key={item.id}>
          <a
            href={item.href}
            onClick={(e) => {
              e.preventDefault(); // Prevent default anchor behavior
              onScrollToSection(item.href);
            }}
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );

  const Hamburger = () => (
    <button className="hamburger" onClick={toggle}>
      <img src={open ? "/new/cros.svg" : "/new/hamburger.svg"} alt="ham" />
    </button>
  );

  // Event functions
  const toggle = () => setOpen((prev) => !prev);

  // Adjust wideEnough state based on window resize
  useEffect(() => {
    const handleResize = () => {
      setWideEnough(window.innerWidth > 700);
      if (window.innerWidth > 700) {
        setOpen(false); // Close the menu if the screen width becomes large enough
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Return
  return (
    <>
      <header>
        <div className="name">
          <a href="#">Samarvir Singh</a>
        </div>
        <div className="right">{wideEnough ? <Navitems /> : <Hamburger />}</div>
      </header>

      {!wideEnough && open && (
        <div className="mobile-menu">
          <Navitems />
        </div>
      )}
    </>
  );
}
