const Contact = () => {
  return (
    <div>
      <div className="bg-banner h-[40vh] grid items-center justify-center text-center content-center my-10">
        <h1 className="text-xl md:text-6xl dancing text-[#FFCE6D] mb-5">
          Contact Us
        </h1>
        <h3 className="text-white text-sm md:text-xl">
          <a href="/">Home</a> | <a href="/contact">Contact Us</a>
        </h3>
      </div>

      <div>
        <div className="bg-[#101418] bg-opacity-20 md:p-8 rounded-md shadow-lg px-2  md:w-3/4 mx-auto">
          <div className="text-center mb-4">
            <h1 className="text-lg md:text-2xl text-white md:py-10">
              Send Valuable Feedback To Us
            </h1>
          </div>
          <form className="space-y-2 md:space-y-10">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="border border-gray-300 p-2 rounded-md w-full"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 p-2 rounded-md w-full"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Subject"
                className="border border-gray-300 p-2 rounded-md w-full"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="border border-gray-300 p-2 rounded-md w-full"
              />
            </div>
            <textarea
              placeholder="Message"
              className="border border-gray-300 p-2 rounded-md w-full h-32"
            ></textarea>
            <div className="text-center">
              <button
                type="submit"
                className="border border-solid-2 text-white font-bold py-2 px-4 rounded-md hover:bg-black hover:text-[#FFC] "
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
