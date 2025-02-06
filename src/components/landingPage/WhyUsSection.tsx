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

  const lineHeights = ["h-20", "h-20", "h-16", "h-0"]; // Kustom tinggi garis merah
  const mobileLineHeights = ["h-40", "h-28", "h-32", "h-0"]; // Kustom tinggi garis merah

  return (
    <section
      id="whyUs"
      className="py-10 flex items-center my-10 max-w-7xl  mx-auto"
    >
      <div className="flex flex-col-reverse md:flex-row gap-x-6 px-5 md:px-10">
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
            <div className="flex flex-col items-center pt-5">
              {[...Array(4)].map((_, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex flex-col items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-10 text-red-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <div
                    className={`w-0.5 md:${lineHeights[index]} ${mobileLineHeights[index]}  bg-red-500`}
                  ></div>
                </motion.div>
              ))}
            </div>
            <div className="px-4 w-full">
              {[
                "Produk Berkualitas Tinggi",
                "Harga Kompetitif",
                "Layanan Purna Jual Terpercaya",
                "Pengiriman Cepat dan Aman",
              ].map((title, i) => (
                <motion.div key={i} className="pt-6" variants={itemVariants}>
                  <h4 className="text-xl font-bold text-gray-800">{title}</h4>
                  <p className="mt-1 text-lg text-gray-500 font-medium">
                    {i === 0
                      ? "Kami menyediakan berbagai alat laboratorium dengan merek-merek ternama seperti Memmert, Binder, dan Alfa Mirage."
                      : i === 1
                      ? "Menawarkan solusi alat laboratorium dengan harga yang terjangkau dan nilai terbaik."
                      : i === 2
                      ? "Didukung dengan garansi dan layanan purna jual yang memuaskan."
                      : "Produk dikirim dengan standar pengemasan terbaik agar tiba dengan aman dan cepat di lokasi Anda."}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
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
