"use client";

import { ChevronDown } from "lucide-react";
import { productsData } from "./listDetailProduct";
import { useParams } from "react-router-dom";

export const ProductDetail = () => {
  const { productName } = useParams<{ productName: string }>();

  if (!productName) {
    return (
      <div className="min-h-screen px-10 py-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Produk Tidak Ditemukan
        </h1>
        <p className="text-gray-600 text-lg">
          Produk yang Anda cari tidak tersedia.
        </p>
      </div>
    );
  }

  const decodedProductName = decodeURIComponent(productName);

  const validProducts = Object.keys(productsData);

  if (!validProducts.includes(decodedProductName)) {
    return (
      <div className="min-h-screen px-10 py-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Produk Tidak Ditemukan
        </h1>
        <p className="text-gray-600 text-lg">
          Produk <strong>{decodedProductName}</strong> tidak tersedia.
        </p>
      </div>
    );
  }

  const product = productsData[decodedProductName];

  return (
    <section>
      <div className="min-h-screen px-5 md:px-10 pt-14 md:pt-32 pb-10">
        <div className="flex flex-col-reverse md:flex-row">
          <div className="w-full md:w-1/2 md:pl-20">
            <img
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              className="hidden md:block"
            />
            <h3 className="pt-8 pb-2 font-urbanist text-xl font-extrabold">
              Spesifikasi
            </h3>
            {product.spesifikasi.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 pt-2 list-none"
              >
                <span className="text-green-700">•</span>
                <li className="text-gray-500 pl-1">{feature}</li>
              </div>
            ))}
          </div>
          <div className="w-full md:w-1/2 pt-10 md:px-5">
            <div className="flex ">
              <img
                src={product.image}
                alt={product.name}
                width={500}
                height={500}
                className="block md:hidden pb-5"
              />
            </div>

            <h2 className="font-urbanist font-extrabold text-3xl md:text-5xl pr-10 text-gray-800">
              {product.name}
            </h2>
            <h3 className="pt-8 pb-2 font-urbanist text-xl font-extrabold">
              Deskripsi
            </h3>
            <p className="text-gray-500">{product.description}</p>
            <h3 className="pt-8 pb-2 font-urbanist text-xl font-extrabold">
              Fungsi
            </h3>

            {product.modePadatFeatures && (
              <div className="mb-4">
                <div className="w-full py-2 px-4 bg-gray-100 rounded-t-lg flex justify-between">
                  <span className="font-urbanist font-medium">
                    Fungsi Mode Padat
                  </span>
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                </div>
                <div className="pl-4 py-2 bg-gray-50 rounded-b-lg">
                  <ul className="space-y-1">
                    {product.modePadatFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <span className="text-green-700">•</span>
                        <li className="text-gray-600 text-sm pl-1">
                          {feature}
                        </li>
                      </div>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {product.modeCairFeatures && (
              <div className="mb-4">
                <div className="w-full py-2 px-4 bg-gray-100 rounded-t-lg flex justify-between">
                  <span className="font-urbanist font-medium">
                    Fungsi Mode Cair
                  </span>
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                </div>
                <div className="pl-4 py-2 bg-gray-50 rounded-b-lg">
                  <ul className="space-y-1">
                    {product.modeCairFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <span className="text-green-700">•</span>
                        <li className="text-gray-600 text-sm pl-1">
                          {feature}
                        </li>
                      </div>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Render general features if they exist */}
            {product.features && (
              <div className="mb-4">
                <div className="w-full py-2 px-4 bg-gray-100 rounded-t-lg flex justify-between">
                  <span className="font-urbanist font-medium">Fungsi</span>
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                </div>
                <div className="pl-4 py-2 bg-gray-50 rounded-b-lg">
                  <ul className="space-y-1">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <span className="text-green-700">•</span>
                        <li className="text-gray-600 text-sm pl-1">
                          {feature}
                        </li>
                      </div>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Enhanced Contact Banner */}
        <div className="w-full flex justify-center px-4">
          <div className="w-full max-w-4xl bg-gradient-to-br from-white to-gray-50 border-2 border-green-500 p-8 rounded-2xl shadow-xl mt-12 mb-8 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500 opacity-10 rounded-full transform translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-500 opacity-10 rounded-full transform -translate-x-12 translate-y-12"></div>

            <div className="relative z-10">
              <h2 className="text-center font-urbanist text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                Hubungi Kami
              </h2>
              <div className="w-24 h-1 bg-green-500 mx-auto mb-4"></div>
              <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
                Dapatkan informasi lengkap tentang produk dan penawaran khusus
                melalui WhatsApp atau Email kami
              </p>

              <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 md:gap-6">
                <a
                  href="https://wa.me/6281617408900"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-8 py-4 justify-center bg-white border-2 border-green-500 rounded-xl text-green-600 hover:bg-green-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-3 transition-transform group-hover:scale-110"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="font-medium">0816-1740-8900</span>
                </a>

                <a
                  href="mailto:sales@anm.co.id"
                  className="flex items-center px-8 py-4 justify-center bg-white border-2 border-green-500 rounded-xl text-green-600 hover:bg-green-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-3 transition-transform group-hover:scale-110"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="font-medium">sales@anm.co.id</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
