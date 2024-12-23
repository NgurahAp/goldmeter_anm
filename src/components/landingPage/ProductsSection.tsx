import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    title: "Alfa Mirage Densimeter MD-300S",
    description:
      "Model populer dengan resolusi 0,01g/cm yang ditingkatkan dari sebelumnya model MD-200S.",
    image: "/landing/md-300s.jpeg",
    alt: "Gold Meter & Precious Metal Tester",
    link: `/detailProduct/Alfa%20Mirage%20Densimeter%20MD-300S`,
    padding: "mt-[1.2rem]",
  },
  {
    id: 2,
    title: "Elektronik Densimeter MDS-300",
    description:
      "Fungsi baru pengukuran kepadatan bubuk ditambah dengan resolusi 0,001g/cm dan nilai referensi 0,0001g/cm",
    image: "/landing/mds-300.jpeg",
    alt: "Gold Meter & Precious Metal Tester",
    link: `/detailProduct/Elektronik%20Densimeter%20MDS-300`,
    padding: null,
  },
  {
    id: 3,
    title: "Elektronik Densimeter MDS-3000",
    description: "MDS-3000 dapat mengukur kapasitas maksimum hingga 3kg.",
    image: "/landing/mds-3000.jpeg",
    alt: "Gold Meter & Precious Metal Tester",
    link: `/detailProduct/Elektronik%20Densimeter%20MDS-3000`,
    padding: "mt-[1rem]",
  },
];

const Products = () => {
  return (
    <section id="products" className="min-h-screen my-10 mx-20">
      <div className="flex flex-col text-center font-urbanist">
        <p className="text-lg font-extrabold text-green-800 pt-14 pb-5">
          Produk Unggulan Kami
        </p>
        <h2 className="text-5xl font-extrabold text-gray-800 pb-14">
          Produk Terbaik untuk Kebutuhan <br /> Laboratorium dan Kesehatan
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
