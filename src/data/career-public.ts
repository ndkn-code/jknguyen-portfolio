import generatedData from "./profile.generated.json";

export type ProjectCategory = "Product" | "Data" | "AI";

export interface PublicExperience {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  active: boolean;
}

export interface PublicProject {
  id: string;
  href: string;
  title: string;
  description: string;
  repository_url: string;
  image: string;
  tech: string[];
  categories: ProjectCategory[];
  badge: string;
}

export interface PublicCareerData {
  schema_version: 1;
  generated: {
    allowlist_version: 1;
    claim_count: number;
    content_sha256: string;
  };
  profile: {
    name: string;
    role_line: string;
    headline: string;
    availability: string;
    summary: string;
    why_product_data: string;
    builder_quote: string;
    location: string;
    linkedin_url: string;
    portfolio_url: string;
    github_url: string;
  };
  experiences: PublicExperience[];
  projects: PublicProject[];
}

export const careerPublic = generatedData as PublicCareerData;
