import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCompany } from "../../../store/features/companySlice/thunk/allthunkCompany";
import { RootState } from "../../../store/store";
import TableComponent from "../../../components/Table/TableComponent";
import { ColumnsType } from "antd/es/table";
import { App, Button, Form, Space } from "antd";
import Filter from "../../../components/Filter/Filter";
import "./style.scss";
import DrawerComponent from "../../../components/Drawer/DrawerComponent";
import FormCompany from "./components/Form/FormCompany";
import { deleteCompany } from "../../../store/features/companySlice/thunk/deleteThunkCompany";

export default function Company() {
  const dispatch = useDispatch();
  const { message, modal } = App.useApp();
  const { company, total } = useSelector((state: RootState) => state.company);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [form] = Form.useForm();
  const [action, setAction] = useState<boolean>();
  const [logo, setLogo] = useState<string>("");

  const columns: ColumnsType<any> = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
      render: (text) => <a>{text}</a>,
      fixed: "left",
      width: 80,
    },
    {
      title: "name",
      dataIndex: "name",
      key: "name",
      fixed: "left",
      width: 220,
    },
    {
      title: "address ",
      dataIndex: "address",
      key: "address",
      ellipsis: true,
    },
    {
      title: "logo ",
      dataIndex: "logo",
      key: "logo",
      render: (logo) => {
        return (
          <img
            style={{ width: "100%", height: "50px" }}
            src={`http://localhost:3000/${logo}`}
            alt=""
          />
        );
      },
    },
    {
      title: "created_at",
      dataIndex: "created_at",
      key: "created_at",
      ellipsis: true,
    },
    {
      title: "description",
      dataIndex: "description",
      key: "description",
      ellipsis: true,
    },
    {
      title: "updated_at",
      dataIndex: "updated_at",
      key: "updated_at",
      ellipsis: true,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => showDrawer(record)} type="primary">
            Edit
          </Button>
          <Button danger onClick={() => handleDelete(record)}>
            Delete
          </Button>
        </Space>
      ),
      fixed: "right",
      width: 150,
    },
  ];

  const [open, setOpen] = useState(false);

  const showDrawer = (record: any) => {
    const isCheck = record.id === undefined;
    setAction(isCheck);
    setLogo(record.logo);
    form.setFieldsValue({
      id: record.id,
      name: record.name,
      address: record.address,
      description: record.description,
    });
    setOpen(true);
  };

  const handleDelete = (record: any) => {
    const { id } = record;
    modal.confirm({
      title: "Do you want delete",
      onOk: () => {
        dispatch(deleteCompany(id));
        message.success("success");
      },
      onCancel: () => {},
    });
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const param = { limit, page };
    dispatch(getAllCompany(param));
  }, []);

  const handlePagination = (current: any, size: any) => {
    const param = { limit: size, page: current };
    dispatch(getAllCompany(param));
    setPage(current);
  };

  const onSearch = (value: string) => {
    const param = { limit, page, search: value };
    dispatch(getAllCompany(param));
  };

  const onRefresh = () => {
    const param = { limit, page };
    dispatch(getAllCompany(param));
  };

  return (
    <div className="container">
      <div className="filter">
        <Filter
          onSearch={onSearch}
          onRefresh={onRefresh}
          showDrawer={showDrawer}
        />
      </div>
      <TableComponent
        columns={columns}
        dataSource={company}
        page={page}
        total={total}
        pageSize={limit}
        handlePagination={handlePagination}
      />

      <DrawerComponent
        onClose={onClose}
        open={open}
        FormComponent={
          <FormCompany
            dispatch={dispatch}
            form={form}
            action={action}
            logo={logo}
          />
        }
      />
    </div>
  );
}
