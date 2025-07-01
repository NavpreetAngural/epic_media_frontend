import React from "react";
import { Link } from "react-router-dom";
import { Camera, CalendarDays, User, FileImage } from "lucide-react";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="p-6 pb-0 bg-white text-gray-800   m-5">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Welcome, {user?.fullName || "Photographer"} 👋
      </h1>
      <p className="text-center text-gray-500 mb-10">
        Manage your bookings, portfolio, and profile with ease.
      </p>


    </div>
  );
};

const DashboardCard = ({ icon, title, description, link }) => (
  <Link
    to={link}
    className="border border-gray-200 hover:shadow-xl hover:border-[#F25F4F] transition-all duration-300 p-5 rounded-xl bg-white shadow-sm"
  >
    <div className="flex items-center gap-4">
      <div>{icon}</div>
      <div>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  </Link>
);

export default Dashboard;
