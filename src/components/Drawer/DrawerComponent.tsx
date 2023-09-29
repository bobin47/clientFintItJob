import { Drawer } from "antd";
interface Props {
  onClose: any;
  open: any;
  FormComponent: any;
  width?: any;
}

export default function DrawerComponent({
  onClose,
  open,
  FormComponent,
  width,
}: Props) {
  return (
    <Drawer
      title="Basic Drawer"
      placement="right"
      onClose={onClose}
      open={open}
      width={width}
    >
      {FormComponent}
    </Drawer>
  );
}
