import React from "react";
import SellerLayout from "../layout/SellerLayout";
import { motion } from "framer-motion";
import {
  FaLeaf,
  FaRegClipboard,
  FaTruck,
  FaSmile,
  FaMoneyBillWave,
} from "react-icons/fa";

export default function SellerGuide() {
  return (
    <SellerLayout>
      <div className="text-[#1E2A35] font-sans">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl font-bold mb-2 text-[#2e604a]">Seller Guide</h1>
          <p className="text-gray-700 text-lg">
            Everything you need to know to start selling your rooftop produce on Urban Harvest.
          </p>
        </motion.div>

        {/* Step-by-step Guide */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: <FaLeaf className="text-3xl text-[#2e604a]" />,
              title: "Step 1: Sign Up",
              desc: "Create a seller account and complete your profile with garden details and produce list.",
            },
            {
              icon: <FaRegClipboard className="text-3xl text-[#2e604a]" />,
              title: "Step 2: List Produce",
              desc: "Upload available inventory, set prices, and describe your fresh items with photos.",
            },
            {
              icon: <FaTruck className="text-3xl text-[#2e604a]" />,
              title: "Step 3: Accept Orders",
              desc: "Track and manage new orders, and prepare items for pickup.",
            },
            {
              icon: <FaSmile className="text-3xl text-[#2e604a]" />,
              title: "Step 4: Meet Customers",
              desc: "Ensure a pleasant exchange when customers come to pick up their produce.",
            },
            {
              icon: <FaMoneyBillWave className="text-3xl text-[#2e604a]" />,
              title: "Step 5: Get Paid",
              desc: "Check your completed orders and earnings inside the dashboard.",
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#f9f9f9] rounded-xl shadow-sm p-5 border border-[#e0e0e0] hover:shadow-md transition"
            >
              <div className="mb-3">{step.icon}</div>
              <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
              <p className="text-gray-700">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-14 bg-[#DBB78A] p-8 rounded-xl shadow"
        >
          <h2 className="text-xl font-bold text-[#1E2A35] mb-3">Why Sell with Urban Harvest?</h2>
          <ul className="list-disc list-inside text-[#2e604a]">
            <li>Build trust and visibility among local buyers</li>
            <li>Easy inventory & order tracking</li>
            <li>Instant order notifications</li>
            <li>Encourage eco-friendly local food practices</li>
          </ul>
        </motion.div>

        {/* Contact Support */}
        <div className="text-center mt-10">
          <p className="text-gray-700 text-md">Need help?</p>
          <a
            href="mailto:support@urbanharvest.com"
            className="text-[#2e604a] font-semibold hover:underline"
          >
            Contact our support team
          </a>
        </div>
      </div>
    </SellerLayout>
  );
}
