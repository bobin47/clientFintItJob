import type { ColumnsType } from 'antd/es/table';
import { IUserAdmin } from "../../../../../types/user/user.type";
import { Space, Tag ,Button} from 'antd';

export const columns: ColumnsType<IUserAdmin> = [
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
        <Button type='primary' >Edit</Button>
        <Button danger >Delete</Button>

        {/* <a>Invite {record.first_name}</a>
        <a>Delete</a> */}
      </Space>
    ),
  },
];