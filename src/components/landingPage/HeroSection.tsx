import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="bg-white md:py-20 py-16 px-3 md:px-10 flex items-center relative justify-center max-w-7xl mx-auto"
    >
      <motion.div
        className="w-full md:w-2/3 font-urbanist"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <CheckCircle className="w-4 h-4 text-green-600" />
          <span className="text-sm font-medium text-green-700">
            Official Distributor
          </span>
        </motion.div>
        <motion.h2
          className="text-xl md:text-2xl font-semibold text-gray-800 pt-5"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          PT. Anugrah Niaga Mandiri
        </motion.h2>
        <motion.h1
          className="py-6 text-5xl md:text-5xl font-extrabold text-gray-900"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Solusi Lengkap untuk Kebutuhan <br />
          <motion.span
            className="text-3xl md:text-6xl font-extrabold text-green-700"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Metal Tester Laboratorium
          </motion.span>
        </motion.h1>
        <motion.p
          className="font-poppins text-base md:text-lg text-gray-700 italic pb-10"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          Distributor dan Agen Terpercaya Timbangan Laboratorium Berkualitas
          Tinggi di Indonesia
        </motion.p>
        <motion.a
          href="https://wa.me/6281398387525"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-500 text-white border-2 border-red-500 px-6 py-3 rounded-md text-base font-semibold"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          whileHover={{ scale: 1.1 }}
        >
          Konsultasi Sekarang
        </motion.a>
      </motion.div>
      <motion.div
        className="w-0 md:w-1/3 justify-end hidden md:block"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <img
          src="/landing/densimeter.jpg"
          alt="Densimeter"
          width={360}
          height={403}
        />
      </motion.div>
      <motion.img
        src="/landing/navbar_logo.jpg"
        width={120}
        height={23}
        alt="Logo PT Anugrah Niaga Mandiri"
        className="absolute bottom-12 right-10 hidden md:block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      />
    </section>
  );
};

export default HeroSection;
