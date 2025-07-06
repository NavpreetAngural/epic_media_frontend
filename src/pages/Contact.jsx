import React, { useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { baseURL } from '../../config';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    const [form] = Form.useForm();
    const token = localStorage.getItem("token")

    useEffect(() => {
        AOS.init({
            duration: 2000
        })
    }, [])

    const onFinish = (values) => {
        axios.post(`${baseURL}/contact/add`, values)
            .then((response) => {
                if (response.status === 200) {
                    toast.success(response.data.message);
                    form.resetFields();
                } else {
                    toast.error(response.data.message);
                }

            })
            .catch((error) => {
                toast.error(error.response?.data?.message || "Something went wrong. Please try again.");
            });
    };

    return (
        <>
            {token ? "" : <Navbar />}
            <div className='heading w-full md:w-full flex justify-center items-center h-[5em] lg:h-[10em] ' >
                <h1 className='md:text-5xl text-4xl'><i>Contact Page</i></h1>
            </div>
            <div data-aos = "fade-in" className=" py-10 px-4 md:px-10">
                <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
                    <h1 className="text-center text-2xl font-bold mb-4">Contact Form</h1>

                    <Form layout="vertical" onFinish={onFinish} form={form}>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                { required: true, message: "Please enter your email" },
                                { type: "email", message: "Enter a valid email" },
                            ]}
                        >
                            <Input placeholder="Enter your email" />
                        </Form.Item>

                        <Form.Item
                            label="Subject"
                            name="subject"
                            rules={[{ required: true, message: "Please enter the subject" }]}
                        >
                            <Input placeholder="Enter the subject" />
                        </Form.Item>

                        <Form.Item
                            label="Message"
                            name="message"
                            rules={[{ required: true, message: "Please enter your message" }]}
                        >
                            <Input.TextArea placeholder="Enter your message" rows={4} />
                        </Form.Item>

                        <Form.Item className="text-center">
                            <Button type="primary" htmlType="submit">
                                Send
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>

            {/* Contact Info Section */}
            <section data-aos = "fade-down" className="px-4 md:px-20 py-10 text-center">
                <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                <div className="space-y-4 text-lg">
                    <p>
                        <i className="fa-solid fa-envelope mr-2 text-blue-600"></i>
                        <NavLink to="mailto:epicmedia@gmail.com">epicmedia@gmail.com</NavLink>
                    </p>
                    <p>
                        <i className="fa-solid fa-phone mr-2 text-green-600"></i>
                        <NavLink to="tel:+91998876655">+91 99887 6655</NavLink>
                    </p>
                    <p>
                        <i className="fa-solid fa-location-dot mr-2 text-red-600"></i>
                        123 Epic Street, Jalandhar, Punjab, 144001
                    </p>
                </div>
            </section>

            {/* Google Map */}
            <section data-aos = "fade-right" className="flex justify-center px-4 pb-10">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18..."
                    className="w-full max-w-3xl h-64 md:h-96 rounded-lg shadow"
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </section>

            {/* Operating Hours */}
            <section data-aos = "fade-up" className=" px-4 md:px-20 py-10 text-center">
                <h2 className="text-2xl font-semibold mb-6">Operating Hours</h2>
                <div className="grid gap-4 md:grid-cols-3 text-lg">
                    <div>
                        <h3 className="font-semibold">Monday to Friday</h3>
                        <p>9:00 AM - 6:00 PM</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Saturday</h3>
                        <p>10:00 AM - 4:00 PM</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Sunday</h3>
                        <p>Closed</p>
                    </div>
                </div>
            </section>

            {/* Social Media Links */}
            <section className="px-4 py-10 text-center">
                <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
                <div className="flex flex-wrap justify-center gap-6 text-lg">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        <i className="fa-brands fa-facebook mr-2 text-blue-700"></i>Facebook
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        <i className="fa-brands fa-twitter mr-2 text-sky-500"></i>Twitter
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        <i className="fa-brands fa-instagram mr-2 text-pink-600"></i>Instagram
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        <i className="fa-brands fa-youtube mr-2 text-red-600"></i>YouTube
                    </a>
                </div>
            </section>

            {token ? "" : <Footer />}
        </>
    );
};

export default Contact;
