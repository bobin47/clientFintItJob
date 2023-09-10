import React, { useEffect, useState } from "react";
import TableComponent from "../../../components/Table/TableComponent";
import DrawerComponent from "../../../components/Drawer/DrawerComponent";
import Filter from "../../../components/Filter/Filter";
import { RootState } from "../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { App, Button, Space, Tag, Form } from "antd";
import { getAllJob } from "../../../store/features/jobSlice/thunk/allthunkJob";
import { ColumnsType } from "antd/es/table";
import { changeDate } from "../../../utils/utils";
import FormJob from "./components/FormJob/FormJob";
import { getAllCompanyNoPagination } from "../../../store/features/companySlice/thunk/allthunkCompany";
import dayjs from "dayjs";
import { deleteJob } from "../../../store/features/jobSlice/thunk/deleteThunkJob";

export default function Job() {
  const dispatch = useDispatch();
  const { message, modal } = App.useApp();
  const { job, total } = useSelector((state: RootState) => state.job);
  const { allCompany } = useSelector((state: RootState) => state.company);
  const dateFormat = "YYYY/MM/DD";
  const [action, setAction] = useState<boolean>();
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
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
      title: "name",
      dataIndex: "name",
      key: "name",
      fixed: "left",
    },
    {
      title: "description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "salary",
      dataIndex: "salary",
      key: "salary",
    },
    {
      title: "resume",
      dataIndex: "resume",
      key: "resume",
      render: (_, { resume }) => {
        return <a onClick={() => openAllCV(resume)}>View</a>;
      },
    },
    {
      title: "company",
      dataIndex: "company",
      key: "company",
      render: (_, { company }) => {
        return <div>{company.name}</div>;
      },
    },
    {
      title: "level",
      dataIndex: "level",
      key: "level",
      render: (_, { level }) => {
        return <Tag color="cyan">{level}</Tag>;
      },
    },
    {
      title: "skill ",
      dataIndex: "skill",
      key: "skill",
      render: (_, { skill }) => {
        return <Tag color={"magenta"}>{skill}</Tag>;
      },
    },
    {
      title: "startDate",
      dataIndex: "startDate",
      key: "startDate",
      ellipsis: true,
      render: (startDate) => {
        return <div>{changeDate(startDate)}</div>;
      },
    },
    {
      title: "endDate",
      dataIndex: "endDate",
      key: "endDate",
      ellipsis: true,
      render: (endDate) => {
        return <div>{changeDate(endDate)}</div>;
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

  const openAllCV = (record: any) => {
    console.log(record);
    modal.info({
      title: "All CV",
      content: (
        <div>
          {record.length === 0 ? (
            <div>Not have CV</div>
          ) : (
            <div>
              {record.map((item: any, key: number) => (
                <div>
                  {key + 1}.{" "}
                  <a href={`http://localhost:3000/${item.linkCv}`}>
                    {item.linkCv}
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      ),
    });
  };

  useEffect(() => {
    const param = { limit, page };
    dispatch(getAllJob(param));
    dispatch(getAllCompanyNoPagination());
  }, []);

  const showDrawer = (record: any) => {
    console.log(record);
    const isCheck = record.id === undefined;
    setAction(isCheck);
    form.setFieldsValue({
      id: record.id,
      name: record.name,
      description: record.description,
      skill: record.skill,
      salary: record.salary,
      level: record.level,
      quantity: record.quantity,
      dateOfBirth: [
        dayjs(record.startDate, dateFormat),
        dayjs(record.endDate, dateFormat),
      ],
      company: record.company.id,
    });

    setOpen(true);
  };

  const handleDelete = (record: any) => {
    modal.confirm({
      title: "Do you want this",
      onOk: () => {
        dispatch(deleteJob(record.id));
      },
    });
  };

  const onClose = () => {
    setOpen(false);
  };

  const handlePagination = (current: any, size: any) => {
    const param = { limit: size, page: current };
    dispatch(getAllJob(param));
    setPage(current);
  };

  const onSearch = (value: string) => {
    const param = { limit, page, search: value };
    dispatch(getAllJob(param));
  };

  const onRefresh = () => {
    const param = { limit: 10, page: 1 };
    dispatch(getAllJob(param));
  };

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
        x={2000}
        columns={columns}
        dataSource={job}
        handlePagination={handlePagination}
        page={page}
        pageSize={limit}
        total={total}
      />

      <DrawerComponent
        onClose={onClose}
        FormComponent={
          <FormJob
            dispatch={dispatch}
            allCompany={allCompany}
            form={form}
            action={action}
          />
        }
        open={open}
      />
    </div>
  );
}
