import  { useEffect, useState } from "react";
import TableComponent from "../../../components/Table/TableComponent";
import DrawerComponent from "../../../components/Drawer/DrawerComponent";
import Filter from "../../../components/Filter/Filter";
import { RootState } from "../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { App, Button, Form, Space } from "antd";
import { getAllCategory } from "../../../store/features/categorySlice/thunk/allthunkCategory";
import type { ColumnsType } from 'antd/es/table';
import FormCategory from "./components/FormCategory/FormCategory";
import { deleteCategory } from "../../../store/features/categorySlice/thunk/deleteThunkCategory";

export default function Category() {
  const dispatch = useDispatch();
  const { category, total } = useSelector((state: RootState) => state.category);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const [action, setAction] = useState<boolean>();

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  const showDrawer = (record: any) => {
    console.log(record.id)
    const isCheck = record.id === undefined;
    setAction(isCheck);
    form.setFieldsValue({
      id:record.id,
      name:record.name,
      description:record.description
      ,status:record.status
    })
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handlePagination = (current: any, size: any) => {
    // const param = { limit: size, page: current };

    setPage(current);
  };

  const onSearch = (value: string) => {
    // const param = { limit, page, search: value };
  };

  const onRefresh = () => {
    // const param = { limit, page };
  };

  const handleDelete = (record: any) => {
    dispatch(deleteCategory(record.id))
  };

  const columns: ColumnsType<any> = [
    { title: "id", dataIndex: "id", key: "id" },
    { title: "name", dataIndex: "name", key: "name" },
    { title: "description", dataIndex: "description", key: "description" },
    { title: "created_at", dataIndex: "created_at", key: "created_at" },
    { title: "updated_at", dataIndex: "updated_at", key: "updated_at" },
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
  return (
    <div className="container">
      <div className="filter">
        <Filter
          onRefresh={onRefresh}
          onSearch={onSearch}
          showDrawer={showDrawer}
        />
      </div>
      <TableComponent
        columns={columns}
        dataSource={category}
        handlePagination={handlePagination}
        page={page}
        pageSize={limit}
        total={total}
      />

      <DrawerComponent
        onClose={onClose}
        FormComponent={
          <FormCategory action={action} dispatch={dispatch} form={form} />
        }
        open={open}
      />
    </div>
  );
}
