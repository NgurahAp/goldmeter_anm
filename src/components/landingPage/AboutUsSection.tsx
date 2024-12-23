const AboutUs = () => {
  return (
    <section className="min-h-screen flex items-center">
      <div className="flex gap-x-10 px-24 ">
        <div className="w-1/2">
          <img
            className="w-full"
            src="/landing/about_us.jpg"
            alt="Penyedia Utama Solusi Alat Laboratorium dan Alat Kesehatan"
            height={547}
            width={523}
          />
        </div>
        <div className="w-1/2 font-urbanist">
          <p className="text-green-700 font-extrabold pb-6 text-lg">
            Tentang Kami
          </p>
          <h2 className="font-extrabold text-5xl text-gray-800 pb-6">
            Penyedia Utama Solusi Alat Laboratorium dan Alat Kesehatan
          </h2>
          <h2 className="font-poppins text-gray-500 text-xl ">
            PT. Anugrah Niaga Mandiri adalah perusahaan yang bergerak di bidang
            jual beli, distribusi, dan keagenan alat-alat laboratorium. Kami
            berkomitmen menyediakan produk-produk berkualitas tinggi yang
            mendukung penelitian, pengujian, dan pengembangan di berbagai
            bidang, mulai dari pendidikan hingga industri.
          </h2>
          <div className="flex items-center justify-center pt-14">
            <div className="flex items-center text-center">
              <div className="px-16">
                <p className="text-5xl text-gray-800">20+</p>
                <p className="text-red-500 text-lg font-semibold mt-2">
                  Tahun Pengalaman
                </p>
              </div>
              <div className="h-16 border-l-2 border-gray-300"></div>
              <div className="px-16">
                <p className="text-5xl text-gray-800">67+</p>
                <p className="text-red-500 text-lg font-semibold mt-2">
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
