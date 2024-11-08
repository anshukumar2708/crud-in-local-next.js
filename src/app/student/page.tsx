"use client";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import SearchAddButton from "../components/common/searchAddButton";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { gender } from "../utils/constant";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { Popover } from "antd";
import { MoreOutlined } from "@ant-design/icons";

const Student = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [studentData, setStudentData] = useState<any>([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState<number>();
  const [editData, setEditData] = useState<any>([]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setIsEdit(false);
  };

  const initialValues = {
    name: "",
    email: "",
    age: "",
    gender: "male",
    joiningDate: moment(new Date()).format("YYYY/MM/DD"),
    workProfile: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Enter Name Field"),
    email: Yup.string()
      .required("Enter Email Field")
      .email("Please Enter Valid Email"),
    age: Yup.string().required("Please Enter Age"),
    gender: Yup.string().required("Please select gender"),
    joiningDate: Yup.string().required("Please Select Joining Date"),
    workProfile: Yup.string().required("Please Select Work Profile"),
  });

  const onSubmit = (values: any, { resetForm }: { resetForm: any }) => {
    if (!isEdit) {
      values.id = studentData.length + 1;
      setStudentData([...studentData, values]);
    }
    if (isEdit) {
      console.log(editId);
      const objectToUpdate = studentData.filter(
        (item: any) => item?.id === editId
      );

      if (objectToUpdate) {
        objectToUpdate[0]["name"] = values?.name;
        objectToUpdate[0]["email"] = values?.email;
        objectToUpdate[0]["age"] = values?.age;
        objectToUpdate[0]["gender"] = values?.gender;
        objectToUpdate[0]["joiningDate"] = values?.joiningDate;
        objectToUpdate[0]["workProfile"] = values?.workProfile;
      }
    }
    setIsEdit(false);
    resetForm();
    handleOk();
  };

  const deleteHandler = (id: number) => {
    const filterData = studentData.filter((item: any) => item?.id !== id);
    setStudentData(filterData);
  };

  const editHandler = (id: number) => {
    setIsModalOpen(true);
    setIsEdit(true);
    setEditId(id);
    console.log("id", id);
    const filterData = studentData.filter((item: any) => item?.id == id);
    setEditData(filterData);
    console.log(filterData);
  };

  return (
    <div className="h-full w-full shadow-xl m-10 p-10">
      <SearchAddButton showModal={showModal} />

      <Modal
        // title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={900}
      >
        <div className="w-full flex flex-col gap-8">
          <h1 className="text-center text-2xl font-semibold">
            {isEdit ? "Edit" : "Add"} Student Data
          </h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({
              values,
              isSubmitting,
              // dirty,
              setFieldValue,
              // touched,
              // errors,
              // handleBlur,
              // handleChange,
              // isValid,
              // handleSubmit,
              // handleReset,
            }) => {
              // console.log("isSubmitting", isSubmitting);
              // console.log("dirty", dirty);
              // console.log("touched", touched);
              // console.log("errors", errors);
              // console.log("values", values);
              // console.log("handleBlur", handleBlur);
              // console.log("handleChange", handleChange);
              // console.log("isValid", isValid);
              // console.log("handleSubmit", handleSubmit);
              // console.log("handleReset", handleReset);

              console.log(isEdit);

              useEffect(() => {
                if (isEdit) {
                  setFieldValue("name", editData[0]?.name);
                  setFieldValue("email", editData[0]?.email);
                  setFieldValue("age", editData[0]?.age);
                  setFieldValue("gender", editData[0]?.gender);
                  setFieldValue(
                    "joiningDate",
                    moment(editData[0]?.joiningDate).format("YYYY/MM/DD")
                  );
                  setFieldValue("workProfile", editData[0]?.workProfile);
                }
              }, []);

              return (
                <Form>
                  <div className="flex flex-col justify-center items-center gap-10">
                    <div className="flex flex-col gap-5">
                      <div className="flex flex-row justify-center items-center w-full gap-[10%]">
                        <div className="flex flex-col justify-start items-start gap-2">
                          <label
                            htmlFor="name"
                            className="text-2xl font-medium"
                          >
                            Name
                          </label>
                          <Field
                            type="text"
                            name="name"
                            placeholder="Add Name"
                            className="text-xl outline-none border-2 border-blue-400 rounded-md px-2 py-1"
                          />
                          <ErrorMessage
                            name="name"
                            component="div"
                            className="tex-xl text-red-500"
                          />
                        </div>

                        <div className=" flex flex-col justify-start items-start gap-2">
                          <label
                            htmlFor="email"
                            className="text-2xl font-medium"
                          >
                            Email
                          </label>
                          <Field
                            type="text"
                            name="email"
                            placeholder="Add Email"
                            className="text-xl outline-none border-2 border-blue-400 rounded-md px-2 py-1"
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="tex-xl text-red-500"
                          />
                        </div>
                      </div>

                      <div className="flex flex-row justify-center items-center w-full gap-[10%]">
                        <div className="flex flex-col justify-start items-start gap-2">
                          <label htmlFor="age" className="text-2xl font-medium">
                            Age
                          </label>
                          <Field
                            type="number"
                            name="age"
                            placeholder="Add age"
                            className="text-xl outline-none border-2 border-blue-400 rounded-md px-2 py-1"
                          />
                          <ErrorMessage
                            name="age"
                            component="div"
                            className="tex-xl text-red-500"
                          />
                        </div>

                        <div className=" flex flex-col justify-start items-start gap-2">
                          <label
                            htmlFor="gender"
                            className="text-2xl font-medium"
                          >
                            Gender
                          </label>
                          <div className="flex flex-row justify-start items-center gap-5">
                            {gender?.map((item, index) => {
                              return (
                                <label
                                  key={index}
                                  className="flex flex-row justify-start items-center gap-3 text-xl"
                                >
                                  <Field
                                    type="radio"
                                    name="gender"
                                    value={item?.value}
                                    className="scale-150"
                                  />
                                  {item.title}
                                </label>
                              );
                            })}
                          </div>
                          <ErrorMessage
                            name="gender"
                            component="div"
                            className="tex-xl text-red-500"
                          />
                        </div>
                      </div>

                      <div className="flex flex-row justify-center items-center w-full gap-[10%]">
                        <div className="flex flex-col justify-start items-start gap-2">
                          <label htmlFor="age" className="text-2xl font-medium">
                            Joining Date
                          </label>
                          <Field
                            className="text-xl outline-none border-2 border-blue-400 rounded-md px-2 py-1"
                            component={DatePicker}
                            name="joiningDate"
                            selected={values?.joiningDate}
                            onChange={(date: Date | null) => {
                              setFieldValue("joiningDate", date);
                            }}
                            dateFormat="yyyy/MM/dd"
                          />
                          <ErrorMessage
                            name="joiningDate"
                            component="div"
                            className="tex-xl text-red-500"
                          />
                        </div>
                        <div className="flex flex-col justify-start items-start gap-2">
                          <label htmlFor="age" className="text-2xl font-medium">
                            Work Profile
                          </label>
                          <Field
                            component="select"
                            name="workProfile"
                            style={{
                              backgroundColor: "white",
                              color: "red",
                              border: "2px solid green",
                              padding: "8px",
                              fontSize: "20px",
                            }}
                            className="text-2xl outline-none rounded-md px-2 py-1 w-72"
                          >
                            <option
                              value=""
                              disabled
                              style={{ display: "none" }}
                            >
                              Select an option
                            </option>
                            <option
                              value="Frontend"
                              style={{
                                color: "white",
                                background: "red",
                              }}
                            >
                              Frontend
                            </option>
                            <option
                              value="Backend"
                              className="hover:bg-slate-500 hover:text-green"
                            >
                              Backend
                            </option>
                            <option value="Full Stack">Full Stack</option>
                            <option value="DevOps">DevOps</option>
                          </Field>
                          <ErrorMessage
                            name="age"
                            component="div"
                            className="tex-xl text-red-500"
                          />
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="text-xl font-medium bg-blue-500 py-3.5 px-16 rounded-xl text-white hover:bg-blue-400"
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </Modal>

      {/* Table */}
      <div className="w-full mt-16 flex flex-col gap-8">
        <h2 className="text-xl font-semibold text-center">Student Data</h2>
        <table className="w-[100%] border-collapse">
          <thead>
            <tr className="text-left text-xl">
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Joining</th>
              <th>Work Profile</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {studentData?.map((item: any, index: number) => {
              return (
                <tr key={index}>
                  <td className="text-lg">{item?.id}</td>
                  <td className="text-lg">{item?.name}</td>
                  <td>{item?.email}</td>
                  <td>{item?.age}</td>
                  <td>{item?.gender}</td>
                  <td>{moment(item?.joiningDate).format("YYYY/MM/DD")}</td>
                  <td>{item?.workProfile}</td>
                  <td>
                    <Popover
                      placement="bottom"
                      content={
                        <div className="flex flex-col justify-center items-center gap-3">
                          <span className="cursor-pointer">
                            <Button
                              type="dashed"
                              onClick={() => editHandler(item?.id)}
                            >
                              Edit
                            </Button>
                          </span>
                          <span className="cursor-pointer">
                            <Button
                              type="dashed"
                              onClick={() => deleteHandler(item?.id)}
                            >
                              Delete
                            </Button>
                          </span>
                        </div>
                      }
                      trigger="click"
                    >
                      <MoreOutlined />
                    </Popover>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Student;
