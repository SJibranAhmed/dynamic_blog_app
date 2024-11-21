"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
  const src: string[] = [
    "/assets/ai.jpg",
    "/assets/ai2.jpg",
    "/assets/karachi-pic.jpg",
  ];

  const clients = {
    
      name: ["Abd-e-Munaaf", "Sheikh Hasan", "Talha"],
      testimonials:[ "An exceptional team player with a passion for excellence.", "A brilliant thinker who always brings innovative ideas to the table.", "A truly inspiring individual with unmatched dedication and wisdom.",]
    }

  const c_pic: string[] = [
    "/assets/munaaf.jpg",
    "/assets/hasan.jpg",
    "/assets/talha.jpg",
  ];
  const b_title: string[] = [
    "Agentic AI",
    "AI is everywhere",
    "Future GenAI developers city",
  ];
  return (
    <main>
      {/* section 01 for main page */}
      <section className="container px-4 py-10 mx-auto lg:h-[80vh] lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center xl:ml-9 lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug   md:text-5xl">
            A <span className="font-semibold">blog website</span> is an online
            platform, where
            <span className="font-semibold underline decoration-primary mx-2 tracking-wide">
              Authors Publish
            </span>
            articles, insights,
            <br /> or stories for readers to engage with.
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            A dynamic blog website allows you to provide a smooth experience
            <br className="hidden lg:block" />
            for both readers and creators.
          </p>
          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20"></div>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2 ">
          <Image
            width={300}
            height={300}
            src="/assets/blog-1.jpg"
            alt="content picture"
            className="w-full h-full max-w-md mx-auto  rounded-md"
          />
        </div>
      </section>
      {/* section 02 for packages*/}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Pricing Plans
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic Plan */}
            <div className="rounded-lg shadow-lg p-8 hover:scale-105 border transition-transform duration-300 hover:border-2 border-primary">
              <h3 className="text-xl font-bold mb-4">Basic</h3>
              <p className="text-gray-600 mb-6">Perfect for starters</p>
              <p className="text-4xl font-bold mb-6">
                $9.99<span className="text-base font-normal">/month</span>
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Feature 1
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Feature 2
                </li>
              </ul>
              <Button className="w-full py-7 rounded-lg">Get Started</Button>
            </div>

            {/* Pro Plan */}
            <div className="rounded-lg shadow-lg p-8 border-2 border-primary scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-4">Pro</h3>
              <p className="text-gray-600 mb-6">Most Popular</p>
              <p className="text-4xl font-bold mb-6">
                $19.99<span className="text-base font-normal">/month</span>
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Everything in Basic
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Pro Feature 1
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Pro Feature 2
                </li>
              </ul>
              <Button className="w-full py-7 rounded-lg">Get Started</Button>
            </div>

            {/* Enterprise Plan */}
            <div className=" rounded-lg shadow-lg p-8 hover:scale-105 border hover:border-2 border-primary transition-transform duration-300">
              <h3 className="text-xl font-bold mb-4">Enterprise</h3>
              <p className="text-gray-600 mb-6">For large teams</p>
              <p className="text-4xl font-bold mb-6">
                $49.99<span className="text-base font-normal">/month</span>
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Everything in Pro
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Enterprise Feature 1
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Enterprise Feature 2
                </li>
              </ul>
              <Button className="w-full py-7 rounded-lg">Contact Sales</Button>
            </div>
          </div>
        </div>
      </section>

      {/* section 03 for our client*/}
      <section className="relative py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            What Our Clients Say
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.name.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className=" p-6 rounded-xl backdrop-blur-sm border border-gray-700"
              >
                <div className="flex items-center mb-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="w-24 h-24 overflow-hidden rounded-full border">
                    <Image
                      src={`${c_pic[index]}`}
                      alt="User Profile"
                      width={200}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <br className="hidden lg:block" />
                  <div className="ml-4">
                    <h3 className="font-semibold">{item}</h3>
                    <p className=" text-sm">Position, Company</p>
                  </div>
                </div>
                <p className="">
                  &quot;{clients.testimonials[index]}&quot;
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      {/* section 04  for feature blogs*/}
      <section className="relative py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Featured Blog Posts
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {src.map((post, index) => (
              <motion.article
                key={post}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="rounded-xl overflow-hidden backdrop-blur-sm border border-gray-700"
              >
                <motion.div
                  initial={{ scale: 1.2 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                  className="aspect-video relative"
                >
                  <Image
                    src={src[index]}
                    quality={100}
                    alt="feature images"
                    fill
                  />
                </motion.div>
                <div className="p-6">
                  <span className="text-sm">Latest news</span>
                  <h3 className="text-xl font-bold mt-2 mb-3">
                    {b_title[index]}
                  </h3>
                  <p className="text-sm line-clamp-3">
                    Your blog post preview text goes here. Make it engaging to
                    encourage clicks.
                  </p>
                  <motion.div whileHover={{ scale: 1.05 }} className="mt-4">
                    <Button>
                      Read More
                      <svg
                        className="w-6 h-6 "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 12H5m14 0-4 4m4-4-4-4"
                        />
                      </svg>
                    </Button>
                  </motion.div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>
      {/* footer */}
      <footer className="relative py-16 border-t border-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12 text-center">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold ">Your Brand</h3>
              <p className="">
                Crafting digital experiences with passion and precision.
              </p>
            </motion.div>
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className=" flex flex-col items-center justify-center space-y-4"
            >
              <h4 className="text-lg font-semibold text-white">
                Connect With Me
              </h4>
              <div className="flex space-x-4">
                <motion.a
                  href="https://www.facebook.com/sheikh.jibran.758"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-lg border hover:bg-slate-200 sm:hover:text-black flex items-center justify-center"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    aria-label="facebook"
                  >
                    <path
                      fillRule="evenodd"
                      d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.a>
                <motion.a
                  href="https://api.whatsapp.com/send/?phone=923159936336&text=Hello+there%21&type=phone_number&app_absent=0"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-lg border hover:bg-slate-200 sm:hover:text-black flex items-center justify-center"
                >
                  <svg
                    className="w-5 h-5 "
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    aria-label="whatsapp"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
                      clipRule="evenodd"
                    />
                    <path
                      fill="currentColor"
                      d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
                    />
                  </svg>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/sheikh-jibran-ahmed-613078290/"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-lg border hover:bg-slate-200 sm:hover:text-black flex items-center justify-center"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    aria-label="linkedIn"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                      clipRule="evenodd"
                    />
                    <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                  </svg>
                </motion.a>
                <motion.a
                  href="https://github.com/SJibranAhmed"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-lg border hover:bg-slate-200 sm:hover:text-black  flex items-center justify-center"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    aria-label="github"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12 pt-8 border-t border-gray-700 text-center "
          >
            <p>© 2024 Your Brand. All rights reserved.</p>
            <br />
            <p>
              <span>
                Made by <span className="text-red-700">&hearts;</span>
              </span>
              <i className="font-bold">Sheikh Jibran Ahmed</i>{" "}
            </p>
          </motion.div>
        </motion.div>
      </footer>
    </main>
  );
}
