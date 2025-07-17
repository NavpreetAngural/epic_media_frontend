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
            <div className='category flex flex-col  my-5'>
                <div className='heading w-full md:w-full flex justify-center items-center border-y lg:border-0 h-[10em] ' >
                    <h1 className='md:text-5xl text-4xl'><i>Contact Page</i></h1>
                </div>
                <div data-aos="fade-in" className=" py-10 px-4 md:px-10">
                    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-2xl ">
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
                <section data-aos="fade-down" className="px-4 md:px-20 py-10 text-center">
                    <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                    <div className="space-y-4 text-lg">
                        <p className="flex items-center justify-center gap-2">
                            <i className="fa-solid fa-envelope text-red-600"></i>
                            <a href="mailto:justclip12@gmail.com" className="hover:underline text-blue-700">
                                justclip12@gmail.com
                            </a>
                        </p>
                        <p>
                            <i className="fa-solid fa-phone mr-2 text-green-600"></i>
                            <a href="tel:+917986990209" className="hover:underline text-blue-700">
                                +91 7986990209
                            </a>
                            <span className="hidden sm:inline">,</span>
                            <a href="tel:+918427126663" className="hover:underline text-blue-700">
                                +91 8427126663
                            </a>
                        </p>
                        <p>
                            <i className="fa-solid fa-location-dot mr-2 text-red-600"></i>
                            Jalandhar , Chandigarh
                        </p>
                    </div>
                </section>

                {/* Google Map */}
                <section data-aos="fade-right" className="flex justify-center px-4 pb-10">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109066.25905193972!2d75.49101739615622!3d31.322518086143994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5a5747a9eb91%3A0xc74b34c05aa5b4b8!2sJalandhar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1752475748141!5m2!1sen!2sin" width="600" height="450" loading="lazy" ></iframe>
                </section>
                {/* Operating Hours */}
                <section data-aos="fade-up" className=" px-4 md:px-20 py-10 text-center">
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
                        <a href="https://www.instagram.com/epic_media1/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:underline">
                            <i className="fa-brands fa-instagram mr-2 text-pink-600"></i>Instagram
                        </a>
                        <a href="https://www.youtube.com/@epicmedia501" target="_blank" rel="noopener noreferrer" className="hover:underline">
                            <i className="fa-brands fa-youtube mr-2 text-red-600"></i>YouTube
                        </a>
                    </div>
                </section>
            </div>

            {token ? "" : <Footer />}
        </>
    );
};

export default Contact;
