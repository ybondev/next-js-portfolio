"use client";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { BsFillCloudSunFill, BsFillCloudMoonFill } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [toggleMode, setToggleMode] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  let menuRef = useRef();
  let header = useRef();

  const toggle_dark_mode = () => {
    if (theme === "dark") {
      localStorage.setItem("mode", "light");
      setTheme("light");
    } else {
      localStorage.setItem("mode", "dark");
      setTheme("dark");
    }

    if (toggleMode === false) {
      setToggleMode(true);
    } else {
      setToggleMode(false);
    }
  };

  useEffect(() => {
    document.body.className = theme;

    const current_mode = localStorage.getItem("mode");
    setTheme(current_mode);

    const navbarHandler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", navbarHandler);

    return () => {
      document.removeEventListener("mousedown", navbarHandler);
    };
  }, [theme]);

  // document.addEventListener("scroll", function () {
  //   header.current.classList.toggle("sticky", window.scrollY > 0);
  // });
  return (
    <div className="container-fluid navbar_fluid sticky-top" ref={header}>
      <div className="container">
        <nav className="navbar " ref={menuRef}>
          <Link href={`/`} className="logo">
            ybon<span>.dev</span>
          </Link>
          <ul className={open ? "active" : "inactive"}>
            <li>
              <Link
                href={`/`}
                className={
                  activeLink === "home" ? "active link_item" : "link_item"
                }
              >
                home
              </Link>
            </li>
            <li>
              <Link
                href={`#about`}
                className={
                  activeLink === "about" ? "active link_item" : "link_item"
                }
              >
                about me
              </Link>
            </li>
            <li>
              <Link
                href={`#projects`}
                className={
                  activeLink === "projects" ? "active link_item" : "link_item"
                }
              >
                projects
              </Link>
            </li>
            <li>
              <Link
                href={`#contact`}
                className={
                  activeLink === "contact" ? "active link_item" : "link_item"
                }
              >
                contact
              </Link>
            </li>
            <li className="dark_mode">
              {toggleMode === false ? (
                <BsFillCloudSunFill
                  className="fa_icon"
                  onClick={toggle_dark_mode}
                />
              ) : (
                <BsFillCloudMoonFill
                  className="fa_icon"
                  onClick={toggle_dark_mode}
                />
              )}
            </li>
          </ul>
          <div className="hamburger_menu" onClick={() => setOpen(!open)}>
            {open ? (
              <IoCloseSharp className="fa_icon" />
            ) : (
              <FaBars className="fa_icon" />
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
