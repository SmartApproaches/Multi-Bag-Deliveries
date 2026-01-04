import React, { useState } from 'react';

const testimonials = [
  {
    name: 'John Doe',
    title: 'Architect',
    text: 'Gorem ipsum dolor sit amet, cons etet ur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
  },
  {
    name: 'Tim Ugo',
    title: 'CEO, Tee Ventures',
    text: 'Gorem ipsum dolor sit amet, cons etet ur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
  },
  {
    name: 'Jane Doe',
    title: 'Fashion designer',
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
            <div key={i} className={`p-6 rounded-lg border bg-white text-left shadow-sm ${i === index ? 'ring-2 ring-[#00401A]/10' : ''}`}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold text-gray-700">{t.name.split(' ').map(n=>n[0]).slice(0,2).join('')}</div>
                <div>
                  <div className="font-semibold text-gray-900">{t.name}</div>
                  <div className="text-xs text-[#00401A]">{t.title}</div>
                </div>
              </div>

              <hr className="my-4 border-t border-gray-100" />

              <p className="text-sm text-gray-600">“{t.text}”</p>
            </div>
          ))}
        </div>

        {/* pagination dots */}
        <div className="mt-8 flex items-center justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`w-3 h-3 rounded-full transition-colors ${i === index ? 'bg-[#00401A]' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
