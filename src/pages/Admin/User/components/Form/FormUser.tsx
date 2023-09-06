import React from "react";
import { Input, Form, Button, Drawer } from "antd";
const { Search } = Input;

interface Props {
  onFinish: any;
  onFinishFailed: any;
  onClose: any;
  open: any;
  form?: any;
  hide: boolean;
}
export default function FormUser({
  onFinish,
  onFinishFailed,
  onClose,
  open,
  form,
  hide,
}: Props) {
  return (
    <Drawer
      title="Basic Drawer"
      placement="right"
      onClose={onClose}
      open={open}
    >
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        {hide ? (
          <></>
        ) : (
          <Form.Item
            label="id"
            name="id"
            rules={[{ required: true, message: "Please input your id!" }]}
          >
            <Input disabled />
          </Form.Item>
        )}

        <Form.Item
          label="first_name"
          name="first_name"
          rules={[{ required: true, message: "Please input your first_name!" }]}
        >
          <Input />
        </Form.Item>
        {hide ? (
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
        ) : (
          <></>
        )}

        <Form.Item
          label="last_name"
          name="last_name"
          rules={[{ required: true, message: "Please input your last_name!" }]}
        >
          <Input />
        </Form.Item>
        {hide ? (
          <Form.Item
            label="email"
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        ) : (
          <></>
        )}

        <Form.Item
          label="status"
          name="status"
          rules={[{ required: true, message: "Please input your status!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" onClick={() => {}}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
}
