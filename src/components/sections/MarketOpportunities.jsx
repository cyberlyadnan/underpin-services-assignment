import Image from "next/image";



const MarketOpportunities = ({marketOpportunitiesData}) => {
  return (
    <section className="relative w-full flex items-center justify-center bg-cover bg-center px-6 py-6 md:py-12 bg-custom-gradient">
      {/* Background Images */}
      <div className="absolute inset-0">
        <Image
          src="/images/vector.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="absolute top-[33%] inset-0 backdrop-blur-lg bg-[#FFFFFF1A] z-10 h-[70%] md:h-[50%]"></div>
      
      <div className="p-6 md:p-6 rounded-lg max-w-5xl w-full text-white flex flex-col md:flex-row items-center gap-6 md:gap-12">
        {/* Image Section */}
        <div className="relative z-20 w-full md:w-1/2 flex justify-end px-0 md:px-12">
          <div className="relative rounded-lg p-1">
            <Image
              src="/images/vr-user.png"
              alt="VR User"
              width={400}
              height={500}
              className="rounded-lg p-1 w-[100%] h-auto object-cover"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full z-20 md:w-1/2">
          <h2 className="text-2xl font-caudex md:text-4xl font-bold mb-4">
            {marketOpportunitiesData.title}
          </h2>
          <p className="text-sm md:text-md mt-8 font-poppins mb-4">
            {marketOpportunitiesData.description}
          </p>
          <ul className="text-sm md:text-md mt-3 font-poppins space-y-1">
            {marketOpportunitiesData.points.map((point, index) => (
              <li key={index}>• {point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MarketOpportunities;
