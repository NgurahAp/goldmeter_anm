import { motion } from "framer-motion";

const HowToOrder = () => {
  return (
    <section
      id="howToOrder"
      className="px-10 flex flex-col justify-center items-center max-w-7xl mx-auto"
    >
      <div className="flex flex-col text-center font-urbanist">
        <motion.p
          className="text-lg font-extrabold text-green-800 pt-14 pb-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Cara Pemesanan
        </motion.p>
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold text-gray-800 pb-10 md:pb-14"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Langkah Mudah untuk Pemesanan
        </motion.h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 font-urbanist">
        <motion.div
          className="bg-white rounded-lg overflow-hidden"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-center text-2xl font-bold text-gray-700 pb-5 md:pb-14">
            Step 1
          </h2>
          <div className="flex justify-center">
            <motion.img
              src="/landing/konsultasi_product.png"
              alt="Gold Meter & Precious Metal Tester"
              className=""
              width={285}
              height={194}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
          <div className="p-3 flex flex-col items-center font-poppins">
            <h2 className="text-2xl text-center font-semibold text-gray-800">
              Konsultasi Produk
            </h2>
            <p className="text-gray-600 text-sm pt-2 text-center px-10">
              Hubungi tim kami untuk konsultasi terkait kebutuhan alat
              laboratorium anda.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="bg-white rounded-lg overflow-hidden"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-center text-2xl font-bold text-gray-700 pb-5 md:pb-14">
            Step 2
          </h2>
          <div className="flex justify-center">
            <motion.img
              src="/landing/penawaran_harga.png"
              alt="Gold Meter & Precious Metal Tester"
              className=""
              width={285}
              height={194}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
          <div className="p-3 flex flex-col items-center font-poppins">
            <h2 className="text-2xl text-center font-semibold text-gray-800">
              Penawaran Harga
            </h2>
            <p className="text-gray-600 text-sm pt-2 text-center px-10">
              Dapatkan penawaran harga terbaik untuk produk pilihan anda.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="bg-white rounded-lg overflow-hidden"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-center text-2xl font-bold text-gray-700 pb-5 md:pb-14">
            Step 3
          </h2>
          <div className="flex justify-center">
            <motion.img
              src="/landing/proses_pengiriman.png"
              alt="Gold Meter & Precious Metal Tester"
              className=""
              width={285}
              height={194}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
          <div className="p-3 flex flex-col items-center font-poppins">
            <h2 className="text-2xl text-center font-semibold text-gray-800 px-10">
              Proses Pembelian & Pengiriman
            </h2>
            <p className="text-gray-600 text-sm pt-2 text-center px-10">
              Proses pembelian yang mudah dengan opsi pengiriman ke seluruh
              Indonesia.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowToOrder;
