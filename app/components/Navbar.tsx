import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-white text-black max-w-360 m-auto border-b border-solid border-black/10 ">
      <div className="px-20 py-10 flex justify-between items-center">
        <div>
          <Link href="/">
            <h3
              className="text-2xl cursor-pointer hover:text-gray-600"
              style={{ fontFamily: "Lobster, cursive" }}
            >
              Foodieland.
            </h3>
          </Link>
        </div>
        <div className="flex gap-6 text-[16px]">
          <Link href="/" className="hover:text-gray-600">
            Home
          </Link>
          <Link href="/recipes" className="hover:text-gray-600">
            Recipes
          </Link>
          <Link href="/blog" className="hover:text-gray-600">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-gray-600">
            Contact
          </Link>
          <Link href="/about" className="hover:text-gray-600">
            About us
          </Link>
        </div>
        <div>
          <Image
            src="/social.png"
            alt="Social Media"
            width={140}
            height={24}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
