import React, { useEffect, useState } from "react";
import Filter from "../../../components/Filter/Filter";
import TableComponent from "../../../components/Table/TableComponent";
import { ColumnsType } from "antd/es/table";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { App, Button, Form, Space, Tooltip } from "antd";

import "./style.scss";
import { getAllTour } from "../../../store/features/tourSlice/thunk/allthunkSlice";
import { changeDate } from "../../../utils/utils";
import DrawerComponent from "../../../components/Drawer/DrawerComponent";
import FormTour from "./components/Form/FormTour";

export default function Tour() {
  const dispatch = useDispatch();
  const { message, modal } = App.useApp();
  const { tours, total } = useSelector((state: RootState) => state.tour);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [form] = Form.useForm();
  const [action, setAction] = useState<boolean>();
  const [logo, setLogo] = useState<string>("");
  const columns: ColumnsType<any> = [
    {
      title: "id",
      dataIndex: "_id",
      key: "_id",
      render: (text) => <a>{text}</a>,
      fixed: "left",
      width: 150,
    },
    {
      title: "title",
      dataIndex: "title",
      key: "title",
      fixed: "left",
      width: 150,
      ellipsis: true,
      render: (title) => (
        <Tooltip placement="topLeft" title={title}>
          {title}
        </Tooltip>
      ),
    },
    {
      title: "description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "brief",
      dataIndex: "brief",
      key: "brief ",
    },
    {
      title: "content",
      dataIndex: "content",
      key: "content ",
    },
    {
      title: "created_at",
      dataIndex: "created_at",
      key: "created_at",
      ellipsis: true,
      render: (created_at) => {
        return <div>{changeDate(created_at)}</div>;
      },
    },
    {
      title: "updated_at",
      dataIndex: "updated_at",
      key: "updated_at",
      render: (updated_at) => {
        return <div>{changeDate(updated_at)}</div>;
      },
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
      width: 180,
    },
  ];

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const param = { limit, page };
    dispatch(getAllTour(param));
  }, []);

  const showDrawer = (record: any) => {
    console.log(record)
    const isCheck = record._id === undefined;
    setAction(isCheck);
    setLogo(record.logo);
    form.setFieldsValue({
      _id: record._id,
      title: record.title,
      price: record.price,
      brief: record.brief,
      description: record.description,
      content: record.content,
    });
    setOpen(true);
  };

  const handleDelete = (record: any) => {
    const { _id } = record;
    modal.confirm({
      title: "Do you want delete",
      onOk: () => {
        //  dispatch(deleteCompany(id));
        message.success("success");
      },
      onCancel: () => {},
    });
  };

  const onClose = () => {
    setOpen(false);
  };

  const handlePagination = (current: any, size: any) => {
    const param = { limit: size, page: current };
    dispatch(getAllTour(param));
    setPage(current);
  };

  const onSearch = (value: string) => {
    const param = { limit, page, search: value };
    //  dispatch(getAllCompany(param));
  };

  const onRefresh = () => {
    const param = { limit, page };
    //  dispatch(getAllCompany(param));
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
        x={1500}
        columns={columns}
        dataSource={tours}
        page={page}
        total={total}
        pageSize={limit}
        handlePagination={handlePagination}
      />

      <DrawerComponent
        width={1400}
        onClose={onClose}
        open={open}
        FormComponent={
          <FormTour action={action} dispatch={dispatch} form={form} />
        }
      />
     
    </div>
  );
}
