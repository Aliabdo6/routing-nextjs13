import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="/projects/list">
        see the projects
      </Link>
      <h1>Home</h1>
    </main>
  );
}
