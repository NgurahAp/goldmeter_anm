import { Link } from "react-router-dom";
import { products } from "../../data/product";

const Products = () => {
  return (
    <section id="products" className="min-h-screen my-10 mx-5 md:mx-20">
      <div className="flex flex-col text-center font-urbanist">
        <p className="text-green-700 text-center md:text-base font-extrabold pb-3 md:pb-6 text-xl pt-10 md:pt-0">
          Produk Unggulan Kami
        </p>
        <h2 className="font-extrabold text-center text-3xl md:text-5xl text-gray-800 pb-6 md:px-28">
          Produk Terbaik untuk Kebutuhan Timbangan Laboratorium
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg hover:shadow-xl border hover:border-red-500 overflow-hidden"
          >
            <div className="flex justify-center">
              <img
                src={product.image}
                alt={product.alt}
                className="w-full object-cover"
                width={369}
                height={369}
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
                  } py-2 px-4  rounded-md`}
                >
                  Pesan Produk
                </Link>
              ) : (
                <button
                  className={`bg-green-500 hover:bg-green-600 text-white font-medium ${
                    product.padding ?? ""
                  } py-2 px-4 rounded-md mt-4`}
                >
                  Pesan Produk
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
