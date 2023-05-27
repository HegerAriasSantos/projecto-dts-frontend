import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      home Page
      <Link href={"/home"}>Go to page</Link>
      <a href="https://tailwindtemplates.co/templates/tags/startup?type=free">
        Templates
      </a>
    </main>
  );
}
