import { DatePicker } from "antd";
import dayjs from "dayjs";
const { RangePicker } = DatePicker;

export default function DatePickerComponent() {
  const dateFormat = "YYYY/MM/DD";

  return (
    <RangePicker
      // defaultValue={[
      //   dayjs("2023-08-31 12:28:24.830691", dateFormat),
      //   dayjs("2023-08-31 12:28:24.830691", dateFormat),
      // ]}
      format={dateFormat}
    />
  );
}
