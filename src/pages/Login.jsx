import React, { useContext } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseURL } from '../../config';
import { toast } from 'react-toastify';
import { useGoogleLogin } from '@react-oauth/google';
import { UserDataContext } from '../components/Context/USerContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Login = () => {
  const navigate = useNavigate()
  const { token, setToken , user , setUser} = useContext(UserDataContext)
  const onFinish = (values) => {

    axios.post(`${baseURL}/auth/login`, values)
      .then((res) => {
        if (res.status == 200) {
          toast.success(res.data.msg)
          setToken(res.data.token);
          setUser(res.data.data)
          navigate("/user")

        }
      })
      .catch((err) => {
        toast.error(err.response.data.msg || "something went wrong")
      })
  };

  const googleLogin = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: async (codeResponse) => {
      const res = await axios.post(`${baseURL}/auth/google?code=${codeResponse.code}`);
      toast.success(res.data.msg);
      setUser(res.data.data)
      setToken(res.data.token)
      navigate("/user")
    },
    onError: (error) => console.error("Login Error", error),
    scope: 'profile email',
    access_type: 'offline',
    prompt: 'consent'
  });

  return (
    <>
    <Navbar/>
    <div className='login h-[75vh] lg:h-[60vh] flex justify-center items-center'>
      <div className=' lg:py-[50px] h-[420px] lg:h-[350px] lg:px-[40px] px-[50px] shadow-2xl rounded-2xl flex flex-col justify-center items-center border-t-4 border-[#F25F4F]'>
        <h1 className='text-2xl font-bold lg- pb-5'>Login</h1>
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
            label="email"
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

          <Form.Item label={null} wrapperCol={{ span: 24 }}>
            <Button type="primary" htmlType="submit" className='w-full '>
              Login
            </Button>
          </Form.Item>

          <Form.Item label={null} wrapperCol={{ span: 24 }} className="mt-4">
            <Button
              onClick={googleLogin}
              className="w-full flex items-center justify-center gap-2 border border-gray-300 hover:border-blue-500 text-white bg-red-500 hover:bg-red-600 font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
            >
              <FcGoogle className="text-xl" />
              Login with Google
            </Button>
          </Form.Item>
          <p className='text-center -mt-[10px]'>Not have an Account <Link className="" to="/signup"> Signup here</Link></p>
        </Form>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Login;
