import { Drawer } from "antd";
import React from "react";
interface Props {
  onClose: any;
  open: any;
  FormComponent: any;
}

export default function DrawerComponent({
  onClose,
  open,
  FormComponent,
}: Props) {
  return (
    <Drawer
      title="Basic Drawer"
      placement="right"
      onClose={onClose}
      open={open}
    >
      {FormComponent}
    </Drawer>
  );
}
