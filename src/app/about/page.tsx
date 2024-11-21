"use client";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <div className="min-h-[90vh]  px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-5xl font-bold mb-8 text-center bg-clip-text text-transparent "
        >
          About Us
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="backdrop-blur-sm rounded-xl p-8 border-2 shadow-lg mb-8"
        >
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className=" leading-relaxed">
            Check out our blog where we share industry insights, company
            updates, and thought leadership articles on the latest technology
            trends. Stay connected with our expert team through regular posts
            that dive deep into innovation and best practices in software
            development.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="backdrop-blur-sm rounded-xl p-6  border-2  shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <div>
              <ul>
                <li>Provide high-quality</li>
                <li>Well-researched content</li>
                <li>Fostermeaningful discussions</li>
                <li>Share expert insights and practical solutions</li>
              </ul>
            </div>
          </div>

          <div className=" backdrop-blur-sm rounded-xl p-6   border-2 shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
            <p className="">
              To create a vibrant community of readers, where ideas and stories
              are shared to inspire, educate, and entertain.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page;
