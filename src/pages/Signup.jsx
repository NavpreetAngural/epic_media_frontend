import React from 'react'
import { Button, Form, Input, Upload } from 'antd';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserDataContext } from '../components/Context/USerContext';
import { baseURL } from '../../config';
import axios from 'axios';
import { toast } from 'react-toastify';

import { InboxOutlined, UploadOutlined } from '@ant-design/icons';

const Signup = () => {
  const [user, setUser] = useContext(UserDataContext)

  const onFinish = async (values) => {

    const formData = new FormData()

    if (values.dp && values.dp.fileList?.[0]?.originFileObj) {
      formData.append("dp", values.dp.fileList?.[0]?.originFileObj)
    }
    else {
      toast.error("please upload Profile Picture")
      return
    }

    formData.append("fullName", values.fullName)
    formData.append("email", values.email)
    formData.append("password", values.password)
    formData.append("city", values.city)
    formData.append("phone", values.phone)

    axios.post(`${baseURL}/auth/register`, formData)
      .then((res) => {
        {
          toast.success(res.data.msg);
          setUser(res.data.data)
        }
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.message)
      })
  };
  return (
    <>
      <div className='signup h-[auto]  flex justify-center items-center my-5 py-5 '>
        <div className=' py-5 lg:py-[10px] h-[auto]  lg:px-[40px] px-[20px] shadow-2xl rounded-2xl flex flex-col justify-center items-center border-t-4 border-[#F25F4F]'>
          <h1 className='text-2xl font-bold pb-5 '>Signup</h1>
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
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input placeholder='your@example.com' />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input placeholder='your@example.com' />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password placeholder='********' />
            </Form.Item>

            <Form.Item
              label="Phone No : "
              name="phone"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input placeholder='your@example.com' />
            </Form.Item>

            <Form.Item
              label=" Profile Picture"
              name="dp"
              valuePropName="file"
              getValueFromEvent={(e) => e?.fileList?.[0] ? e : null}
              rules={[{ required: true, message: "Please upload Profile Picture " }]}
            >
              <Upload beforeUpload={() => false}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </Form.Item>
            <Form.Item
              label="City"
              name="city"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input placeholder='your@example.com' />
            </Form.Item>

            <Form.Item label={null} wrapperCol={{ span: 24 }}>
              <Button type="primary" htmlType="submit" className='w-full'>
                Signup
              </Button>
            </Form.Item>


            <p className='text-center -mt-[15px] mb-[10px]'>Already have an Account <Link className="" to="/login"> Login here</Link></p>
          </Form>
        </div>
      </div>
    </>
  )
}

export default Signup
