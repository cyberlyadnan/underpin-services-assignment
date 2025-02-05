import DocumentsSection from "@/components/sections/DocumentsSection";
import HeroSection from "@/components/sections/HeroSection";
import KeyServices from "@/components/sections/KeyServices";
import MarketOpportunities from "@/components/sections/MarketOpportunities";
import MembershipSection from "@/components/sections/MembershipSection";
import TeamSection from "@/components/sections/TeamSection";
import NewsletterSection from "../components/sections/NewsletterSection";

export default function Home() {
  return (
    <>
      <main className="bg-gradient-to-b from-[#0E1217] via-[#111827] to-[#0E1217]">
        <HeroSection />
        <MembershipSection />
        <KeyServices />
        <MarketOpportunities />
        <TeamSection />
        <DocumentsSection />
        <NewsletterSection/>
      </main>
    </>
  );
}
