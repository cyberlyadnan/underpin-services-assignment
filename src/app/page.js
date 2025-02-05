import DocumentsSection from "@/components/sections/DocumentsSection";
import HeroSection from "@/components/sections/HeroSection";
import KeyServices from "@/components/sections/KeyServices";
import MarketOpportunities from "@/components/sections/MarketOpportunities";
import MembershipSection from "@/components/sections/MembershipSection";
import TeamSection from "@/components/sections/TeamSection";
import NewsletterSection from "../components/sections/NewsletterSection";
import { cards, documents, documentsSectionData, heroData, marketOpportunitiesData, services, servicesDetails, teamMembers } from "../utils/constants";
import Demo from "../components/sections/Demo";

export default function Home() {
  return (
    <>
        <HeroSection heroData={heroData}/>
        <MembershipSection cards={cards}/>
        <KeyServices services={services} servicesDetails={servicesDetails}/>
        <MarketOpportunities marketOpportunitiesData={marketOpportunitiesData}/>
        <TeamSection teamMembers={teamMembers.teamMembers} title={teamMembers.title} desc={teamMembers.description}/>
        <DocumentsSection documents={documentsSectionData.documents} title={documentsSectionData.title} desc={documentsSectionData.desc} />
        <NewsletterSection/>
    </>
  );
}
