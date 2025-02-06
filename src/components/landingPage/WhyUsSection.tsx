import { motion } from "framer-motion";

const WhyUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="whyUs"
      className="py-10 flex items-center my-10 max-w-7xl mx-auto"
    >
      <div className="flex flex-col-reverse md:flex-row gap-x-6 px-5 md:px-10">
        {/* Left Column - Content */}
        <motion.div
          className="w-full md:w-1/2 font-urbanist"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.p
            className="text-green-700 text-xl font-extrabold pb-6 md:pt-0 pt-10"
            variants={itemVariants}
          >
            Mengapa Memilih Kami
          </motion.p>
          <motion.h2
            className="text-2xl md:text-5xl font-extrabold text-gray-800 pb-6"
            variants={itemVariants}
          >
            Penyedia Gold Meter dan Densimeter Elektronik Terbaik
          </motion.h2>
          <div className="flex space-x-4">
            <div className="flex flex-col items-center pt-8 md:pt-9">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-8 md:size-10 text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <div className="w-0.5 h-32 md:h-20 bg-red-500 "></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-8 md:size-10 text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <div className="w-0.5 h-28 md:h-20 bg-red-500 "></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-8 md:size-10 text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <div className="w-0.5 h-20 md:h-20 bg-red-500 "></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-8 md:size-10 text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            <div className="px-4 rounded-md w-full">
              <div>
                <h4 className="text-xl md:text-2xl text-gray-800 font-bold">
                  Produk Berkualitas Tinggi
                </h4>
                <p className="mt-1 text-base md:text-lg text-gray-500 font-medium">
                  Kami menyediakan berbagai alat laboratorium dengan merek-merek
                  ternama seperti Memmert, Binder, dan Alfa Mirage
                </p>
              </div>
              <div className="pt-6">
                <h4 className="text-xl md:text-2xl text-gray-800 font-bold">
                  Harga Kompetitif
                </h4>
                <p className="mt-1 text-base md:text-lg text-gray-500 font-medium">
                  Menawarkan solusi alat laboratorium dengan harga yang
                  terjangkau dan nilai terbaik.
                </p>
              </div>
              <div className="pt-6">
                <h4 className="text-xl md:text-2xl text-gray-800 font-bold">
                  Layanan Purna Jual Terpercaya
                </h4>
                <p className="mt-1 text-base md:text-lg text-gray-500 font-medium">
                  Didukung dengan garansi dan layanan purna jual yang memuaskan.
                </p>
              </div>
              <div className="pt-6">
                <h4 className="text-xl md:text-2xl text-gray-800 font-bold">
                  Pengiriman Cepat dan Aman
                </h4>
                <p className="mt-1 text-base md:text-lg text-gray-500 font-medium">
                  Produk dikirim dengan standar pengemasan terbaik agar tiba
                  dengan aman dan cepat di lokasi Anda.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center items-center"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="w-11/12 md:w-full relative">
            <motion.img
              src="/landing/why_us.jpg"
              alt="Logo"
              className="object-contain w-full rounded-lg shadow-lg"
              variants={imageVariants}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
