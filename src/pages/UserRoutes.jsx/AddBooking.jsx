import React from 'react'
import { Button, Checkbox, DatePicker, Form, Input, Select, Upload } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
// import { baseURL } from '../../config';
import axios from 'axios';
import { toast } from 'react-toastify';
import { baseURL } from '../../../config';



const AddBooking = () => {
  const navigate = useNavigate()

  const onFinish = async (values) => {
    await axios.post(`${baseURL}/booking/add`, values).then((res) => {
      toast.success(res.data.msg)
      navigate("/user/viewbookings")

    })
      .catch((err) => {
        console.log(err);

      })
  }
  const user = JSON.parse(localStorage.getItem('user'))

  return (
    <>
      <div className='signup h-[auto]  flex justify-center items-center my-5 py-5 '>
        <div className=' py-5 lg:py-[10px] h-[auto]  lg:px-[40px] px-[20px] shadow-2xl rounded-2xl flex flex-col justify-center items-center border-t-4 border-[#F25F4F]'>
          <h1 className='text-2xl font-bold py-3 '>Add Booking</h1>
          <Form
            className=' w-full '
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="Full Name"
              name="fullName"
              initialValue={user.fullName}
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input placeholder='your@example.com' />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              initialValue={user.email}
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input placeholder='your@example.com' />
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

            <Form.Item label="Booking Date" name="date">
              <DatePicker />
            </Form.Item>

            <Form.Item
              label="Location"
              name="location"
              rules={[{ required: true, message: 'Please input your Location!' }]}
            >
              <Input placeholder='Enter your Location...' />
            </Form.Item>

            <Form.Item label={null} wrapperCol={{ span: 24 }} >
              <Button type="primary" htmlType="submit" className='w-full'>
                Add Booking
              </Button>
            </Form.Item>


          </Form>
        </div>
      </div>
    </>
  )
}

export default AddBooking
