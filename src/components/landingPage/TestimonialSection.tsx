import { motion } from "framer-motion";

const Testimonial = () => {
  return (
    <motion.section
      className="flex flex-col-reverse md:flex-row pt-10 max-w-7xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="w-full md:w-[47%] flex items-end justify-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <img
          src="/landing/testimonial.png"
          alt="Gold Meter & Precious Metal Tester"
          className="w-10/12 object-cover"
          width={497}
          height={605}
        />
      </motion.div>
      <motion.div
        className="w-full md:w-[53%] px-5 pt-12 md:pr-24 py-10"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p className="text-green-700 font-bold pb-3 md:pb-6 text-lg">
          Testimonial
        </p>
        <h2 className="font-extrabold text-2xl md:text-5xl text-gray-800 pb-3 md:pb-6 font-urbanist">
          Apa Kata Pelanggan Kami
        </h2>
        <h2 className="font-poppins text-gray-500 text-base md:text-lg pb-16">
          Dengarkan langsung dari pelanggan kami tentang pengalaman mereka
          menggunakan produk dan layanan PT Anugrah Niaga Mandiri.
        </h2>
        <motion.div
          className="bg-gray-100 min-h-72 rounded-2xl text-center md:p-6 flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-0">
            Dr. Andi S.
          </h2>
          <p className="text-gray-400">Peneliti di Universitas terkemuka</p>
          <div className="flex items-center justify-center my-4 text-yellow-400 space-x-1">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l2.5 7.5h8l-6.5 4.7 2.5 7.5-6.5-4.7-6.5 4.7 2.5-7.5-6.5-4.7h8z" />
              </svg>
            </div>
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l2.5 7.5h8l-6.5 4.7 2.5 7.5-6.5-4.7-6.5 4.7 2.5-7.5-6.5-4.7h8z" />
              </svg>
            </div>
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l2.5 7.5h8l-6.5 4.7 2.5 7.5-6.5-4.7-6.5 4.7 2.5-7.5-6.5-4.7h8z" />
              </svg>
            </div>
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l2.5 7.5h8l-6.5 4.7 2.5 7.5-6.5-4.7-6.5 4.7 2.5-7.5-6.5-4.7h8z" />
              </svg>
            </div>
            <div className="relative h-6 w-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 fill-gray-300"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l2.5 7.5h8l-6.5 4.7 2.5 7.5-6.5-4.7-6.5 4.7 2.5-7.5-6.5-4.7h8z" />
              </svg>
              <div className="absolute top-0 left-0 overflow-hidden w-[50%] h-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 fill-yellow-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l2.5 7.5h8l-6.5 4.7 2.5 7.5-6.5-4.7-6.5 4.7 2.5-7.5-6.5-4.7h8z" />
                </svg>
              </div>
            </div>
          </div>
          <p className="text-gray-600 font-medium italic px-5 md:px-16">
            Kami telah bekerja sama dengan PT.Anugrah Niaga Mandiri selama
            beberapa tahun dan selalu puas dengan kualitas alat dan layanan
            mereka.
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Testimonial;
