import { Link } from "react-router-dom";
import { products } from "../../data/product";
import { motion } from "framer-motion";

const Products = () => {
  return (
    <section
      id="products"
      className="py-10 my-10 flex flex-col justify-center items-center max-w-7xl mx-auto"
    >
      <div className="flex flex-col text-center font-urbanist">
        <motion.p
          className="text-green-700 text-center md:text-base font-extrabold pb-3 md:pb-3 text-xl pt-10 md:pt-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Produk Unggulan Kami
        </motion.p>
        <motion.h2
          className="font-extrabold text-center text-3xl md:text-5xl text-gray-800 pb-10 md:px-28"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Produk Terbaik untuk Kebutuhan Gold Meter
        </motion.h2>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="bg-white rounded-lg hover:shadow-xl border w-96 hover:border-red-500 overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center">
              <motion.img
                src={product.image}
                alt={product.alt}
                className="w-full object-cover"
                width={369}
                height={369}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />
            </div>
            <div className="p-6 flex flex-col items-center">
              <h2 className="text-2xl text-center font-semibold text-gray-800">
                {product.title}
              </h2>
              <p className="text-gray-600 text-sm text-center py-5">
                {product.description}
              </p>
              {product.link ? (
                <Link
                  to={product.link}
                  className={`bg-green-500 hover:bg-green-600 text-white font-medium ${
                    product.padding ?? ""
                  } py-2 px-4 rounded-md`}
                >
                  Pesan Produk
                </Link>
              ) : (
                <motion.button
                  className={`bg-green-500 hover:bg-green-600 text-white font-medium ${
                    product.padding ?? ""
                  } py-2 px-4 rounded-md mt-4`}
                  initial={{ scale: 0.9 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  whileInView={{ scale: 1 }}
                >
                  Pesan Produk
                </motion.button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Products;
