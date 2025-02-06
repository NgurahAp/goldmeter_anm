import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const AboutUs = () => {
  const [experience, setExperience] = useState(0);
  const [products, setProducts] = useState(0);
  const sectionRef = useRef(null); // Ref untuk memantau section

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          // Jalankan interval hanya ketika section terlihat
          const experienceInterval = setInterval(() => {
            setExperience((prev) => (prev < 20 ? prev + 1 : 20));
          }, 50);

          const productsInterval = setInterval(() => {
            setProducts((prev) => (prev < 67 ? prev + 1 : 67));
          }, 30);

          // Hentikan observer setelah interval dimulai
          observer.disconnect();

          // Bersihkan interval saat komponen unmount
          return () => {
            clearInterval(experienceInterval);
            clearInterval(productsInterval);
          };
        }
      },
      { threshold: 0.8 } // Section dianggap terlihat ketika 50% masuk ke layar
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Mulai memantau section
    }

    // Bersihkan observer saat komponen unmount
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      className="py-10 flex items-center justify-center max-w-7xl mx-auto"
      id="aboutUs"
      ref={sectionRef}
    >
      <div className="flex flex-col md:flex-row gap-x-10 px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex items-center justify-center"
        >
          <div className="w-full relative">
            <img
              className="w-full object-contain"
              src="/landing/about_us.jpg"
              alt="Penyedia Utama Solusi Alat Laboratorium dan Alat Kesehatan"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 font-urbanist"
        >
          <p className="text-green-700 text-center md:text-base md:text-left font-extrabold pb-3 md:pb-6 text-xl pt-10 md:pt-0">
            Tentang Kami
          </p>
          <h2 className="font-extrabold text-center md:text-left text-3xl md:text-5xl text-gray-800 pb-3 md:pb-6">
            Distributor Resmi Gold Meter dan Densimeter Elektronik Alfa Mirage
          </h2>
          <h2 className="font-poppins text-center md:text-left text-gray-500 text-sm md:text-xl">
            PT. Anugrah Niaga Mandiri adalah perusahaan yang bergerak di bidang
            jual beli, distribusi, dan keagenan timbangan laboratorium. Kami
            berkomitmen menyediakan produk-produk berkualitas tinggi yang
            mendukung penelitian, pengujian, dan pengembangan di berbagai
            bidang, mulai dari pendidikan hingga industri.
          </h2>
          <div className="flex items-center justify-center pt-8 md:pt-14">
            <div className="flex items-center text-center">
              <div className="px-6 md:px-16">
                <p className="text-3xl md:text-5xl text-gray-800">
                  {experience}+
                </p>
                <p className="text-red-500 text-base md:text-lg font-semibold md:mt-2">
                  Tahun Pengalaman
                </p>
              </div>
              <div className="h-16 border-l-2 border-gray-300"></div>
              <div className="px-6 md:px-16">
                <p className="text-3xl md:text-5xl text-gray-800">
                  {products}+
                </p>
                <p className="text-red-500 text-base md:text-lg font-semibold md:mt-2">
                  Produk Terbaik
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
