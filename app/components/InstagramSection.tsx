"use client";

import Image from "next/image";
import Link from "next/link";

export default function InstagramSection() {
  const instagramPosts = [
    { id: 1, image: "/insta-1.png" },
    { id: 2, image: "/insta-2.png" },
    { id: 3, image: "/insta-3.png" },
    { id: 4, image: "/insta-4.png" },
  ];

  return (
    <div className="bg-gradient-to-br from-[#E7F9FD]/0 to-[#E7F9FD]/80 w-full">
      <div className="max-w-360 mx-auto px-4 sm:px-8 md:px-20 py-8 sm:py-12 md:py-16">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold text-black mb-3 sm:mb-4">
            Check out @foodieland on Instagram
          </h2>
          <p className="text-black/60 text-sm sm:text-base max-w-2xl mx-auto px-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliquet enim ad
            minim
          </p>
        </div>

        {/* Instagram Grid - Single column on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12 md:mt-16 lg:mt-20">
          {instagramPosts.map((post) => (
            <Link
              key={post.id}
              href="https://instagram.com/foodieland"
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer w-full"
            >
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden">
                <Image
                  src={post.image}
                  alt={`Instagram post ${post.id}`}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 25vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <Image
                    src="/instagram-icon.png"
                    alt="Instagram"
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Follow Button */}
        <div className="flex justify-center items-center w-full mt-10 sm:mt-12 md:mt-16 lg:mt-20">
          <button className="bg-black text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-black/80 transition transform hover:scale-105 flex items-center gap-2 text-sm sm:text-base">
            Follow @foodieland
            <Image
              src="/instagram-icon.png"
              alt="Instagram"
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
