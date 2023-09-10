import { Select } from "antd";
import React from "react";
interface Props {
  category: any;
  handleChange?: any;
  defaultValue?: any;
}
const { Option } = Select;

export default function SelectCategory({
  category,
  handleChange,
  defaultValue,
}: Props) {
  return (
    <div>
      <Select
        placeholder="Please select a category"
        onChange={handleChange}
        style={{ width: "180px", marginRight: "5px" }}
      >
        {category &&
          category.map((item: any) => {
            return <Option value={item.id}>{item.name}</Option>;
          })}
      </Select>{" "}
    </div>
  );
}
