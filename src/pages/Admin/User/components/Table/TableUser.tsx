import { Table } from "antd";
import { useState } from "react";
import { columns } from "./table.type";
import { IUserAdmin } from "../../../../../types/user/user.type";

interface Props {
  user: IUserAdmin[];
  onChangePagination: any;
  total: number;
}

export default function TableUser({ user, onChangePagination, total }: Props) {
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const onChangePaginationTable = (current: number, size: number) => {
    setCurrent(current);
    setPageSize(size);
    onChangePagination(current, pageSize);
  };

  return (
    <Table
      columns={columns}
      dataSource={user}
      pagination={{
        total,
        current,
        pageSize,
        onChange: (current, size) => onChangePaginationTable(current, size),
      }}
    />
  );
}
