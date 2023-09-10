import { Button, DatePicker, Form, Input } from "antd";
import DatePickerComponent from "../DatePicker/DatePicker";
import moment from "moment";
import dayjs from "dayjs";
import { Select, Space } from "antd";
import { changeDate } from "../../../../../utils/utils";
import { createJob } from "../../../../../store/features/jobSlice/thunk/createThunkJob";
import { editJob } from "../../../../../store/features/jobSlice/thunk/editThunkJob";

const { Option } = Select;
const { RangePicker } = DatePicker;
interface Props {
  allCompany: any;
  form: any;
  action: any;
  dispatch: any;
}
export default function FormJob({ allCompany, form, action, dispatch }: Props) {
  console.log(action);
  const onFinish = (values: any) => {
    const body = {
      name: values.name,
      description: values.description,
      skill: values.skill,
      salary: values.salary,
      level: values.level,
      quantity: values.quantity,
      startDate: changeDate(values.dateOfBirth[0].$d),
      endDate: changeDate(values.dateOfBirth[1].$d),
      company: values.company,
    };
    if (action) {
      dispatch(createJob(body));
    } else {
      const data = {
        id: values.id,
        body: body,
      };
      dispatch(editJob(data));
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      form={form}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      {action ? null : (
        <Form.Item
          label="id"
          name="id"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input disabled />
        </Form.Item>
      )}
      <Form.Item
        label="name"
        name="name"
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="description"
        name="description"
        rules={[{ required: true, message: "Please input your description!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="skill"
        name="skill"
        rules={[{ required: true, message: "Please input your skill!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="salary"
        name="salary"
        rules={[{ required: true, message: "Please input your salary!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="level"
        name="level"
        rules={[{ required: true, message: "Please input your level!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="quantity"
        name="quantity"
        rules={[{ required: true, message: "Please input your quantity!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        rules={[{ required: true, message: "Please input your quantity!" }]}
        label="Date Of Birth"
        name="dateOfBirth"
      >
        <RangePicker />
      </Form.Item>

      <Form.Item
        label="company"
        name="company"
        rules={[{ required: true, message: "Please input your company!" }]}
      >
        <Select placeholder="Please select a category">
          {allCompany &&
            allCompany.map((item: any) => {
              return <Option value={item.id}>{item.name}</Option>;
            })}
        </Select>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
