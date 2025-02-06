"use client";

import dynamic from "next/dynamic";
import { cards, documentsSectionData, heroData, marketOpportunitiesData, services, servicesDetails, teamMembers } from "../utils/constants";
import Spinner from "../components/layout/Spinner";

// Lazy Load Components
const HeroSection = dynamic(() => import("@/components/sections/HeroSection"), { ssr: false, loading: () => <Spinner /> });
const MembershipSection = dynamic(() => import("@/components/sections/MembershipSection"), { ssr: false, loading: () => <Spinner />  });
const KeyServices = dynamic(() => import("@/components/sections/KeyServices"), { ssr: false, loading: () => <Spinner />  });
const MarketOpportunities = dynamic(() => import("@/components/sections/MarketOpportunities"), { ssr: false, loading: () => <Spinner />  });
const TeamSection = dynamic(() => import("@/components/sections/TeamSection"), { ssr: false, loading: () => <Spinner />  });
const DocumentsSection = dynamic(() => import("@/components/sections/DocumentsSection"), { ssr: false, loading: () => <Spinner />  });
const NewsletterSection = dynamic(() => import("@/components/sections/NewsletterSection"), { ssr: false, loading: () => <Spinner />  });

export default function Home() {
  return (
    <>
      <HeroSection heroData={heroData} />
      <MembershipSection cards={cards} />
      <KeyServices services={services} servicesDetails={servicesDetails} />
      <MarketOpportunities marketOpportunitiesData={marketOpportunitiesData} />
      <TeamSection teamMembers={teamMembers.teamMembers} title={teamMembers.title} desc={teamMembers.description} />
      <DocumentsSection headingPrefix={"Documents:"} documents={documentsSectionData.documents} title={documentsSectionData.title} desc={documentsSectionData.desc} />
      <NewsletterSection />
    </>
  );
}
