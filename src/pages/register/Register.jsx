const Login = () => {
    return (
      <div>
        <div className="bg-banner h-[40vh] grid items-center justify-center text-center content-center my-4 md:my-10">
          <h1 className="text-xl md:text-6xl dancing text-[#FFCE6D] mb-5">
            Register
          </h1>
          <h3 className="text-white text-sm md:text-xl">
            <a href="/">Home</a> | <a href="/register">Register</a>
          </h3>
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-[#101418] bg-opacity-30 p-4 md:p-20 rounded-lg shadow-lg md:w-1/2">
            <div className="text-center mb-4 md:mb-6">
              <p className="md:text-2xl text-[#FFCE6D] ">
                Let&apos;s Start Your Dinner With Us
              </p>
            </div>
            <form className="space-y-3 md:space-y-10">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFCE6D]"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFCE6D]"
              />
              <input
                type="url"
                placeholder="Photo URL"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFCE6D]"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFCE6D]"
              />
              <button
                type="submit"
                className="w-full py-2 border rounded-lg font-bold bg-[#FFCE6D] text-[#101418] hover:bg-[#101418] hover:text-[#FFCE6D]"
              >
                Register
              </button>
            </form>
  
            <div className="text-center text-md mt-4 md:text-lg text-[#FFCE6D]">
              Already Have An Account?
              <a
                href="/login"
                className="text-white hover:text-[#FFCE6D] text-lg md:text-xl"
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Login;