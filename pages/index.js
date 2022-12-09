import MainHead from "../components/head/main-head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <MainHead />
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        Hidden Gems in KL
      </h1>
      <Link href="/vivekananda-ashrama">
        <p className="font-medium text-blue-600 hover:underline dark:text-blue-500">
          Vivekananda Ashrama
        </p>
      </Link>
      <Link href="/rumah-tangsi">
        <p className="font-medium text-blue-600 hover:underline dark:text-blue-500">
          Rumah Tangsi
        </p>
      </Link>
    </>
  );
}
