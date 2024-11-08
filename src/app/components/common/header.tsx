import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex flex-row justify-between items-center bg-blue-500 h-24 px-10">
        <Link href="/" className="text-4xl font-bold font-poppins">
          Logo
        </Link>
        <Avatar size={64} icon={<UserOutlined />} className="bg-red-400" />
      </div>
    </>
  );
};
4;

export default Header;
