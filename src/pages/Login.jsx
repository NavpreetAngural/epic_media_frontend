import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { FcGoogle } from 'react-icons/fc';

const onFinish = (values) => {
  console.log('Form Submitted:', values);
};

const onGoogleLogin = () => {
  console.log('Login with Google clicked');
  // Add your Google OAuth login logic here
};

const Login = () => {
  return (
    <div className='login h-[80vh] lg:h-[70vh] flex justify-center items-center'>
      <div className=' lg:py-[1px] lg:pb-[10px] h-[450px] lg:h-[380px] lg:px-[40px] px-[50px] shadow-2xl rounded-2xl flex flex-col justify-center items-center border-t-4 border-[#F25F4F]'>
        <h1 className='text-2xl font-bold lg:mt-0 mt-[5px] lg-pt-0 p-5'>Login</h1>
        <Form
          className=' w-full'
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
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

          <Form.Item label={null} wrapperCol={{ span: 24 }}>
            <Button type="primary" htmlType="submit" className='w-full'>
              Login
            </Button>
          </Form.Item>

          <Form.Item label={null} wrapperCol={{ span: 24 }} className="mt-4">
            <Button
              onClick={onGoogleLogin}
              className="w-full flex items-center justify-center gap-2 border border-gray-300 hover:border-blue-500 text-white bg-red-500 hover:bg-red-600 font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
            >
              <FcGoogle className="text-xl" />
              Login with Google
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
