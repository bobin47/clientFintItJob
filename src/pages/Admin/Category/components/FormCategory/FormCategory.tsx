import { Button, Form, Input } from "antd";
import React from "react";
import { createCategory } from "../../../../../store/features/categorySlice/thunk/createThunkCategory";
import { editCategory } from "../../../../../store/features/categorySlice/thunk/editThunkCategory";

interface Props {
  dispatch: any;
  form: any;
  action: any;
}

export default function FormCategory({ action, dispatch, form }: Props) {
  const onFinish = (values: any) => {
    console.log("Success:", values);
    if (action) {
      dispatch(createCategory(values));
    } else {
      const body = {
        id: values.id,
        body: {
          name: values.name,
          status: values.status,
          description: values.description,
        },
      };
      dispatch(editCategory(body));
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  type FieldType = {
    id?: any;
    name?: string;
    description?: string;
    status?: string;
  };

  return (
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
      {action ? null : (
        <Form.Item<FieldType>
          label="id"
          name="id"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input disabled />
        </Form.Item>
      )}

      <Form.Item<FieldType>
        label="Name Category"
        name="name"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Description"
        name="description"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Status"
        name="status"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
