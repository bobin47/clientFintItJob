import { App, Button, Space, Table, Tag, Form } from "antd";
import { useState } from "react";
import { IUserAdmin } from "../../../../../types/user/user.type";
import { ColumnsType } from "antd/es/table";
import FormUser from "../Form/FormUser";

interface Props {
  user: IUserAdmin[];
  onChangePagination: any;
  total: number;
  page: number;
  dispatch: any;
}

export default function TableUser({
  user,
  onChangePagination,
  total,
  page,
  dispatch,
}: Props) {
  const columns: ColumnsType<IUserAdmin> = [
    {
      title: "ID",
      key: "id",
      dataIndex: "id",
    },
    {
      title: "Email",
      key: "email",
      dataIndex: "email",
    },
    {
      title: "first_name",
      key: "first_name",
      dataIndex: "first_name",
    },
    {
      title: "last_name",
      key: "last_name",
      dataIndex: "last_name",
    },
    {
      title: "roles",
      key: "roles",
      dataIndex: "roles",
      render: (_, { roles }) => {
        const color = roles === "Admin" ? "magenta" : "green";
        return <Tag color={color}>{roles}</Tag>;
      },
    },
    {
      title: "created_at",
      key: "created_at",
      dataIndex: "created_at",
    },
    {
      title: "updated_at",
      key: "updated_at",
      dataIndex: "updated_at",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => showDrawer(record)} type="primary">
            Edit
          </Button>
          <Button danger>Delete</Button>
        </Space>
      ),
    },
  ];
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [open, setOpen] = useState(false);
  const { message } = App.useApp();
  const [form] = Form.useForm();

  const showDrawer = (record: any) => {
    console.log(record);
    setOpen(true);
    form.setFieldsValue({
      first_name: record.first_name,
      last_name: record.last_name,
      status: record.status,
      id: record.id,
    });
  };

  const onClose = () => {
    setOpen(false);
  };

  const onFinish = (values: any) => {
    console.log("Success:", values);
    // dispatch(createUser(values));
    message.success("Create Success");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const onChangePaginationTable = (current: number, size: number) => {
    setCurrent(current);
    setPageSize(size);
    onChangePagination(current, pageSize);
  };
  return (
    <>
      <Table
        columns={columns}
        dataSource={user}
        pagination={{
          total,
          current: page,
          pageSize,
          onChange: (current, size) => onChangePaginationTable(current, size),
        }}
      />

      <FormUser
        onClose={onClose}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        open={open}
        form={form}
        hide={false}
      />
    </>
  );
}
