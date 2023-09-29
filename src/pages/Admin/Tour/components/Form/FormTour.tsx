import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Button, Form, Input } from "antd";

interface Props {
  value?: string;
  onChange?: any;
}
const CustomCKEditor = ({ onChange, value }: Props) => {

  const handleEditorChange = (event: any, editor: any) => {
    const data = editor.getData();
    onChange(data);
  };

  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        data={
          "<p>fdasdfasdfe</p><p>&nbsp;</p><p>&nbsp;</p><p><i>asdfasd</i></p><p>&nbsp;</p><p>&nbsp;</p><p><strong>hello</strong></p>"
        }
        onChange={handleEditorChange}
        config={{
          image: {
            toolbar: ["imageTextAlternative", "|", "imageInsert"],
            // styles: ["fullSize", "alignLeft", "alignCenter", "alignRight"],
          },
        }}
      />
    </div>
  );
};

interface PropsC {
  dispatch: any;
  form?: any;
  action: any;
}

export default function FormTour({ category, dispatch, form, action }: PropsC) {
  const onFinish = (values: any) => {
    console.log(values);
  };
  return (
    <div>
      <Form
        form={form}
        onFinish={onFinish}
        name="basic"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 24 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        {action ? null : (
          <Form.Item name="_id" label="id" wrapperCol={{ span: 8 }}>
            <Input disabled />
          </Form.Item>
        )}
        <Form.Item name="title" label="title" wrapperCol={{ span: 8 }}>
          <Input />
        </Form.Item>
        <Form.Item name="price" label="price" wrapperCol={{ span: 8 }}>
          <Input />
        </Form.Item>
        <Form.Item name="brief" label="brief" wrapperCol={{ span: 8 }}>
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="description"
          wrapperCol={{ span: 8 }}
        >
          <Input />
        </Form.Item>

        <Form.Item name="content" label="content">
          <CustomCKEditor />
        </Form.Item>
        <Form.Item
          wrapperCol={{ span: 8 }}
          style={{ display: "flex", justifyContent: "end" }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
