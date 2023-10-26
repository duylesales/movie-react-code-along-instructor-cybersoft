import React, { useEffect, useState } from "react";
import { adminService } from "../service/service";
import { Button, Table, Tag } from "antd";

export default function UsersPage() {
  const [userArr, setUserArr] = useState([]);
  useEffect(() => {
    adminService
      .getUserList()
      .then((res) => {
        setUserArr(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // table antd (dùng table đầu tiên)

  // dataIndex ~ trùng với key của Obj trong data source
  const columns = [
    {
      title: "Name",
      dataIndex: "hoTen",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "User Type",
      dataIndex: "maLoaiNguoiDung",
      key: "maLoaiNguoiDung",
      render: (text) => {
        if (text == "KhachHang") return <Tag color="green">Khách Hàng</Tag>;
        else return <Tag color="red">Quản Trị</Tag>;
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: () => {
        return <Button danger>Delete</Button>;
      },
    },
  ];

  return (
    <div>
      <Table dataSource={userArr} columns={columns} />
    </div>
  );
}
