import { Table } from "antd";

interface Props {
  dataSource: any;
  columns: any;
  total: number;
  page: number;
  pageSize: number;
  handlePagination: any;
  x?: number;
}

export default function TableComponent({
  columns,
  dataSource,
  page,
  total,
  pageSize,
  handlePagination,
  x = 0,
}: Props) {
  return (
    <Table
      scroll={{ x: x }}
      columns={columns}
      dataSource={dataSource}
      pagination={{
        total,
        current: page,
        pageSize,
        onChange: (current, size) => handlePagination(current, size),
      }}
    />
  );
}
