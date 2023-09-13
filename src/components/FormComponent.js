import React, { useEffect } from "react";
import { Form, Input, Button, Select } from "antd";
const { Option } = Select;

const FormComponent = ({ onSubmit, formItems }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    // Handle form submission and store data in state
    onSubmit(values);
    form.resetFields();
  };

  return (
    <Form className="form" form={form} onFinish={onFinish}>
      {formItems.length ? (
        formItems.map((item) => {
          if (item.key === "gender") {
            return(
            <Form.Item
            key={item.key}
            className="form-item"
            name={item.key}
            label={item.title}
            rules={item.rules}
            >
              <Select>
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>
            )
          } else {
            return (
              <Form.Item
                key={item.key}
                className="form-item"
                name={item.key}
                label={item.title}
                rules={item.rules}
              >
                <Input className="form-input" />
              </Form.Item>
            );
          }
        })
      ) : (
        <></>
      )}

      <Form.Item>
        <Button type="primary" htmlType="submit" className="submit-button">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormComponent;
