import { https } from "./config";

export let userService = {
  login: (valueForm) => {
    return https.post("/api/QuanLyNguoiDung/DangNhap", valueForm);
  },
};
export let movieService = {
  getList: () => {
    return https.get("/api/QuanLyPhim/LayDanhSachPhim");
  },
};
