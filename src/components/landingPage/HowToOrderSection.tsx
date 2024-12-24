const HowToOrder = () => {
  return (
    <section id="howToOrder" className="min-h-screen my-10 mx-5 md:mx-20">
      <div className="flex flex-col text-center font-urbanist">
        <p className="text-lg font-extrabold text-green-800 pt-14 pb-5">
          Cara Pemesanan
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 pb-10 md:pb-14">
          Langkah Mudah untuk Pemesanan
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 font-urbanist">
        <div className="bg-white rounded-lg   overflow-hidden">
          <h2 className="text-center text-2xl font-bold text-gray-700 pb-5 md:pb-14">
            Step 1
          </h2>
          <div className="flex justify-center">
            <img
              src="/landing/konsultasi_product.png"
              alt="Gold Meter & Precious Metal Tester"
              className=" "
              width={285}
              height={194}
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
        </div>
        <div className="bg-white rounded-lg   overflow-hidden">
          <h2 className="text-center text-2xl font-bold text-gray-700 pb-5 md:pb-14">
            Step 2
          </h2>
          <div className="flex justify-center">
            <img
              src="/landing/penawaran_harga.png"
              alt="Gold Meter & Precious Metal Tester"
              className=" "
              width={285}
              height={194}
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
        </div>
        <div className="bg-white rounded-lg   overflow-hidden">
          <h2 className="text-center text-2xl font-bold text-gray-700 pb-5 md:pb-14">
            Step 3
          </h2>
          <div className="flex justify-center">
            <img
              src="/landing/proses_pengiriman.png"
              alt="Gold Meter & Precious Metal Tester"
              className=" "
              width={285}
              height={194}
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
        </div>
      </div>
    </section>  
  );
};

export default HowToOrder;
