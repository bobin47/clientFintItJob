import React, { useEffect, useState } from "react";
import TableComponent from "../../../components/Table/TableComponent";
import DrawerComponent from "../../../components/Drawer/DrawerComponent";
import Filter from "../../../components/Filter/Filter";
import { RootState } from "../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { App, Button, Space, Form, Image } from "antd";
import { editPost } from "../../../store/features/postSlice/thunk/editThunkPost";
import { getAllPost } from "../../../store/features/postSlice/thunk/allthunkPost";
import { ColumnsType } from "antd/es/table";
import { changeDate } from "../../../utils/utils";
import SelectCategory from "./components/SelectCategory/SelectCategory";
import { getAllCategory } from "../../../store/features/categorySlice/thunk/allthunkCategory";
import FormCategory from "./components/FormCategory/FormCategory";
import { deletePost } from "../../../store/features/postSlice/thunk/deleteThunkPost";

export default function Post() {
  const dispatch = useDispatch();
  const { message, modal } = App.useApp();
  const { post, total } = useSelector((state: RootState) => state.post);
  const { category } = useSelector((state: RootState) => state.category);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [action, setAction] = useState<boolean>();
  const [open, setOpen] = useState(false);
  const [defaultValueSelect, setDefaultValueSelect] = useState("khong co gi");
  const [form] = Form.useForm();

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
      title: "title",
      dataIndex: "title",
      key: "title",
      fixed: "left",
    },
    {
      title: "description",
      dataIndex: "description",
      key: "description",
      ellipsis: true,
    },
    {
      title: "thumbnail",
      dataIndex: "thumbnail",
      key: "thumbnail",
      render(value, { thumbnail }, index) {
        return <Image src={`http://localhost:3000/${thumbnail}`} />;
      },
    },
    {
      title: "category",
      dataIndex: "category",
      key: "category",
      render(value, { category }, index) {
        return <div>{category.name}</div>;
      },
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
      width: 150,
    },
  ];

  useEffect(() => {
    const param = { limit, page };
    dispatch(getAllPost(param));
    dispatch(getAllCategory());
  }, []);

  const handleDelete = (record: any) => {
    modal.confirm({
      title: "Do you want this",
      onOk: () => {
        dispatch(deletePost(record.id));
      },
    });
  };

  const showDrawer = (record: any) => {
    const isCheck = record.id === undefined;
    setAction(isCheck);
    if (record.id) {
      form.setFieldsValue({
        id: record.id,
        title: record.title,
        description: record.description,
      });
    }
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handlePagination = (current: any, size: any) => {
    const param = { limit: size, page: current };
    dispatch(getAllPost(param));
    setPage(current);
  };

  const onSearch = (value: string) => {
    const param = { limit, page, search: value };
    dispatch(getAllPost(param));
  };

  const onRefresh = () => {
    const param = { limit: 10, page: 1 };
    setPage(1);
    setDefaultValueSelect("Select One");
    dispatch(getAllPost(param));
  };

  const handleChange = (value: string) => {
    const param = { limit, page, category: value };
    dispatch(getAllPost(param));
  };

  return (
    <div className="container">
      <div className="filter">
        <Filter
          onRefresh={onRefresh}
          onSearch={onSearch}
          showDrawer={showDrawer}
          selectItem={
            <SelectCategory
              defaultValue={defaultValueSelect}
              category={category}
              handleChange={handleChange}
            />
          }
        />
      </div>
      <TableComponent
        columns={columns}
        dataSource={post}
        handlePagination={handlePagination}
        page={page}
        pageSize={limit}
        total={total}
      />

      <DrawerComponent
        width={900}
        onClose={onClose}
        FormComponent={
          <FormCategory
            form={form}
            category={category}
            dispatch={dispatch}
            action={action}
          />
        }
        open={open}
      />
    </div>
  );
}
