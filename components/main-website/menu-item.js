import Link from "next/link";

export default function MenuItem({ title, link }) {
  return (
    <Link href={link}>
      <div className="cursor-pointer font-sans text-xl font-bold text-white hover:text-secondary-300">
        {title}
      </div>
    </Link>
  );
}
