import React, { useState } from "react";
import avatar1 from "../assets/images/avatar1.png";
import avatar2 from "../assets/images/avatar2.png";
import avatar3 from "../assets/images/avatar3.png";
import Upqoute from "../assets/images/up_quote.png";
import Downquote from "../assets/images/down_quote.png";

const testimonials = [
  {
    name: "John Doe",
    title: "Architect",
    avatar: avatar1,
    text: "Gorem ipsum dolor sit amet, cons etet ur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  },
  {
    name: "Tim Ugo",
    title: "CEO, Tee Ventures",
    avatar: avatar2,
    text: "Gorem ipsum dolor sit amet, cons etet ur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  },
  {
    name: "Jane Doe",
    title: "Fashion designer",
    avatar: avatar3,
    text: "Gorem ipsum dolor sit amet, cons etet ur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#001A0A]">
          What Our Clients Say
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          See why businesses and individuals trust MBD for their local
          deliveries.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="
  p-6 rounded-lg border bg-white text-left shadow-sm
  flex flex-col justify-between
  md:min-h-[120px] lg:min-h-[30px]
"
            >
              {/* avatar + name */}
              <div>
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={`${t.name} avatar`}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{t.name}</div>
                    <div className="font-poppins text-[#00401A]">{t.title}</div>
                  </div>
                </div>

                <hr className="my-4 border-t border-gray-100" />

                {/* QUOTE + TEXT LAYOUT */}

                <div className="mt-2">
                  {/* Opening quote on its own line */}
                  <div className="w-8 mb-2">
                    <img
                      src={Upqoute}
                      alt="Opening quote"
                      className="w-6 h-6"
                    />
                  </div>

                  {/* Text starts below */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {t.text}
                  </p>
                </div>
              </div>

              {/* Bottom right quote image */}
              <div className="flex justify-end mt-4">
                <img src={Downquote} alt="quote" className="w-6 h-6" />
              </div>
            </div>
          ))}
        </div>

        {/* pagination dots (5 total like mock) */}
        <div className="mt-8 flex items-center justify-center gap-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i % testimonials.length)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`w-3 h-3 rounded-full transition-all ${
                i === index % 5
                  ? "bg-[#00401A] scale-110"
                  : "border-2 border-gray-300 bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
