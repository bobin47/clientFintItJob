import { Input, Form, Button, Upload, Image } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { UploadFile } from "antd/lib/upload";
import { useEffect, useId, useState } from "react";
import { createCompany } from "../../../../../store/features/companySlice/thunk/createThunkCompany";
import { editCompany } from "../../../../../store/features/companySlice/thunk/editThunkCompany";
import { UploadChangeParam } from "antd/es/upload";

interface Props {
  dispatch: any;
  form: any;
  logo?: any;
  action: any;
}

export default function FormCompany({ dispatch, form, action, logo }: Props) {
  console.log("logo", logo);
  const formData: FormData = new FormData();
  const [fileList, setFileList] = useState<UploadFile[]>([
    {
      uid: "-1",
      name: logo,
      status: "done",
      url: `http://localhost:3000/${logo}`,
      thumbUrl: `http://localhost:3000/${logo}`,
    },
  ]);

  const onFinish = (values: any) => {
    console.log(values);
    formData.append("name", values.name);
    formData.append("address", values.address);
    formData.append("description", values.description);
    formData.append("company", values["uploadFile"].file);

    // for (const key in values) {
    //   if (key === "id") {
    //     continue;
    //   }
    //   if (key === "uploadFile") {
    //     formData.append("company", values[key].file);
    //   }
    //   if (values.hasOwnProperty(key)) {
    //     formData.append(key, values[key]);
    //   }
    // }
    if (action) {
      dispatch(createCompany(formData));
    } else {
      const body = {
        id: values.id,
        formData: formData,
      };
      dispatch(editCompany(body));
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        form={form}
      >
        {action ? null : (
          <Form.Item label="id" name="id">
            <Input disabled />
          </Form.Item>
        )}

        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Address"
          name="address"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Upload file"
          name="uploadFile"
          // rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Upload
            defaultFileList={[...fileList]}
            style={{ maxWidth: 600 }}
            beforeUpload={(file) => {
              return new Promise((resolve, reject) => {
                if (file.size > 9000000) {
                  resolve("sai");
                } else {
                  reject("dung");
                }
              });
            }}
          >
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
