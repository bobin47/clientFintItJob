import React from "react";
import { Button, Input } from "antd";
const { Search } = Input;
interface Props {
  onSearch: any;
  onRefresh: any;
  showDrawer: any;
}

export default function Filter({ onSearch, onRefresh, showDrawer }: Props) {
  return (
    <>
      <div className="search">
        <Search
          placeholder="Search user"
          allowClear
          enterButton="Search"
          size="large"
          style={{ width: 400 }}
          onSearch={onSearch}
        />
      </div>
      <div className="action">
        <Button className="create" type="primary" onClick={showDrawer}>
          Create
        </Button>
        <Button onClick={onRefresh} className="refresh" type="primary">
          Refresh
        </Button>
      </div>
    </>
  );
}
