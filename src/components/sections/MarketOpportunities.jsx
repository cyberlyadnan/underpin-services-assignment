import Image from "next/image";

const MarketOpportunities = () => {
  return (
    <section
      className="relative w-full flex items-center justify-center bg-cover bg-center px-6 py-6 md:py-20
      bg-gradient-to-b from-[#0E1217] via-[#111827] to-[#0E1217] bg-blend-overlay"
    >
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
      <div className="p-6 md:p-6 rounded-lg max-w-5xl w-full text-white flex flex-col md:flex-row items-center gap-6 md:gap-12">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2">
          <div className="relative rounded-lg p-1">
            <Image
              src="/images/vr-user.png" // Replace with actual image path
              alt="VR User"
              width={300}
              height={400}
              className="rounded-lg p-1 border border-gray-400  w-72 h-[60vh] object-cover"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Market Opportunities
          </h2>
          <p className="text-sm md:text-base font-semibold mb-4">
            Blackrose Club Targets The Most Active And Technology Savvy Target
            Group In The DACH Region And Will Later Expand To Serve The Global
            Market.
          </p>
          <ul className="text-sm md:text-base space-y-2">
            <li>
              • <strong>Market:</strong> Around 66 Million E-Commerce Customers
              In The DACH Region Spent Over 100 Billion Euros On Online
              Purchases In 2021. Most Popular Orders Were Clothes, Shoes, Food,
              And Beauty Products.
            </li>
            <li>
              • <strong>Target Group:</strong> The Percentage Of Internet Users
              In The EU Who Order Products Online Is Increasing, Especially
              Among 16-24 Years Old.
            </li>
            <li>
              • <strong>Behavior:</strong> Consumers Prefer Online Over Physical
              Orders Due To Convenience, Variety, Competitive Prices, And 24/7
              Access.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MarketOpportunities;
