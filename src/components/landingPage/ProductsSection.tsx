import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    title: "Alfa Mirage Gold Meter GKS-3000",
    description:
      "Dirancang khusus untuk menguji emas, platinum, perak, dan logam mulia lainnya.",
    image: "/detailProduct/gold-meter-gks-3000.jfif",
    alt: "Alfa Mirage Gold Meter GKS-3000",
    link: `/detailProduct/Alfa%20Mirage%20Gold%20Meter%20GKS-3000`,
    padding: "mt-[0.2rem]",
  },
  {
    id: 2,
    title: "Alfa Mirage Gold Meter GK-300",
    description:
      "Alat ini dirancang untuk memberikan hasil uji logam mulia dengan akurasi tinggi.",
    image: "/detailProduct/gold-meter-gk-300.jfif",
    alt: "Alfa Mirage Gold Meter GK-300",
    link: `/detailProduct/Alfa%20Mirage%20Gold%20Meter%20GK-300`,
    padding: "mt-[0.2rem]",
  },
  {
    id: 3,
    title: "Alfa Mirage Gold Meter GKS-300",
    description:
      "Model dasar dengan penjualan terlaris, cukup mudah, dan akurat.",
    image: "/detailProduct/gold-meter-gks-300.jfif",
    alt: "Gold Meter & Precious Metal Tester",
    link: `/detailProduct/Alfa%20Mirage%20Gold%20Meter%20GKS-300`,
    padding: null,
  },
  {
    id: 4,
    title: "Alfa Mirage Densimeter MD-300S",
    description:
      "Model populer dengan resolusi 0,01g/cm yang ditingkatkan dari sebelumnya model MD-200S.",
    image: "/landing/md-300s.jpeg",
    alt: "Gold Meter & Precious Metal Tester",
    link: `/detailProduct/Alfa%20Mirage%20Densimeter%20MD-300S`,
    padding: "mt-[1.2rem]",
  },
  {
    id: 5,
    title: "Elektronik Densimeter MDS-300",
    description:
      "Fungsi baru pengukuran kepadatan bubuk ditambah dengan resolusi 0,001g/cm dan nilai referensi 0,0001g/cm",
    image: "/landing/mds-300.jpeg",
    alt: "Gold Meter & Precious Metal Tester",
    link: `/detailProduct/Elektronik%20Densimeter%20MDS-300`,
    padding: null,
  },
  {
    id: 6,
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
