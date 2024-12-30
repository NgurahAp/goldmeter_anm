const AboutUs = () => {
  return (
    <section className="min-h-screen flex items-center">
      <div className="flex flex-col md:flex-row gap-x-10 px-5 md:px-24">
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="w-full relative">
            <img
              className="w-full object-contain"
              src="/landing/about_us.jpg"
              alt="Penyedia Utama Solusi Alat Laboratorium dan Alat Kesehatan"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 font-urbanist">
          <p className="text-green-700 text-center md:text-base md:text-left font-extrabold pb-3 md:pb-6 text-xl pt-10 md:pt-0">
            Tentang Kami
          </p>
          <h2 className="font-extrabold text-center md:text-left text-3xl md:text-5xl text-gray-800 pb-3 md:pb-6">
            Distributor Resmi Gold Meter dan Densimeter Elektronik Alfa Mirage
          </h2>
          <h2 className="font-poppins text-center md:text-left text-gray-500 text-sm md:text-xl">
            PT. Anugrah Niaga Mandiri adalah perusahaan yang bergerak di bidang
            jual beli, distribusi, dan keagenan timbangan laboratorium. Kami
            berkomitmen menyediakan produk-produk berkualitas tinggi yang
            mendukung penelitian, pengujian, dan pengembangan di berbagai
            bidang, mulai dari pendidikan hingga industri.
          </h2>
          <div className="flex items-center justify-center pt-8 md:pt-14">
            <div className="flex items-center text-center">
              <div className="px-6 md:px-16">
                <p className="text-3xl md:text-5xl text-gray-800">20+</p>
                <p className="text-red-500 text-base md:text-lg font-semibold md:mt-2">
                  Tahun Pengalaman
                </p>
              </div>
              <div className="h-16 border-l-2 border-gray-300"></div>
              <div className="px-6 md:px-16">
                <p className="text-3xl md:text-5xl text-gray-800">67+</p>
                <p className="text-red-500 text-base md:text-lg font-semibold md:mt-2">
                  Produk Terbaik
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
