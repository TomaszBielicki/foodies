import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>
      <p>
        <Link href="/pages/meals">Meals Page</Link>
        <Link href="/pages/community">Community</Link>
        <Link href="/pages/meals/share">Share Meal</Link>
      </p>
    </main>
  );
}
