import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieService } from "../../service/service";
import { Progress, Rate } from "antd";

export default function DetailPage() {
  let { id } = useParams();
  const [detail, setDetail] = useState();
  useEffect(() => {
    movieService
      .getDetail(id)
      .then((res) => {
        //   console.log(res);
        setDetail(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="container flex items-center">
      <img className="w-1/3" src={detail?.hinhAnh} alt="" />
      <Progress
        strokeWidth={20}
        strokeColor={"red"}
        size={200}
        format={(number) => {
          return (
            <p className="animate-spin text-blue-600 text-xl font-extrabold">
              {number / 10} Điểm
            </p>
          );
        }}
        type="circle"
        percent={detail?.danhGia * 10}
      />
      <Rate allowHalf value={detail?.danhGia / 2} />
    </div>
  );
}
