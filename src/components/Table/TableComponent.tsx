import { Table } from "antd";

interface Props {
  dataSource: any;
  columns: any;
  total: number;
  page: number;
  pageSize: number;
  handlePagination: any;
}

export default function TableComponent({
  columns,
  dataSource,
  page,
  total,
  pageSize,
  handlePagination,
}: Props) {
  return (
    <Table
      scroll={{ x: 1500 }}
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
