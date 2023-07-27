import React, { useState } from "react";

const Portfolio = () => {
  return (
    <section className="section pt-32 h-screen overflow-hidden">
      <h1 className="h1 text-6xl text-center">Portfolio</h1>
      <iframe
        title="pic-time integration"
        frameborder="0"
        id="pictimeintegration"
        src="https://rbmphotobooth.pic-time.com/client?headless=true"
        className="w-full h-full"
      ></iframe>
    </section>
  );
};

export default Portfolio;
