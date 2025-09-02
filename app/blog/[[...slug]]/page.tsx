import Link from "next/link";
import { ReturnButton } from "@/components/returnButton";

export default async function Page(props: PageProps<"/blog/[[...slug]]">) {
  const params = await props.params;
  if (!params.slug)
    return (
      <div className="flex flex-col gap-4 items-center justify-center min-h-[60vh]">
        <h1 className="text-2xl font-bold flex justify-center">
          Blog - Work in progress
        </h1>
      </div>
    );

  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-[60vh]">
      <h1 className="text-2xl font-bold flex justify-center">
        Blog - Work in progress
      </h1>
      <h2>
        You&apos;re at{" "}
        <Link
          href={`/blog/${params.slug.join("/")}`}
          className="font-bold underline"
        >
          /{params.slug.join("/")}
        </Link>
      </h2>

      <ReturnButton />
    </div>
  );
}
