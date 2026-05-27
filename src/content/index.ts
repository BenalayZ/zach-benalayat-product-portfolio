import siteRaw from "../../content/site.json";
import homeRaw from "../../content/home.json";
import aboutRaw from "../../content/about.json";
import contactRaw from "../../content/contact.json";
import projectsRaw from "../../content/projects.json";

export const site = siteRaw;
export const home = homeRaw;
export const about = aboutRaw;
export const contact = contactRaw;
export const projectsContent = projectsRaw;

// Resolve a path under the deployed base URL (e.g. GitHub Pages subpath).
export const withBase = (p: string) =>
  `${import.meta.env.BASE_URL.replace(/\/$/, "")}/${p.replace(/^\//, "")}`;
