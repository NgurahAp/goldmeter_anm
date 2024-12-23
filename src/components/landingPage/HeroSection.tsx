import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="bg-white h-[86vh] px-20 flex items-center relative"
    >
      <div className="w-2/3 font-urbanist">
        <h2 className="text-2xl font-semibold text-gray-800">
          PT. Anugrah Niaga Mandiri
        </h2>
        <h1 className="py-6 text-5xl font-extrabold text-gray-900">
          Solusi Lengkap untuk Kebutuhan <br />
          <span className="text-6xl font-extrabold text-green-700">
            Peralatan Laboratorium
          </span>
        </h1>
        <p className="font-poppins text-lg text-gray-700 italic pb-10">
          Distributor dan Agen Terpercaya Alat Laboratorium Berkualitas Tinggi
          di Indonesia
        </p>
        <Link
          to="#"
          className="bg-red-500 text-white border-2 border-red-500 px-6 py-3 rounded-md text-base font-semibold"
        >
          Konsultasi Sekarang
        </Link>
      </div>
      <div className="w-1/3 flex justify-end">
        <img
          src="/landing/densimeter.jpg"
          alt="Densimeter"
          width={360}
          height={403}
        />
      </div>
      <img
        src="/landing/navbar_logo.jpg"
        width={120}
        height={23}
        alt="Logo PT Anugrah Niaga Mandiri"
        className="absolute bottom-12 right-10"
      />
    </section>
  );
};

export default HeroSection;
