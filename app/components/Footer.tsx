import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="max-w-360 m-auto px-20 py-16 ">
      <div className="flex flex-row justify-between pb-12 border-b border-black/10">
        <div className="flex flex-col  ">
          <h3
            className="text-2xl font-bold text-black mb-4"
            style={{ fontFamily: "Lobster, cursive" }}
          >
            Foodieland.
          </h3>

          <p className="text-black/60 max-w-md mx-auto mb-8">
            Lorem ipsum dolor sit amet, consecteturipiscing elit,
          </p>
        </div>

        <div className="flex gap-8 mb-12 font-medium">
          <Link
            href="/recipes"
            className="text-black text-[16px] hover:text-black/80 transition"
          >
            Recipes
          </Link>
          <Link
            href="/blog"
            className="text-black text-[16px] hover:text-black/80 transition"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-black text-[16px] hover:text-black/80  transition"
          >
            Contact
          </Link>
          <Link
            href="/about"
            className="text-black text-[16px] hover:text-black/80  transition"
          >
            About us
          </Link>
        </div>
      </div>
      <p className="text-black/40 text-[18px] mt-12 text-center">
        © 2020 Flowbase. Powered by Webflow
      </p>
      <div className="flex justify-end">
        <Image
          src="/social.png"
          alt="Social Media"
          width={140}
          height={24}
          className="cursor-pointer -mt-7"
        />
      </div>
    </footer>
  );
}
