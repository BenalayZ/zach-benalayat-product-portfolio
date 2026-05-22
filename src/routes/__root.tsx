import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { Linkedin } from "lucide-react";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Zach Benalayat",
  jobTitle: "Product Manager & Data Analyst",
  description:
    "Product Analyst and Manager shipping B2B SaaS, IoT, and AI platforms end-to-end. Open to full-time, fractional, and contract engagements.",
  url: "https://zachbenalayat.com",
  email: "mailto:zacharia.benalayat@gmail.com",
  sameAs: ["https://www.linkedin.com/in/zach-benalayat/"],
  worksFor: { "@type": "Organization", name: "Seamless.AI" },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Dickinson College" },
    { "@type": "CollegeOrUniversity", name: "The University of Texas at Austin" },
  ],
  knowsAbout: [
    "Product Management",
    "Data Analysis",
    "Product Strategy",
    "B2B SaaS",
    "IoT",
    "AI Platforms",
    "Agentic AI",
    "ETL & Data Pipelines",
    "A/B Testing",
    "Funnel Analysis",
    "SQL",
    "Python",
  ],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Zach Benalayat — Product Manager & Data Analyst" },
      { name: "description", content: "Product portfolio of Zach Benalayat, featuring Seamless API, Inseego Connect, and more." },
      { name: "author", content: "Zach Benalayat" },
      { property: "og:title", content: "Zach Benalayat — Product Manager & Data Analyst" },
      { property: "og:description", content: "Product portfolio of Zach Benalayat, featuring Seamless API, Inseego Connect, and more." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Zach Benalayat" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@zachbenalayat" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Manrope:wght@300;400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(personSchema),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-lg font-semibold tracking-tight text-foreground">
          Zach Benalayat
        </Link>
        <nav className="flex items-center gap-2 text-sm font-medium md:gap-6">
          <Link to="/" className="text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-foreground" }}>
            Work
          </Link>
          <Link to="/about" className="text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-foreground" }}>
            About
          </Link>
          <Link to="/contact" className="text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-foreground" }}>
            Contact
          </Link>
          <a
            href="https://www.linkedin.com/in/zach-benalayat/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="ml-1 inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="/Zach_J_Benalayat.pdf"
            download
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-all hover:bg-primary/90 md:px-4 md:text-sm"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Zach Benalayat
        </p>
        <div className="flex gap-4 text-sm text-muted-foreground">
          <a href="https://www.linkedin.com/in/zach-benalayat" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
            LinkedIn
          </a>
          <a href="mailto:zacharia.benalayat@gmail.com" className="transition-colors hover:text-foreground">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
