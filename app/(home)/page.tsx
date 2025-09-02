import { Zap, Scale, Code, Search, Scaling } from "lucide-react";
import { Go, Python, Rust, TypeScript, C } from "../components/logos";
import { Skeleton } from "@/components/ui/skeleton";

import { Me } from "../components/logos/devs";
import Link from "next/link";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <div className="w-full h-full bg-background text-foreground">
      {/* Background Grid */}
      <div className="absolute inset-0 h-full w-full bg-transparent bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(#404040_1px,transparent_1px)]"></div>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="text-center pt-20 pb-16 sm:pt-28 sm:pb-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 text-balance">
              The database written by Devs, for Devs.
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              cuky is the next-generation vector database designed to power your
              AI applications with speed, scalability, and ease of use.
            </p>

            <div className="max-w-xl mx-auto">
              <form className="flex items-center gap-2 bg-background border rounded-full p-2 shadow-sm">
                <input
                  type="text"
                  placeholder="Prueba una búsqueda semántica..."
                  className="flex-grow bg-transparent focus:outline-none px-4 py-1"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center h-10 px-6 rounded-full bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                >
                  <Search className="w-5 h-5" />
                </button>
              </form>
            </div>

            <div className="mt-12 text-muted-foreground">
              <div className="flex flex-col items-center justify-center gap-4">
                <span className="text-base">Developed for:</span>
                <div className="flex items-center justify-center gap-8">
                  <TypeScript className="h-15 w-15" />
                  <Rust className="h-15 w-15" />
                  <Go className="h-15 w-15" />
                  <Python className="h-15 w-15" />
                  <C className="h-15 w-15" />
                </div>
                <span className="text-base">Brought to you by:</span>
                <div className="flex items-center justify-center gap-8">
                  <Suspense fallback={<MeSkeleton />} name="Me">
                    <Me />
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-balance">
                A vectorial database, but different
              </h2>
              <p className="text-muted-foreground mt-2 max-w-xl mx-auto text-balance">
                Everything you need to build high-performance and durable
                applications.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="p-2">
                <div className="inline-block p-3 mb-4">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Ultra Fast Search
                </h3>
                <p className="text-muted-foreground text-balance">
                  ANNOY search algorithms optimized to deliver results in
                  milliseconds.
                </p>
              </div>
              <div className="p-2">
                <div className="inline-block p-3 mb-4">
                  <Scaling className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Scalable Architecture
                </h3>
                <p className="text-muted-foreground text-balance">
                  Designed to grow with you, from small projects to massive
                  deployments.
                </p>
              </div>
              <div className="p-2">
                <div className="inline-block p-3 mb-4">
                  <Code className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Intuitive API</h3>
                <p className="text-muted-foreground text-balance">
                  An easy-to-use API that you can integrate into your stack
                  without complications.
                </p>
              </div>
              <div className="p-2">
                <div className="inline-block p-3 mb-4">
                  <Scale className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Always open-source
                </h3>
                <p className="text-muted-foreground text-balance">
                  Released under{" "}
                  <Link
                    href={
                      "https://github.com/TheCukitoDev/cuky/blob/main/LICENSE"
                    }
                    className="font-bold underline"
                  >
                    MIT License
                  </Link>
                  , ensuring everyone can collaborate and contribute
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function MeSkeleton() {
  return <Skeleton className="h-15 w-15 rounded-full" />;
}
