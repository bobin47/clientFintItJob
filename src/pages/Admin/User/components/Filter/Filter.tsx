import { Input, Button, Drawer, Form, App } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../../../../store/features/userSlice/thunk/createThunkUser";
import FormUser from "../Form/FormUser";

const { Search } = Input;
interface Props {
  onSearch: (value: string) => void;
  onRefresh: () => void;
  dispatch: any;
}

export default function Filter({ onRefresh, onSearch, dispatch }: Props) {
  const { message } = App.useApp();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onFinish = (values: any) => {
    console.log("Success:", values);
    dispatch(createUser(values));
    message.success("Create Success");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <div className="search">
        <Search
          placeholder="Search user"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
          style={{ width: 400 }}
        />
      </div>
      <div className="action">
        <Button className="create" type="primary" onClick={showDrawer}>
          Create
        </Button>
        <Button className="refresh" type="primary" onClick={onRefresh}>
          Refresh
        </Button>
      </div>
      <FormUser
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        onClose={onClose}
        open={open}
        hide={true}
      />
    </>
  );
}
