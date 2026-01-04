import React, { useState } from 'react';
import avatar1 from '../../assets/images/avatar1.png';
import avatar2 from '../../assets/images/avatar2.png';
import avatar3 from '../../assets/images/avatar3.png';

const testimonials = [
  {
    name: 'John Doe',
    title: 'Architect',
    avatar: avatar1,
    text: 'Gorem ipsum dolor sit amet, cons etet ur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
  },
  {
    name: 'Tim Ugo',
    title: 'CEO, Tee Ventures',
    avatar: avatar2,
    text: 'Gorem ipsum dolor sit amet, cons etet ur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
  },
  {
    name: 'Jane Doe',
    title: 'Fashion designer',
    avatar: avatar3,
    text: 'Gorem ipsum dolor sit amet, cons etet ur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#0a4d26]">What Our Clients Say</h2>
        <p className="mt-2 text-sm text-gray-500">See why businesses and individuals trust MBD for their local deliveries.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className={`relative p-6 rounded-lg border bg-white text-left shadow-sm ${i === index ? 'ring-2 ring-[#00401A]/10' : ''}`}>
              {/* avatar + name */}
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={`${t.name} avatar`} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <div className="font-semibold text-gray-900">{t.name}</div>
                  <div className="text-xs text-[#00401A]">{t.title}</div>
                </div>
              </div>

              <hr className="my-4 border-t border-gray-100" />

              {/* opening quote */}
              <svg className="w-5 h-5 text-[#FFA62B] absolute top-20 left-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.17 6A4.17 4.17 0 0 0 3 10.17v1.08A4.17 4.17 0 0 0 7.17 15.42H8.5V12H7.17A2.17 2.17 0 0 1 5 9.83V9.5A2.17 2.17 0 0 1 7.17 7.33H8.5V6H7.17z" fill="#FFA62B" />
              </svg>

              <p className="text-sm text-gray-600 mt-2">{t.text}</p>

              {/* closing quote */}
              <svg className="w-5 h-5 text-[#FFA62B] absolute bottom-4 right-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.83 18A4.17 4.17 0 0 0 21 13.83v-1.08A4.17 4.17 0 0 0 16.83 8.58H15.5v3.42h1.33A2.17 2.17 0 0 1 19 13.83v.33A2.17 2.17 0 0 1 16.83 16H15.5V18h1.33z" fill="#FFA62B" />
              </svg>
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
              className={`w-3 h-3 rounded-full transition-all ${i === (index % 5) ? 'bg-[#00401A] scale-110' : 'border-2 border-gray-300 bg-white'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
