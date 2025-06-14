import React, { useState } from "react";
import SellerLayout from "../layout/SellerLayout";
import { FaUserCircle, FaSave, FaLock } from "react-icons/fa";

export default function AccountSettings() {
  const [profile, setProfile] = useState({
    name: "Ravi Sharma",
    email: "ravi@urbanharvest.com",
    phone: "9876543210",
    location: "Mysore, Karnataka",
    avatar: "https://source.unsplash.com/100x100/?farmer",
  });
  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleAvatarChange = (e) => {
    setProfile(prev => ({ ...prev, avatar: e.target.value }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords(prev => ({ ...prev, [name]: value }));
  };

  const saveProfile = (e) => {
    e.preventDefault();
    alert("Profile saved (connect to API)");
  };

  const changePassword = (e) => {
    e.preventDefault();
    if (passwords.new !== passwords.confirm) {
      return alert("New password and confirm do not match!");
    }
    alert("Password changed (connect to API)");
    setPasswords({ current: "", new: "", confirm: "" });
  };

  return (
    <SellerLayout>
      <div className="p-6 bg-[#f9fefb] min-h-screen font-sans">
        <h1 className="text-3xl font-bold text-[#2e604a] mb-8">Account Settings</h1>

        {/* Profile Form */}
        <form onSubmit={saveProfile} className="bg-white p-6 rounded-xl shadow-md mb-8 space-y-6 max-w-xl">
          <h2 className="text-2xl font-semibold text-[#2e604a] mb-4">Profile</h2>

          <div className="flex items-center gap-4">
            <img src={profile.avatar} alt="avatar" className="w-20 h-20 rounded-full object-cover border" />
            <div className="flex-1 space-y-2">
              <input
                type="url"
                name="avatar"
                value={profile.avatar}
                onChange={handleAvatarChange}
                placeholder="Avatar URL"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleProfileChange}
              placeholder="Full Name"
              className="border border-gray-300 rounded px-3 py-2"
              required
            />
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleProfileChange}
              placeholder="Email"
              className="border border-gray-300 rounded px-3 py-2"
              required
            />
            <input
              type="tel"
              name="phone"
              value={profile.phone}
              onChange={handleProfileChange}
              placeholder="Phone"
              className="border border-gray-300 rounded px-3 py-2"
              required
            />
            <input
              type="text"
              name="location"
              value={profile.location}
              onChange={handleProfileChange}
              placeholder="Location"
              className="border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>

          <button
            type="submit"
            className="flex items-center gap-2 bg-[#DBB78A] hover:bg-[#cba46f] text-white px-5 py-2 rounded"
          >
            <FaSave /> Save Profile
          </button>
        </form>

        {/* Password Form */}
        <form onSubmit={changePassword} className="bg-white p-6 rounded-xl shadow-md space-y-6 max-w-xl">
          <h2 className="text-2xl font-semibold text-[#2e604a] mb-4">Change Password</h2>

          <input
            type="password"
            name="current"
            value={passwords.current}
            onChange={handlePasswordChange}
            placeholder="Current Password"
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
          <input
            type="password"
            name="new"
            value={passwords.new}
            onChange={handlePasswordChange}
            placeholder="New Password"
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
          <input
            type="password"
            name="confirm"
            value={passwords.confirm}
            onChange={handlePasswordChange}
            placeholder="Confirm New Password"
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />

          <button
            type="submit"
            className="flex items-center gap-2 bg-[#2e604a] hover:bg-[#244d3a] text-white px-5 py-2 rounded"
          >
            <FaLock /> Change Password
          </button>
        </form>
      </div>
    </SellerLayout>
  );
}
