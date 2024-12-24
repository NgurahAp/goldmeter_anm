"use client";

import { ChevronDown } from "lucide-react";
import { productsData } from "./listProduct";
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
            <img
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              className="block md:hidden pb-5"
            />
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

            {/* Mode Padat Section */}
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
                      <li className="text-gray-600 text-sm pl-1">{feature}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>

            {/* Mode Cair Section */}
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
                      <li className="text-gray-600 text-sm pl-1">{feature}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
