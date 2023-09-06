import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../../store/features/userSlice/thunk/thunkUser";
import { RootState } from "../../../store/store";
import TableUser from "./components/Table/TableUser";
import "./style.scss";
import Filter from "./components/Filter/Filter";

export default function User() {
  const dispatch = useDispatch();
  const { user, total } = useSelector((state: RootState) => state.user);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const onChangePagination = (current: number, pageSize: number) => {
    setLimit(pageSize);
    setPage(current);
    dispatch(getAllUser({ limit: pageSize, page: current }));
  };

  useEffect(() => {
    dispatch(getAllUser({ limit, page }));
  }, []);

  const onSearch = (value: string) => {
    dispatch(getAllUser({ limit: 10, page: 1, search: value }));
  };

  const onRefresh = () => {
    setPage(1);
    dispatch(getAllUser({ limit: 10, page: 1 }));
  };

  return (
    <div className="container">
      <div className="filter">
        <Filter onSearch={onSearch} onRefresh={onRefresh} dispatch={dispatch} />
      </div>
      <TableUser
        user={user}
        onChangePagination={onChangePagination}
        total={total}
        page={page}
        dispatch={dispatch}
      />
    </div>
  );
}
