import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../../store/features/userSlice/thunkUser";
import { RootState } from "../../../store/store";
import TableUser from "./components/Table/TableUser";
import { Input } from "antd";
import "./style.scss";

const { Search } = Input;
export default function User() {
  const dispatch = useDispatch();
  const { user, total } = useSelector((state: RootState) => state.user);

  const onChangePagination = (current: number, pageSize: number) => {
    console.log(current);
    console.log(pageSize);
    dispatch(getAllUser({ limit: pageSize, page: current }));
  };

  useEffect(() => {
    dispatch(getAllUser({ limit: 10, page: 1 }));
  }, []);

  const onSearch = (value: string) => {
    dispatch(getAllUser({ limit: 10, page: 1, search: value }));
  };

  return (
    <div className="container">
      <div className="search">
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
          style={{ width: 400 }}
        />
      </div>
      <TableUser
        user={user}
        onChangePagination={onChangePagination}
        total={total}
      />
    </div>
  );
}
