import { Asterisk } from "lucide-react";
import { NotFoundLink } from "@/app/components/not-found-link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="mb-8">
        <Asterisk className="h-48 w-48 animate-pulse text-muted-foreground" />
      </div>
      <h1 className="text-4xl font-bold">404 - Not Found</h1>
      <p className="mb-8 text-lg text-center">The page you are looking for does not exist.</p>
      <div className="w-full max-w-md space-y-4">
        <NotFoundLink
          href="/docs"
          title="Documentation"
          description="Browse the documentation to find what you need."
        />
        <NotFoundLink
          href="/"
          title="Home"
          description="Return to the homepage."
        />
      </div>
    </div>
  );
}
