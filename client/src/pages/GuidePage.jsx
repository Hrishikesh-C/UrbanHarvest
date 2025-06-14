import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaTools, FaQuestionCircle, FaRecycle, FaHandshake, FaMapMarkedAlt, FaSeedling, FaMobileAlt } from 'react-icons/fa';

export default function GuidePage() {
  return (
    <div className="bg-[#f5f3ef] text-[#1E2A35] font-sans min-h-screen">
      {/* Header */}
      <div className="bg-[#2e604a] text-white py-10 text-center shadow-md">
        <motion.h1
          className="text-4xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Urban Harvest User Guide
        </motion.h1>
        <p className="text-lg mt-3 text-[#DBB78A] max-w-xl mx-auto">
          A step-by-step journey for gardeners and buyers to collaborate, grow and trade local organic produce.
        </p>
      </div>

      {/* Main Sections */}
      <section className="max-w-screen-xl mx-auto px-6 py-16 space-y-20">
        {/* 1. Rooftop Gardening 101 */}
        <GuideCard
          icon={<FaLeaf className="text-4xl text-[#7EA88F]" />}
          title="Rooftop Gardening 101"
          description="Explore the basics of urban gardening—from sunlight access and watering techniques to pest control and container types. We help beginners kickstart their rooftop paradise."
        />

        {/* 2. Register as a Seller */}
        <GuideCard
          icon={<FaHandshake className="text-4xl text-[#DBB78A]" />}
          title="Register as a Seller"
          description="Create a seller account and build your profile with garden images, available produce, and pickup preferences. You can update product listings anytime."
        />

        {/* 3. Product Upload & Availability */}
        <GuideCard
          icon={<FaTools className="text-4xl text-[#7EA88F]" />}
          title="Upload Produce & Set Availability"
          description="Add items with descriptions, availability (daily or weekly), and pricing. Buyers can browse based on freshness, distance, and variety."
        />

        {/* 4. Connect With Buyers */}
        <GuideCard
          icon={<FaMapMarkedAlt className="text-4xl text-[#DBB78A]" />}
          title="Connect with Buyers Nearby"
          description="Urban Harvest filters buyers within 2–3 km for easy pick-up or doorstep handover. Contact buyers securely through the in-app messaging feature."
        />

        {/* 5. Safe Harvest Guidelines */}
        <GuideCard
          icon={<FaRecycle className="text-4xl text-[#7EA88F]" />}
          title="Safe Harvesting & Exchange"
          description="Ensure items are freshly harvested, clean, and securely packed in biodegradable or reusable materials to promote sustainability."
        />

        {/* 6. Mobile App Usage */}
        <GuideCard
          icon={<FaMobileAlt className="text-4xl text-[#DBB78A]" />}
          title="Use the Mobile App (Coming Soon)"
          description="Easily manage your garden listings, orders, and buyer chats through our upcoming mobile app for iOS and Android."
        />

        {/* 7. FAQs and Help */}
        <GuideCard
          icon={<FaQuestionCircle className="text-4xl text-[#7EA88F]" />}
          title="FAQs and Support"
          description="Still have questions? Visit our support page or contact us directly for help with transactions, disputes, account setup, and app usage."
        />

        {/* 8. Gardening Tips & Seasonal Advice */}
        <GuideCard
          icon={<FaSeedling className="text-4xl text-[#DBB78A]" />}
          title="Pro Tips & Seasonal Planting"
          description="Learn what grows best each season, how to improve soil quality, companion planting techniques, and how to recycle waste for compost."
        />
      </section>

      {/* Footer */}
      <footer className="bg-[#7EA88F] text-white text-center py-6 mt-8">
        <p className="text-sm">
          &copy; 2025 Urban Harvest. Built with sustainability, community, and freshness in mind.
        </p>
      </footer>
    </div>
  );
}

function GuideCard({ icon, title, description }) {
  return (
    <motion.div
      className="md:flex items-start gap-6 bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 border-l-4 border-[#7EA88F]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="mb-4 md:mb-0">{icon}</div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </motion.div>
  );
}
