const WhyUs = () => {
  return (
    <section id="whyUs" className="min-h-screen flex items-center my-10">
      <div className="flex flex-col-reverse md:flex-row gap-x-10 px-5 md:px-24 ">
        <div className="w-full md:w-1/2 font-urbanist">
          <p className="text-green-700 md:text-base text-left font-extrabold pb-3 md:pb-6 text-xl pt-10 md:pt-0">
            Mengapa Memilih Kami
          </p>
          <h2 className="font-extrabold text-left text-2xl md:text-5xl text-gray-800 pb-5 md:pb-6">
            Penyedia Alat Laboratorium dan Kesehatan Terbaik
          </h2>
          <div className="flex space-x-2 md:space-x-4">
            <div className="flex flex-col items-center pt-8 md:pt-9">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-8 md:size-10 text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <div className="w-0.5 h-32 md:h-20 bg-red-500 "></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-8 md:size-10 text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <div className="w-0.5 h-28 md:h-20 bg-red-500 "></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-8 md:size-10 text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <div className="w-0.5 h-20 md:h-20 bg-red-500 "></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-8 md:size-10 text-red-500"
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
                <h4 className="text-xl md:text-2xl text-gray-800 font-bold">
                  Produk Berkualitas Tinggi
                </h4>
                <p className="mt-1 text-base md:text-lg text-gray-500 font-medium">
                  Kami menyediakan berbagai alat laboratorium dengan merek-merek
                  ternama seperti Memmert, Binder, dan Alfa Mirage
                </p>
              </div>
              <div className="pt-6">
                <h4 className="text-xl md:text-2xl text-gray-800 font-bold">
                  Harga Kompetitif
                </h4>
                <p className="mt-1 text-base md:text-lg text-gray-500 font-medium">
                  Menawarkan solusi alat laboratorium dengan harga yang
                  terjangkau dan nilai terbaik.
                </p>
              </div>
              <div className="pt-6">
                <h4 className="text-xl md:text-2xl text-gray-800 font-bold">
                  Layanan Purna Jual Terpercaya
                </h4>
                <p className="mt-1 text-base md:text-lg text-gray-500 font-medium">
                  Didukung dengan garansi dan layanan purna jual yang memuaskan.
                </p>
              </div>
              <div className="pt-6">
                <h4 className="text-xl md:text-2xl text-gray-800 font-bold">
                  Pengiriman Cepat dan Aman
                </h4>
                <p className="mt-1 text-base md:text-lg text-gray-500 font-medium">
                  Produk dikirim dengan standar pengemasan terbaik agar tiba
                  dengan aman dan cepat di lokasi Anda.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center md:w-1/2">
          <img className="w-11/12" src="/landing/why_us.jpg" alt="Logo" />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
