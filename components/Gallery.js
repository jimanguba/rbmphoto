// pages/gallery.js
"use client";

import React from "react";

const GalleryPage = () => {
  return (
    <section id="gallery" className="bg-gray-50 py-20 px-6 overflow-hidden">
      {/* <div className="w-full mx-auto text-center"> */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Photo Booth Gallery
        </h1>
        <p className="text-gray-600 mb-10 text-sm md:text-base">
          Explore the fun moments we've helped capture.
        </p>

        <div className="w-full h-[800px]">
          {/* <div className="aspect-video sm:aspect-[16/9] rounded-xl overflow-hidden shadow-lg border border-gray-200"> */}
            <iframe
              src="https://rbmphotobooth.pic-time.com/client?headless=true"
              className="w-full h-full"
              frameBorder="0"
              allowFullScreen
              title="Photo Booth Gallery"
            ></iframe>
          {/* </div> */}
        </div>
      {/* </div> */}
    </section>
  );
};

export default GalleryPage;
