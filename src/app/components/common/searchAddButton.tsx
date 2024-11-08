import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import React from "react";

const SearchAddButton = ({ showModal }: { showModal: () => void }) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row justify-start items-center gap-5">
        <UserOutlined className="text-3xl" />
        <h1 className="text-2xl font-medium">Students</h1>
      </div>
      <div className="flex flex-row justify-end items-center w-[80%] gap-10">
        <div className="w-[70%] flex flex-row justify-end items-center gap-3 border-2 border-blue-500 py-2 px-5 rounded-2xl">
          <SearchOutlined className="text-2xl" />
          <input
            type="text"
            className="border-none outline-none w-full h-8 text-lg"
          />
        </div>
        <button
          onClick={showModal}
          className="text-xl font-medium bg-blue-500 py-3.5 px-6 rounded-xl text-white hover:bg-blue-400"
        >
          Add Student
        </button>
      </div>
    </div>
  );
};

export default SearchAddButton;
