import seamlessApi from "@/assets/projects/seamless-api.jpg";
import dataEngine from "@/assets/projects/data-engine.jpg";
import seamlessMcp from "@/assets/projects/seamless-mcp.jpg";
import seamlessFastData from "@/assets/projects/seamless-fast-data.jpg";
import inseegoConnect from "@/assets/projects/inseego-connect.jpg";
import latinHyperTexts from "@/assets/projects/latin-hyper-texts.jpg";
import theArc from "@/assets/projects/the-arc.png";
import productAnalysis from "@/assets/projects/seamless-product-analysis.jpg";
import { projectsContent } from "@/content";

export type RoleSignal = "Senior PM" | "Senior BI" | "Staff Analyst";

export type Project = {
  slug: string;
  title: string;
  date: string;
  headline?: string;
  summary: string;
  image: string;
  tags: string[];
  problem: string;
  role: string;
  strategy: string;
  insights: string;
  outcome: string;
  tradeOff?: string;
  featured?: boolean;
  signals?: RoleSignal[];
};

// To add a new project image: drop the file in src/assets/projects/,
// import it above, and add the import here keyed by the `"image"` value
// you use in content/projects.json.
const imageMap: Record<string, string> = {
  "seamless-api": seamlessApi,
  "data-engine": dataEngine,
  "seamless-mcp": seamlessMcp,
  "seamless-fast-data": seamlessFastData,
  "inseego-connect": inseegoConnect,
  "latin-hyper-texts": latinHyperTexts,
  "the-arc": theArc,
  "product-analysis": productAnalysis,
};

export const projects: Project[] = (projectsContent as Array<Omit<Project, "image"> & { image: string }>).map(
  (p) => ({
    ...p,
    image: imageMap[p.image] ?? p.image,
    signals: p.signals as RoleSignal[] | undefined,
  }),
);
