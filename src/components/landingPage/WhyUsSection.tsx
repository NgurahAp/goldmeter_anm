const WhyUs = () => {
  return (
    <section id="whyUs" className="min-h-screen flex items-center my-10">
      <div className="flex gap-x-10 px-24 ">
        <div className="w-1/2 font-urbanist">
          <p className="text-green-700 font-extrabold pb-6 text-lg">
            Mengapa Memilih Kami
          </p>
          <h2 className="font-extrabold text-4xl text-gray-900 pb-8">
            Penyedia Alat Laboratorium dan Kesehatan Terbaik
          </h2>
          <div className="flex space-x-4">
            <div className="flex flex-col items-center pt-9">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-10 text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <div className="w-0.5 h-20 bg-red-500 "></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-10 text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <div className="w-0.5 h-20 bg-red-500 "></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-10 text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <div className="w-0.5 h-20 bg-red-500 "></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-10 text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            <div className="px-4 rounded-md w-full">
              <div>
                <h4 className="text-2xl text-gray-800 font-bold">
                  Produk Berkualitas Tinggi
                </h4>
                <p className="mt-1 text-lg text-gray-500 font-medium">
                  Kami menyediakan berbagai alat laboratorium dengan merek-merek
                  ternama seperti Memmert, Binder, dan Alfa Mirage
                </p>
              </div>
              <div className="pt-6">
                <h4 className="text-2xl text-gray-800 font-bold">
                  Harga Kompetitif
                </h4>
                <p className="mt-1 text-lg text-gray-500 font-medium">
                  Menawarkan solusi alat laboratorium dengan harga yang
                  terjangkau dan nilai terbaik.
                </p>
              </div>
              <div className="pt-6">
                <h4 className="text-2xl text-gray-800 font-bold">
                  Layanan Purna Jual Terpercaya
                </h4>
                <p className="mt-1 text-lg text-gray-500 font-medium">
                  Didukung dengan garansi dan layanan purna jual yang memuaskan.
                </p>
              </div>
              <div className="pt-6">
                <h4 className="text-2xl text-gray-800 font-bold">
                  Pengiriman Cepat dan Aman
                </h4>
                <p className="mt-1 text-lg text-gray-500 font-medium">
                  Produk dikirim dengan standar pengemasan terbaik agar tiba
                  dengan aman dan cepat di lokasi Anda.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <img
            width={547}
            height={589}
            className="w-full"
            src="/landing/why_us.jpg"
            alt="Logo"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
