import { Search, Building, UserCheck, ShieldAlert, Shield, Bot } from "lucide-react";

export type ServiceDetails = {
  id: string;
  icon: any; // Lucide icon
  title: string;
  description: string; // short description for the card
  whatWeDo: string[];
  coreProcess?: string; // or process steps if preferred
  investigationFlow?: string[]; // for specific services
  threatFlow?: string[];
  automationFlow?: string[];
  clientNeeds: string[];
  deliverables: string[];
  possibleAreas?: string[];
  optionalService?: string;
  limitations: string;
};

export const servicesData: ServiceDetails[] = [
  {
    id: "osint-investigation",
    icon: Search,
    title: "OSINT Investigation",
    description: "Research lawfully accessible public and open-source information and transform fragmented information into structured intelligence.",
    whatWeDo: [
      "Research public websites",
      "Public company information",
      "Public social-media profiles",
      "Public documents",
      "News and media",
      "Government/public databases",
      "Domain and DNS information",
      "Certificate transparency information",
      "Public technical infrastructure information",
      "Public repositories",
      "Publicly available breach disclosures where legally accessible",
      "Business registrations",
      "Public professional profiles",
      "Archived and publicly indexed information"
    ],
    coreProcess: "Define → Collect → Validate → Correlate → Analyze → Report",
    clientNeeds: [
      "Target/company/person/entity name",
      "Known website or domain",
      "Investigation objective",
      "Geographic scope where relevant",
      "Relevant time period",
      "Specific questions",
      "Any known information useful for scoping"
    ],
    deliverables: [
      "Executive Summary",
      "Investigation Objective",
      "Scope",
      "Methodology",
      "Findings",
      "Correlations",
      "Risk/Significance",
      "Evidence",
      "Source References",
      "Confidence Assessment",
      "Limitations",
      "Conclusion"
    ],
    limitations: "Agletras relies primarily on publicly accessible or lawfully provided information. Information may be incomplete, outdated, incorrect, removed, misleading, or temporarily unavailable. Agletras does not guarantee that every relevant piece of information will be discovered."
  },
  {
    id: "business-due-diligence",
    icon: Building,
    title: "Business Due Diligence",
    description: "Research publicly available information about companies, organizations, founders, directors, brands, vendors and business partners to support informed business decisions.",
    whatWeDo: [
      "Company existence research",
      "Business history research",
      "Website/domain history",
      "Public corporate information",
      "Leadership information",
      "Public reputation research",
      "Relevant news coverage",
      "Public litigation/regulatory information where accessible",
      "Associated businesses",
      "Public digital footprint",
      "Brand presence",
      "Potential inconsistencies",
      "Publicly visible warning indicators"
    ],
    clientNeeds: [
      "Target company name",
      "Website/domain",
      "Registration information if available",
      "Country/jurisdiction",
      "Relevant founder/director names",
      "Reason for due diligence",
      "Specific concerns",
      "Desired investigation period"
    ],
    deliverables: [
      "Business Due Diligence Report with relevant findings, evidence, source references, confidence levels and overall informational assessment."
    ],
    possibleAreas: [
      "Corporate Presence",
      "Digital Presence",
      "Reputation",
      "Ownership Transparency",
      "Public Risk Indicators",
      "Overall Finding"
    ],
    limitations: "Agletras does NOT certify that a company is legitimate, safe, trustworthy, financially sound, or free from risk. The report represents an assessment based on information available within the defined scope and research period."
  },
  {
    id: "recruitment-verification",
    icon: UserCheck,
    title: "Recruitment Verification",
    description: "Verify publicly available professional and digital information against information supplied for recruitment workflows.",
    whatWeDo: [
      "Public professional profile research",
      "Publicly represented employment information",
      "Publicly represented education information",
      "Public portfolio research",
      "Public GitHub/repository research",
      "Publicly listed professional certifications",
      "Published work",
      "Public business affiliations",
      "Identification of publicly visible inconsistencies"
    ],
    clientNeeds: [
      "Candidate name",
      "Information supplied by the candidate",
      "Public profile URLs where available",
      "Role being applied for",
      "Verification categories requested",
      "Appropriate candidate authorization/consent where required"
    ],
    deliverables: [
      "Professional profile findings",
      "Employment information findings",
      "Education findings",
      "Portfolio findings",
      "Technical profile findings",
      "Public inconsistencies",
      "Confidence assessment",
      "Supporting sources"
    ],
    limitations: "Agletras provides research findings only. The report does NOT constitute a recommendation to hire, reject, terminate, or otherwise take employment action against an individual. Only publicly available or lawfully provided information should be used."
  },
  {
    id: "brand-impersonation",
    icon: ShieldAlert,
    title: "Brand Impersonation & Scam Research",
    description: "Identify and analyze publicly visible indicators of brand impersonation, fraudulent activity and suspicious digital assets.",
    whatWeDo: [
      "Fake website research",
      "Lookalike domain identification",
      "Fake social account research",
      "Brand impersonation research",
      "Scam campaign research",
      "Fraudulent advertisement research",
      "Fake customer-support account research",
      "Fake business profile research",
      "Public phishing-related indicators",
      "Misleading brand representations"
    ],
    investigationFlow: [
      "Official Brand",
      "Potential Impersonator",
      "Domain / Profile / Campaign",
      "Evidence",
      "Relationship / Similarity",
      "Risk Assessment"
    ],
    clientNeeds: [
      "Official company name",
      "Official domains",
      "Official social accounts",
      "Brand assets where relevant",
      "Known impersonation examples",
      "Suspicious URLs/accounts already identified",
      "Geographic scope",
      "Investigation period"
    ],
    deliverables: [
      "Suspicious assets",
      "Domains",
      "URLs",
      "Profiles",
      "Evidence",
      "Screenshots where appropriate",
      "Similarity analysis",
      "Timeline",
      "Indicators",
      "Confidence level",
      "Recommended next actions"
    ],
    optionalService: "Continuous brand monitoring can be presented as an additional service rather than implying that it is included in every investigation.",
    limitations: "Agletras relies primarily on publicly accessible or lawfully provided information. Information may be incomplete, outdated, incorrect, removed, misleading, or temporarily unavailable."
  },
  {
    id: "cyber-threat-intelligence",
    icon: Shield,
    title: "Cyber Threat Intelligence",
    description: "Research and analyze publicly available cyber-threat information, indicators, infrastructure and campaigns to produce actionable security intelligence.",
    whatWeDo: [
      "Threat actor research",
      "Campaign research",
      "Malware-related intelligence",
      "Domain research",
      "IP infrastructure research",
      "Hash/indicator research",
      "Vulnerability information",
      "Public threat reports",
      "Exploitation trends",
      "Industry-specific threats",
      "Threat indicators",
      "Publicly disclosed incidents"
    ],
    threatFlow: [
      "Industry",
      "Threat Landscape",
      "Relevant Threat Actors",
      "Known Campaigns",
      "Indicators",
      "Potential Impact",
      "Defensive Recommendations"
    ],
    clientNeeds: [
      "Industry vertical",
      "Specific threat actors of concern",
      "Specific infrastructure or campaigns to investigate",
      "Known indicators if available"
    ],
    deliverables: [
      "Executive Threat Brief",
      "IOC list",
      "Threat actor profile",
      "Campaign analysis",
      "Timeline",
      "Infrastructure relationships",
      "MITRE ATT&CK mapping where appropriate",
      "Risk assessment",
      "Defensive recommendations"
    ],
    limitations: "Threat intelligence is an intelligence and research service. It does not guarantee that an organization will avoid a cybersecurity incident."
  },
  {
    id: "research-automation",
    icon: Bot,
    title: "Research Automation",
    description: "Build automation workflows that reduce repetitive information collection, processing, analysis and reporting tasks.",
    whatWeDo: [
      "Website monitoring",
      "Domain monitoring",
      "Public-source collection",
      "Brand monitoring",
      "Threat-intelligence collection",
      "Research pipelines",
      "Data extraction",
      "Report generation",
      "Scheduled intelligence collection",
      "Internal research dashboards",
      "API integrations"
    ],
    automationFlow: [
      "Data Sources",
      "Collection",
      "Normalization",
      "Deduplication",
      "Correlation",
      "Analysis",
      "Report Generation"
    ],
    clientNeeds: [
      "Current workflow",
      "Data sources",
      "Expected output",
      "Required frequency",
      "Existing systems/APIs",
      "Legitimate authentication requirements",
      "Technical requirements",
      "Hosting requirements"
    ],
    deliverables: [
      "Automation script",
      "API",
      "Dashboard",
      "Workflow",
      "Documentation",
      "Deployment",
      "Scheduled pipeline",
      "Monitoring system",
      "Source code if explicitly included in the agreement"
    ],
    limitations: "Do not imply that source code ownership is automatically transferred. Intellectual-property terms must be defined in the project agreement."
  }
];
