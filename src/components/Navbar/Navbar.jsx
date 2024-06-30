"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter()

  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Service",
      path: "/service",
    },
    {
      title: "Products",
      path: "/products",
    },
    {
      title: "Blogs",
      path: "/blogs",
    },
    {
      title: "Users",
      path: "/users",
    },
  ];


  const handleLogin =() => {
    router.push('/login')
  }

  return (
    <nav className="flex justify-between px-4 mx-auto text-gray-100 bg-gray-800 py-5">
      <Link href="/">
        <h1 className="text-3xl font-bold cursor-pointer">Logo</h1>
      </Link>
      <ul className="flex items-center gap-6">
        {links.map((link) => (
          <li 
          className={`${pathName === link.path && 'text-red-600 font-semibold'}`}
          key={link.path}>
            <Link href={link.path}>{link.title}</Link>
          </li>
        ))}
      </ul>
      <button
       onClick={handleLogin}
       className="bg-gray-800 py-1.5 px-3 border">Login</button>
    </nav>
  );
};

export default Navbar;
