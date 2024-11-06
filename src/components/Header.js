"use client";
import { CiSearch, CiMenuBurger } from "react-icons/ci";
import logo from "@/assets/images/main-logo.png";
import Link from "next/link";
import { useState } from "react";
import Categorys from "./Categorys";
import Image from "next/image";
function Header() {
  const [toggle, setToggle] = useState(false);
  let [categoryValue, setCategoryValue] = useState(false);

  return (
    <>
      <header>
        <p className="header-bg"></p>
        <Link href="/">
          <Image
            src={logo.src}
            alt="img-card"
            width={100}
            height={50}
            priority
          />
        </Link>
        <nav className={toggle ? "toggle" : ""}>
          <Link href="/">Home</Link>
          <div
            className="category-nav"
            onClick={() => setCategoryValue(!categoryValue)}
          >
            Category
          </div>
          <Link href="/trending-news">Trending News</Link>
        </nav>

        <div className="header-search">
          <CiSearch color="black" />
          <input type="text" placeholder="Search" />
        </div>
        <div className="menu" onClick={() => setToggle(!toggle)}>
          <CiMenuBurger color="white" size="20" />
        </div>
        <div className={`all-category-header ${categoryValue ? "true" : ""}`}>
          <Categorys
            categoryValue={categoryValue}
            setCategoryValue={setCategoryValue}
          />
        </div>
      </header>
    </>
  );
}

export default Header;
