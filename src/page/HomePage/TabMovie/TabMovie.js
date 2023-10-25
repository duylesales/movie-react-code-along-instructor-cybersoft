import React, { useEffect, useState } from "react";
import { movieService } from "../../../service/service";

import { Tabs } from "antd";
import moment from "moment";

const onChange = (key) => {
  console.log(key);
};

export default function TabMovie() {
  const [heThongRap, setHeThongRap] = useState([]);
  useEffect(() => {
    movieService
      .getMovieByTheater()
      .then((res) => {
        setHeThongRap(res.data.content);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let renderHeThongRap = () => {
    return heThongRap.map((heThong) => {
      return {
        key: heThong.maHeThongRap,
        label: <img className="w-16" src={heThong.logo} alt="" />,
        children: (
          <Tabs
            style={{
              height: 500,
            }}
            tabPosition="left"
            items={heThong.lstCumRap.map((cumRap) => {
              return {
                key: cumRap.tenCumRap,
                label: (
                  <div className="text-left w-96 whitespace-normal">
                    <p>{cumRap.tenCumRap}</p>
                    <p>{cumRap.diaChi}</p>
                  </div>
                ),
                children: (
                  <div
                    style={{
                      height: 500,
                      overflowY: "scroll",
                    }}
                  >
                    {renderDsPhim(cumRap)}
                  </div>
                ),
              };
            })}
          />
        ),
      };
    });
  };

  let renderDsPhim = (cumRap) => {
    return cumRap.danhSachPhim.map((phim) => {
      return (
        <div className="flex space-x-3 mb-2">
          <img className="w-20 h-32 object-cover" src={phim.hinhAnh} alt="" />
          <div>
            <h3 className="font-medium">{phim.tenPhim}</h3>
            <div className="grid grid-cols-3 gap-3">
              {phim.lstLichChieuTheoPhim.slice(0, 9).map((lichChieu) => {
                return (
                  <span className=" rounded bg-red-600 px-2 py-1 text-white">
                    {moment(lichChieu.ngayChieuGioChieu).format(
                      "DD/MM/YYYY - hh:mm"
                    )}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container py-20">
      <Tabs
        style={{ height: 500 }}
        tabPosition="left"
        defaultActiveKey="1"
        items={renderHeThongRap()}
        onChange={onChange}
      />
    </div>
  );
}
