import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import axios from 'axios';
import { baseURL } from '../../../config';
import { toast } from 'react-toastify';

const ViewBookings = () => {
  const [bookings, setBookings] = useState([]);

  const data = JSON.parse(localStorage.getItem("user"))

  const email = data.email

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${baseURL}/booking/delete/${id}`)
      setBookings(prev => prev.filter(item => item._id !== id));
      toast.success("Booking deleted successfully");
    }
    catch (err) {
      toast.error("Booking deletion failed");
      console.error("Error while deleting Booking:", error);
    }
  }

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
          <span style={{ color: 'blue', cursor: 'pointer' }}>Edit </span>
          <span style={{ color: 'blue', cursor: 'pointer' }} onClick={() => handleDelete(record._id)} >Delete</span>
        </>
      ),
    },
  ];

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios.get(`${baseURL}/booking/view/${email}`);
        setBookings(res.data.data);
      } catch (err) {
        console.error("Error fetching bookings:", err);
      }
    };

    fetchBookings();
  }, []);



  return (
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
  );
};

export default ViewBookings;
