import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../services/auth";
const Login = () => {
  const [userName, setUserName] = useState("gbwt");
  const [password, setPassword] = useState("gbwt");
  const [subdomain, setSubdomain] = useState("gbwt");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const loginFun = () => {
    auth
      .login(userName, password, subdomain)
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("token", data.token);
        if (data.code !== 401) {
          navigate("/");
        }
      });
  };

  const onFinish = (values) => {
    setUserName(values.userName);
    setPassword(values.password);
    setSubdomain(values.subdomain);

    loginFun(userName, password, subdomain);
  };
  useEffect(() => {
    token === null || token === "undefined"
      ? navigate("/login")
      : navigate("/");
  }, []);

  return (
    <>
      <div className="login-body">
        <div className="login-page">
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="subdomain"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Cубдомен"
              />
            </Form.Item>
            <Form.Item
              name="userName"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="text"
                placeholder="Имя пользователя"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Пароль"
                value={password}
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Запомнить меня</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
              Or <a href="">register now!</a>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};
export default Login;
