import React, { useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Button, Form, Input, Select, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { createPost } from "../../../../../store/features/postSlice/thunk/createThunkPost";
import { editPost } from "../../../../../store/features/postSlice/thunk/editThunkPost";
const { Option } = Select;
interface Props {
  value?: any;
  onChange?: any;
}

const CustomCKEditor = ({ onChange, value }: Props) => {
  const handleEditorChange = (event: any, editor: any) => {
    const data = editor.getData();
    onChange(data);
  };

  return (
    <CKEditor
      editor={ClassicEditor}
      data={value}
      onChange={handleEditorChange}
    />
  );
};

interface PropsC {
  category: any;
  dispatch: any;
  form: any;
  action: any;
}

export default function FormCategory({
  category,
  dispatch,
  form,
  action,
}: PropsC) {
  // const [form] = Form.useForm();

  // useEffect(() => {
  //   form.setFieldsValue({
  //     name: "name",
  //     description: "<p>dasdasd</p>",
  //   });
  // }, []);

  const formData: FormData = new FormData();
  const formDataEdit: FormData = new FormData();

  const onFinish = (values: any) => {
    console.log(values);
    if (action) {
      formData.append("title", values.title);
      formData.append("description", values.description);
      formData.append("thumbnail", values["thumbnail"].file);
      formData.append("category", values.category);
      dispatch(createPost(formData));
    } else {
      formDataEdit.append("title", values.title);
      formDataEdit.append("description", values.description);
      formDataEdit.append("thumbnail", values["thumbnail"].file);
      const data = { id: values.id, body: formDataEdit };
      dispatch(editPost(data));
    }
  };

  return (
    <div>
      <Upload style={{ maxWidth: 600 }} fileList={[]} />
      <Form
        form={form}
        onFinish={onFinish}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 20 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        {action ? null : (
          <Form.Item name="id" label="id" wrapperCol={{ span: 8 }}>
            <Input disabled />
          </Form.Item>
        )}
        <Form.Item name="title" label="title" wrapperCol={{ span: 8 }}>
          <Input />
        </Form.Item>
        <Form.Item name="thumbnail" label="Name" wrapperCol={{ span: 8 }}>
          <Upload
            // defaultFileList={[...fileList]}
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
        {action ? (
          <Form.Item name="category" label="category" wrapperCol={{ span: 8 }}>
            <Select placeholder="Please select a category">
              {category &&
                category.map((item: any) => {
                  return <Option value={item.id}>{item.name}</Option>;
                })}
            </Select>
          </Form.Item>
        ) : null}
        <Form.Item name="description" label="Description">
          <CustomCKEditor />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
