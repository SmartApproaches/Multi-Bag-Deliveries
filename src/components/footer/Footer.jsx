import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#001A0A] text-white mt-12">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-28">
          <div className="max-w-sm bg-[#00401A]/20 rounded-xl p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center text-base font-semibold">MB</div>
              <div className="font-semibold">MultiBag Deliveries</div>
            </div>
            <p className="text-sm leading-relaxed text-gray-300 mt-4">
              Jorem ipsum dolor sit amet, consectet ur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-12 flex-1">
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold text-base">Company</h4>
              <a href="#" className="text-sm text-gray-300 hover:text-white">Services</a>
              <a href="#" className="text-sm text-gray-300 hover:text-white">About Us</a>
              <a href="#" className="text-sm text-gray-300 hover:text-white">FAQs</a>
              <a href="#" className="text-sm text-gray-300 hover:text-white">Track my parcel</a>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-base">Contact Us</h4>

              <div className="flex items-center gap-3 text-sm text-gray-300">
                <svg className="w-4 h-4 text-[#FFA62B]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C8 2 4.4 4.4 3 8c1.4 3.6 5 7 9 12 4-5 7.6-8.4 9-12-1.4-3.6-5-6-9-6z" fill="#FFA62B"/></svg>
                Ghana
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-300">
                <svg className="w-4 h-4 text-[#FFA62B]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4v16h16V4zm-7 11h-2v-2h2v2zm0-4h-2V7h2v4z" fill="#FFA62B"/></svg>
                help@multibag.com
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-300">
                <svg className="w-4 h-4 text-[#FFA62B]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14h-2v-2h2v2zm0-4h-2V6h2v6z" fill="#FFA62B"/></svg>
                Mon - Fri 8:00am - 6:00pm
              </div>

              <div className="flex items-center gap-4 mt-2">
                <a href="#" aria-label="Facebook" className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center">
                  <svg className="w-3 h-3 text-gray-300" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.1v-2.9h2.1v-2.2c0-2.1 1.2-3.3 3-3.3.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v1.9h2.3l-.4 2.9h-1.9v7A10 10 0 0022 12z"/></svg>
                </a>
                <a href="#" aria-label="Instagram" className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center">
                  <svg className="w-3 h-3 text-gray-300" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.2A3 3 0 1015 11a3 3 0 00-3-2.8zM18 6.5a1 1 0 110 2 1 1 0 010-2z"/></svg>
                </a>
                <a href="#" aria-label="X" className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center">
                  <svg className="w-3 h-3 text-gray-300" viewBox="0 0 24 24" fill="currentColor"><path d="M18 7L7 18M7 7l11 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 text-center py-4 text-sm text-gray-400">
        © MultiBag 2024, All Right Reserved.
      </div>
    </footer>
  );
}
