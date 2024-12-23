const ContactUs = () => {
  return (
    <section id="contactUs" className="min-h-[80vh] bg-gray-100 py-6 px-36">
      <div className="flex w-full h-full gap-x-8">
        {/* Left Section */}
        <div className="w-1/3 bg-white p-5 rounded-lg">
          <h2 className="font-urbanist text-green-700 font-bold text-lg">
            Hubungi Kami
          </h2>
          <h2 className="font-urbanist text-gray-800 py-4 font-extrabold text-3xl">
            Butuh Konsultasi atau Ingin Memesan?
          </h2>
          <p className="text-lg text-gray-500 pb-3">
            Hubungi kami untuk konsultasi, pemesanan, atau pertanyaan lainnya.
            Kami berkomitmen memberikan solusi terbaik untuk kebutuhan
            laboratorium dan kesehatan Anda.
          </p>

          {/* Buttons */}
          <div className="flex flex-col space-y-4 pt-8">
            <button className="flex items-center w-full justify-center border border-red-500 rounded-md py-3 text-red-600 space-x-4 hover:text-white transition duration-300 hover:bg-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
            </button>

            <button className="flex items-center w-full justify-center border border-red-500 rounded-md py-3 text-red-600 space-x-4 hover:text-white transition duration-300 hover:bg-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-2/3 bg-white rounded-lg p-10">
          <h2 className="font-urbanist text-gray-800 font-extrabold text-5xl">
            Dapatkan Penawaran Spesial Sekarang!
          </h2>
          <form className="space-y-4 pt-7">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
            <textarea
              placeholder="Message"
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-red-500 text-white font-semibold py-2 rounded-md hover:bg-red-600 transition duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
