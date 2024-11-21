"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const ContactPage = () => {
  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6 } }
  };

  // Animation variants for individual items
  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-[80vh] px-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className=" shadow-2xl rounded-lg p-8 max-w-md w-full border-2"
        variants={itemVariants}
      >
        <h1 className="text-3xl font-bold text-center mb-6 ">Contact Us</h1>
        <form>
          <motion.div className="mb-6 " variants={itemVariants}>
            <label htmlFor="phone" className="block text-sm font-medium ">Phone Number</label>
            <input type="tel" id="phone" name="phone" className="mt-1 block border w-full px-3 py-2  rounded-md shadow-sm focus:outline-none  transition duration-300 ease-in-out" placeholder="Your phone number"/>
          </motion.div>
          <motion.div className="mb-6 " variants={itemVariants}>
            <label htmlFor="email" className="block text-sm font-medium ">Email Address</label>
            <input type="email" id="email" name="email" className="mt-1 block border w-full px-3 py-2 border-2shadow-sm focus:outline-none  transition duration-300 ease-in-out" placeholder="Your email"/>
          </motion.div>
          <motion.div className="mb-6 " variants={itemVariants}>
            <label htmlFor="message" className="block text-sm font-medium ">Message</label>
            <textarea id="message" name="message" rows={3} className="mt-1 block border w-full px-3 py-2 border-2shadow-sm focus:outline-none  transition duration-300 ease-in-out" placeholder="Write your message here"></textarea>
          </motion.div>
          <Button>Send meassage</Button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ContactPage;