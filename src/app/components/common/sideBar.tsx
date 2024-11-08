"use client";
import { navBar } from "@/app/utils/constant";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div className="sidebar w-60 shadow-2xl pt-8">
      <div className="flex flex-col justify-start items-start">
        <ul className="h-full flex flex-col justify-start items-start gap-2 w-full">
          {navBar?.map((item, index) => {
            console.log(pathName === item?.path);
            return (
              <li
                key={index}
                className={`${
                  pathName == item?.path && "hover:bg-blue-400 hover:text-white"
                } text-2xl font-medium pl-5 cursor-pointer hover:bg-blue-400 hover:text-white w-full p-2.5`}
              >
                <Link
                  href={item?.path}
                  className="flex flex-row justify-start items-start gap-2 font-poppins"
                >
                  {item?.icon}
                  {item?.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
