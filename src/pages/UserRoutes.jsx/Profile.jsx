import React, { useEffect } from 'react'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Button, Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import { baseURL } from '../../../config';
const { Meta } = Card;

const Profile = () => {
    const user = JSON.parse(localStorage.getItem("user"))
    const navigate = useNavigate()

    const logout = () => {
            localStorage.removeItem("token")
            localStorage.removeItem("user")
            navigate("/")
        }


    return (
        <div className='h-[100%] w-[100%] flex justify-center items-center' >
            <Card
                style={{ width: 250, margin: "80px" }}
                cover={
                    <img
                        alt="example"
                        src={user.url}
                         />
                }
                actions={[
                    <EditOutlined key="edit" />,
                ]}
            >
                <div className='flex flex-col gap-6'>
                    <Meta
                        className='text-center'
                        title={user.fullName}
                        description={user.email}
                    />
                    <Button onClick={logout}>
                        Logout
                    </Button>
                </div>
            </Card>
        </div>
    )
}

export default Profile