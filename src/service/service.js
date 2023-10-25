import { https } from "./config";

export let userService = {
  login: (valueForm) => {
    return https.post("/api/QuanLyNguoiDung/DangNhap", valueForm);
  },
};
export let movieService = {
  getList: () => {
    return https.get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP14");
  },
  getDetail: (id) => {
    return https.get(`api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`);
  },
  getMovieByTheater: () => {
    return https.get(
      `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01`
    );
  },
};
