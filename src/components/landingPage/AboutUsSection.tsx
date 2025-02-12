import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section
      className="py-16 flex items-center justify-center max-w-7xl mx-auto"
      id="aboutUs"
    >
      <div className="flex flex-col md:flex-row gap-x-12 px-6 md:px-12">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex items-center justify-center"
        >
          <div className="w-full relative">
            <img
              className="w-full object-cover rounded-xl shadow-2xl"
              src="/landing/about_us.jpg"
              alt="PT Anugrah Niaga Mandiri - Distributor Resmi Gold Meter Alfa Mirage"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 font-urbanist"
        >
          <p className="text-green-700 text-center md:text-left font-bold text-lg md:text-xl pb-4">
            Tentang Kami
          </p>
          <h2 className="font-extrabold text-center md:text-left text-3xl md:text-5xl text-gray-900 leading-tight pb-6">
            Distributor Resmi Gold Meter Alfa Mirage
          </h2>
          <p className="font-poppins text-center md:text-left text-gray-700 text-base md:text-lg leading-relaxed mb-4">
            PT Anugrah Niaga Mandiri adalah distributor terpercaya yang
            menyediakan berbagai alat laboratorium berkualitas tinggi, termasuk
            Timbangan Gold Meter merek Alfa Mirage.
          </p>
          <p className="font-poppins text-center md:text-left text-gray-700 text-base md:text-lg leading-relaxed mb-6">
            Sebagai distributor resmi Alfa Mirage, kami menyediakan produk
            unggulan seperti Gold Meter GK-300 dan GKS 3000 Precious Metal
            Tester, yang dirancang untuk memastikan analisis logam mulia dengan
            cepat, akurat, dan efisien.
          </p>

          {/* Highlighted Section */}
          <div className="bg-green-100 p-6 rounded-lg shadow-lg">
            <h3 className="font-bold text-green-800 mb-3 text-xl">
              Keunggulan Produk Kami:
            </h3>
            <ul className="space-y-3 text-gray-800">
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                Akurasi tinggi dalam pengukuran kadar emas dan logam mulia
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                Teknologi canggih untuk hasil yang cepat dan presisi
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                Garansi resmi dan layanan purna jual terpercaya
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                Harga kompetitif dengan kualitas terbaik
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
