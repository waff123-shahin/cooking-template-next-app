export default function NewsletterSection() {
  return (
    <div className="max-w-360 m-auto px-20 py-16">
      <div
        className="bg-[#E7F9FD] rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
        style={{ height: "442px" }}
      >
        {/* Right Bottom Image */}
        <div className="absolute bottom-0 right-0">
          <img
            src="/rightbottom.png"
            alt="Decoration"
            className="w-auto h-auto"
          />
        </div>

        {/* Left Bottom Image */}
        <div className="absolute bottom-0 left-0">
          <img
            src="/leftbottom.png"
            alt="Decoration"
            className="w-auto h-auto"
          />
        </div>

        {/* Heading */}
        <h2 className="text-[48px] font-bold text-black mb-4">
          Deliciousness to your inbox
        </h2>

        {/* Description */}
        <p className="text-black/60 max-w-2xl mx-auto mb-8 mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliquet enim ad
          minim.
        </p>

        {/* Newsletter Form with Button Inside Input */}
        <div className="flex justify-center mt-16">
          <div className="relative" style={{ width: "480px" }}>
            <input
              type="email"
              placeholder="Your email address..."
              className="w-full px-6 rounded-3xl border border-black/20 focus:outline-none focus:border-black/50 bg-white"
              style={{ height: "80px", paddingRight: "180px" }}
            />
            <button
              className="absolute bg-black text-white rounded-3xl hover:bg-black/80 transition"
              style={{
                right: "10px",
                top: "10px",
                width: "160px",
                height: "60px",
                bottom: "10px",
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
