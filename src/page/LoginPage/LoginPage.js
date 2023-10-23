import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { userService } from "../../service/service";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SET_INFOR } from "../../redux/constant/user";
import Lottie from "lottie-react";
import bgAnimate from "./bgAnimate.json";
const LoginPage = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const onFinish = (values) => {
    userService
      .login(values)
      .then((res) => {
        dispatch({
          type: SET_INFOR,
          payload: res.data.content,
        });
        // lưu thông tin đăng nhập vào localStorage
        localStorage.setItem("USER", JSON.stringify(res.data.content));
        toast.success("Đăng nhập thành công");
        navigate("/");
        console.log(res);
      })
      .catch((err) => {
        toast.error("Đăng nhập thất bại");
        console.log(err);
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="h-screen flex justify-center items-center bg-orange-500">
      <div className="w-1/2 h-full">
        <Lottie animationData={bgAnimate} loop={true} />
      </div>
      <div className="w-1/2 p-10 bg-white rounded">
        <Form
          layout="vertical"
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 24,
          }}
          style={
            {
              // maxWidth: 600,
            }
          }
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="taiKhoan"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="matKhau"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              span: 24,
            }}
          >
            <Button
              className="bg-orange-500 hover:bg-white hover:text-orange-500"
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default LoginPage;
