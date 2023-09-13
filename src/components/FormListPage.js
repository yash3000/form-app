import React, { useState } from 'react';
import { Button, Modal, Table } from 'antd';
import FormComponent from "./FormComponent";

import "./form.css";

const FormListPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [submittedForms, setSubmittedForms] = useState([]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFormSubmit = (formData) => {
    // Handle form submission and store data in state
    setSubmittedForms([...submittedForms, formData]);
    setIsModalVisible(false);
  };

  const formItems = [
    {
      key: "email",
      dataIndex: "email",
      title: "Email",
      rules: [
        {
          required: true,
          message: "Please enter your email id",
        },
        {
          type: 'email',
          message: 'Invalid email format',
        },
      ],
    },
    {
      key: "name",
      dataIndex: "name",
      title: "Name",
      rules: [
        {
          required: true,
          message: "Please enter your name",
        },
      ],
    },
    {
      key: "phone",
      dataIndex: "phone",
      title: "Phone",
      rules: [
        {
          required: true,
          message: "Please enter your phone number",
        },
        {
          validator: function (rule, value, callback){
            const phoneNumberPattern = /^\d{10}$/;
            if (!phoneNumberPattern.test(value.trim())) {
              callback('Invalid phone number');
            } else {
              callback();
            }
          }, // Custom validator function
        },
      ],
    },
    {
      key: "gender",
      dataIndex: "gender",
      title: "Gender",
      rules: [
        {
          required: true,
          message: "Please enter your gender",
        },
        {
          validator: function (rule, value, callback){
            const phoneNumberPattern = /male|female|other/;
            if (!phoneNumberPattern.test(value.toLowerCase().trim())) {
              callback('Invalid gender');
            } else {
              callback();
            }
          }, // Custom validator function
        },
      ],
    },
  ];

  return (
    <div className='main-page'>
      <Button type="primary" onClick={showModal}>
        Add New Data
      </Button>

      <Modal
        title="Personal Details"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        className="full-page-modal"
      >
        <FormComponent onSubmit={onFormSubmit} formItems={formItems}/>
      </Modal>
      <Table className='data-table' dataSource={submittedForms} columns={formItems} />
    </div>
  );
};

export default FormListPage;
