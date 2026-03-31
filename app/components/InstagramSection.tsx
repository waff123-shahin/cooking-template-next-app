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
    <div className="bg-linear-to-br from-[#E7F9FD]/0 to-[#E7F9FD]/80 w-full">
      <div className="max-w-360 m-auto px-20 py-16">
        <div className="text-center mb-12">
          <h2 className="text-[48px] font-bold text-black mb-4">
            Check out @foodieland on Instagram
          </h2>
          <p className="text-black/60 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliquet enim ad
            minim
          </p>
        </div>

        <div className="flex flex-wrap mt-20 justify-center gap-6 p-8  ">
          {instagramPosts.map((post) => (
            <Link
              key={post.id}
              href="https://instagram.com/foodieland"
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer"
              style={{ width: "285px", height: "450px" }}
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src={post.image}
                  alt="Instagram post"
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <img
                    src="/instagram-icon.png"
                    alt="Instagram"
                    className="w-10 h-10"
                  />
                </div>
              </div>
            </Link>
          ))}

          <div className="flex justify-center items-center w-full mt-20 mb-20">
            <button className="bg-black text-white px-8 py-3 w- h-15 rounded-full hover:bg-black/80 transition transform hover:scale-105 flex items-center gap-2">
              Follow @foodieland
              <img
                src="/instagram-icon.png"
                alt="Instagram"
                className="w-5 h-5"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
