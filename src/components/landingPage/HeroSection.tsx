import { CheckCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="bg-white py-20 px-3 md:px-10 flex items-center relative justify-center max-w-7xl mx-auto"
    >
      <div className="w-full md:w-2/3 font-urbanist">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
          <CheckCircle className="w-4 h-4 text-green-600" />
          <span className="text-sm font-medium text-green-700">
            Official Distributor
          </span>
        </div>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 pt-5">
          PT. Anugrah Niaga Mandiri
        </h2>
        <h1 className="py-6 text-5xl md:text-5xl font-extrabold text-gray-900">
          Solusi Lengkap untuk Kebutuhan <br />
          <span className="text-3xl md:text-6xl font-extrabold text-green-700">
            Metal Tester Laboratorium
          </span>
        </h1>
        <p className="font-poppins text-base md:text-lg text-gray-700 italic pb-10">
          Distributor dan Agen Terpercaya Timbangan Laboratorium Berkualitas
          Tinggi di Indonesia
        </p>
        <a
          href="https://wa.me/6281398387525"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-500 text-white border-2 border-red-500 px-6 py-3 rounded-md text-base font-semibold"
        >
          Konsultasi Sekarang
        </a>
      </div>
      <div className="w-0 md:w-1/3 justify-end hidden md:block">
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
        className="absolute bottom-12 right-10 hidden md:block"
      />
    </section>
  );
};

export default HeroSection;
