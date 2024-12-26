import Link from "next/link";

export default function BackButton() {
  return (
    <Link
      href="/"
      className="inline-block mb-6 text-yellow-400 hover:text-yellow-300 transition-colors"
    >
      ← Back to Home
    </Link>
  );
}
