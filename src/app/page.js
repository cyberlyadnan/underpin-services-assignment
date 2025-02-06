"use client";

import dynamic from "next/dynamic";
import { cards, documentsSectionData, heroData, marketOpportunitiesData, services, servicesDetails, teamMembers } from "../utils/constants";

// Lazy Load Components
const HeroSection = dynamic(() => import("@/components/sections/HeroSection"), { ssr: true });
const MembershipSection = dynamic(() => import("@/components/sections/MembershipSection"), { ssr: true });
const KeyServices = dynamic(() => import("@/components/sections/KeyServices"), { ssr: true });
const MarketOpportunities = dynamic(() => import("@/components/sections/MarketOpportunities"), { ssr: true });
const TeamSection = dynamic(() => import("@/components/sections/TeamSection"), { ssr: true });
const DocumentsSection = dynamic(() => import("@/components/sections/DocumentsSection"), { ssr: true });
const NewsletterSection = dynamic(() => import("@/components/sections/NewsletterSection"), { ssr: true });

export default function Home() {
  return (
    <>
      <HeroSection heroData={heroData} />
      <MembershipSection cards={cards} />
      <KeyServices services={services} servicesDetails={servicesDetails} />
      <MarketOpportunities marketOpportunitiesData={marketOpportunitiesData} />
      <TeamSection teamMembers={teamMembers.teamMembers} title={teamMembers.title} desc={teamMembers.description} />
      <DocumentsSection documents={documentsSectionData.documents} title={documentsSectionData.title} desc={documentsSectionData.desc} />
      <NewsletterSection />
    </>
  );
}
