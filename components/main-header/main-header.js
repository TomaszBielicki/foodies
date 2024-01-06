import Link from "next/link";
import React from "react";
import classes from "./main-header.module.css";
import logoImg from "@/assets/logo.png";
import MainHeaderBackground from "./main-header-background";
import Image from "next/image";
import NavLink from "./nav-link";

function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="A plate withg food on it" priority />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/pages/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/pages/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainHeader;
