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

// Live production origin (GitHub Pages). Used for absolute og:image / canonical
// URLs that social crawlers can resolve.
export const SITE_URL = "https://benalayz.github.io/zach-benalayat-product-portfolio";

// Absolute URL for an asset, anchored to the live origin (for social cards).
export const absUrl = (p: string) => `${SITE_URL}/${p.replace(/^\//, "")}`;

// Default branded social share card.
export const OG_IMAGE = absUrl("og-image.jpg");
