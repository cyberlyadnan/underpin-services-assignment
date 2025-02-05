const NewsletterSection = () => {
    return (
      <section className="bg-custom-gradient text-white py-12 pb-24 px-4 md:px-8 lg:px-16 flex flex-col items-center text-center">
        <div className="border-t-2 border-zinc-700 h-2 w-[80%] mb-12"></div>
        <h2 className="text-2xl md:text-3xl font-bold font-orbitron mb-4">Stay Updated With Us</h2>
        <p className="text-gray-400 max-w-2xl font-poppins mb-6">
          Blackrose Club Targets The Most Active And Technology Savvy Target Group In The DACH Region And Will Later
        </p>
        <div className="w-full max-w-2xl flex justify-between items-center gap-3 bg-[#FFFFFF1A] rounded-full p-2 shadow-lg">
          <input
            type="email"
            placeholder="Enter Email Address To Subscribe Our Newsletter"
            className="w-[80%] bg-transparent font-poppins text-white px-4 py-3 outline-none placeholder-gray-400"
          />
          <button className="bg-themeColor font-semibold hover:bg-green-600 text-black px-6 py-3 rounded-full transition-all">
            Subscribe
          </button>
        </div>
      </section>
    );
  };
  
  export default NewsletterSection;
  