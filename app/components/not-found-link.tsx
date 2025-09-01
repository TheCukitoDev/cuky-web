import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

type NotFoundLinkProps = {
  href: string;
  title: string;
  description: string;
};

export function NotFoundLink({ href, title, description }: NotFoundLinkProps) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-4 rounded-lg border bg-card p-4 text-card-foreground transition-colors hover:bg-muted/50"
    >
      <div className="flex-1">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
    </Link>
  );
}
