import React, { useState, useEffect } from 'react';
import { Form, Modal, Table, Input, Button, DatePicker, Select } from 'antd';
import axios from 'axios';
import { baseURL } from '../../../config';
import { toast } from 'react-toastify';
import dayjs from 'dayjs';

const { Option } = Select;

const ViewBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUserId, setEditingUserId] = useState(null);
  const [form] = Form.useForm();

  const data = JSON.parse(localStorage.getItem("user"));
  const email = data?.email;

  const fetchBookings = async () => {
    try {
      const res = await axios.get(`${baseURL}/booking/view/${email}`);
      setBookings(res.data.data);
    } catch (err) {
      console.error("Error fetching bookings:", err);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${baseURL}/booking/delete/${id}`);
      setBookings(prev => prev.filter(item => item._id !== id));
      toast.success("Booking deleted successfully");
    } catch (error) {
      toast.error("Booking deletion failed");
      console.error("Error while deleting Booking:", error);
    }
  };

  const handleEdit = (record) => {
    setIsModalOpen(true);
    setEditingUserId(record._id);

    form.setFieldsValue({
      fullName: record.fullName,
      email: record.email,
      service: record.service,
      date: dayjs(record.date),
      location: record.location,
    });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
    setEditingUserId(null);
  };

  const onFinish = async (values) => {
    try {
      const updatedData = {
        ...values,
        date: values.date.format("YYYY-MM-DD"),
      };

      await axios.put(`${baseURL}/booking/update/${editingUserId}`, updatedData);

      toast.success('Booking updated successfully');
      handleCancel();
      fetchBookings();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Something went wrong.');
    }
  };

  const columns = [
    {
      title: 'Sr No.',
      key: 'srNo',
      render: (text, record, index) => index + 1,
    },
    {
      title: 'Full Name',
      dataIndex: 'fullName',
      key: 'fullName',
    },
    {
      title: 'Service',
      dataIndex: 'service',
      key: 'service',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <>
          <span
            style={{ color: 'blue', cursor: 'pointer', marginRight: 10 }}
            onClick={() => handleEdit(record)}
          >
            Edit
          </span>
          <span
            style={{ color: 'red', cursor: 'pointer' }}
            onClick={() => handleDelete(record._id)}
          >
            Delete
          </span>
        </>
      ),
    },
  ];

  return (
    <>
      <Modal
        title='Edit Booking'
        width={500}
        footer={null}
        open={isModalOpen}
        onCancel={handleCancel}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[{ required: true, message: 'Please input your full name!' }]}
          >
            <Input placeholder='Enter full name' />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input placeholder='Enter email' />
          </Form.Item>

          <Form.Item
            label="Service Type"
            name="service"
            rules={[{ required: true, message: 'Please select a Service Type!' }]}
          >
            <Select placeholder="Select a category">
              <Option value="Travel">Travel</Option>
              <Option value="Pre Wedding">Pre Wedding</Option>
              <Option value="Behind The Scene">Behind The Scene</Option>
              <Option value="Short Movies">Short Movies</Option>
              <Option value="Songs">Songs</Option>
              <Option value="Spiritual Captures">Spiritual Captures</Option>
              <Option value="Public Places">Public Places</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Booking Date"
            name="date"
            rules={[{ required: true, message: 'Please select booking date' }]}
          >
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item
            label="Location"
            name="location"
            rules={[{ required: true, message: 'Please input your location!' }]}
          >
            <Input placeholder='Enter your Location...' />
          </Form.Item>

          <Form.Item style={{ textAlign: 'center' }}>
            <Button type="primary" htmlType="submit" className='w-full'>
              Update Booking
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      <div style={{ overflowX: 'auto' }}>
        <Table
          className='m-5'
          columns={columns}
          dataSource={bookings}
          rowKey="_id"
          scroll={{ x: 'max-content' }}
          pagination={{ pageSize: 10 }}
        />
      </div>
    </>
  );
};

export default ViewBookings;
