import React from "react";
import { UserOutlined } from "@ant-design/icons";

interface I_NAVBAR {
  title: string;
  path: string;
  icon: React.ReactNode;
}
interface I_Gender {
  title: string;
  value: string;
}

export const navBar: I_NAVBAR[] = [
  {
    title: "Home",
    path: "/",
    icon: <UserOutlined />,
  },
  {
    title: "Student",
    path: "/student",
    icon: <UserOutlined />,
  },
  {
    title: "Teacher",
    path: "/teacher",
    icon: <UserOutlined />,
  },
];

export const gender: I_Gender[] = [
  {
    title: "Male",
    value: "male",
  },
  {
    title: "Female",
    value: "female",
  },
  {
    title: "Other",
    value: "other",
  },
];
