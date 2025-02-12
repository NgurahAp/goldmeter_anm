import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="bg-white md:pt-16 md:pb-32 py-16 px-3 md:px-10 flex items-center relative justify-center max-w-7xl mx-auto"
    >
      <motion.div
        className="w-full md:w-2/3 font-urbanist pr-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="text-xl md:text-[3.5rem] font-bold text-gray-900 pt-5 leading-[3.5rem]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          PT. Anugrah Niaga Mandiri
        </motion.h2>
        <motion.div
          className="py-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Distributor dan Agen Terpercaya
          </h1>
          <motion.span
            className="text-3xl md:text-4xl font-bold text-green-600 block mt-1"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Gold Meter Premium Indonesia
          </motion.span>
        </motion.div>
        <motion.p
          className="font-poppins text-xl md:text-2xl text-gray-600 font-medium italic pb-10"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          Solusi Terdepan untuk Kebutuhan Gold Meter Berkualitas
        </motion.p>
        <motion.a
          href="https://wa.me/6281398387525"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 hover:bg-red-700 text-white border-2 border-red-600 px-8 py-4 rounded-lg text-lg font-bold shadow-lg transition-all duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
        >
          Konsultasi Sekarang
        </motion.a>
      </motion.div>
      <motion.div
        className="w-0 md:w-[42%] justify-end hidden md:block border"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <img src="/landing/hero.jpeg" alt="Densimeter" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
