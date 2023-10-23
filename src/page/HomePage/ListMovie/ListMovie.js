import React, { useEffect, useState } from "react";
import { movieService } from "../../../service/service";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { NavLink } from "react-router-dom";

export default function ListMovie() {
  const [list, setList] = useState([]);
  useEffect(() => {
    movieService
      .getList()
      .then((res) => {
        console.log(res);
        setList(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let renderList = () => {
    return list.map(({ hinhAnh, tenPhim, maPhim }) => {
      return (
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={
            <img className="object-cover h-48 " alt="example" src={hinhAnh} />
          }
        >
          <Meta title={tenPhim} />
          <NavLink
            className="h-10 w-full block leading-10 text-center rounded bg-red-600 text-white"
            to={`/detail/${maPhim}`}
          >
            Xem ngay
          </NavLink>
        </Card>
      );
    });
  };
  return (
    <div className="container grid grid-cols-5 gap-10 pt-20">
      {renderList()}
    </div>
  );
}
