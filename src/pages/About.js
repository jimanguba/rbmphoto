import React from "react";

import AboutImg from "../img/about/about.png";

import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="section pt-32">
      <div className="container mx-auto h-full relative">
        {/* txt and img */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-x-24 text-center lg:text-left">
          {/* img */}
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden">
            <img src={AboutImg} alt="" />
          </div>
          {/* txt */}
          <div className="flex-1 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start">
            <h1 className="h1 text-6xl text-center">Who We Are</h1>
            <p>
              Welcome to RBM Photo Booth, your trusted source for delightful
              photo booth rentals in Winnipeg, MB, and the surrounding areas!
              <br />
              <br />
              As a family-run business, we truly understand the value of
              treasured moments and the happiness they bring. Our friendly team
              consists of a husband-and-wife duo, working together with a shared
              passion to bring smiles and laughter to your special occasions.
              <br />
              <br />
              Located right in the heart of Winnipeg, we take great pride in
              providing personalized photo booth experiences for weddings,
              birthdays, and all events worth celebrating!
              <br />
              <br />
              Our mission is simple – to make your event unforgettable and
              fun-filled! Whether you're hosting an indoor gathering or
              venturing beyond the city, we're thrilled to be part of your
              journey.
              <br />
              <br />
              With over 20 years of photography experience and 8 years as photo
              booth operators, we have honed our craft to capture those
              picture-perfect moments. Our extensive collection of props and
              backdrops ensures that everyone can let loose and strike their
              best poses.
              <br />
              <br />
              At RBM Photo Booth, we are a down-to-earth team that genuinely
              cares about making your celebration uniquely yours. We'll work
              closely with you to match your style and preferences, ensuring
              your photo booth experience is one-of-a-kind and reflects your
              personality.
              <br />
              <br />
              So, let's create some wonderful memories together! Reach out to us
              today, and let the laughter and merriment begin!
            </p>
            <br />
            <br />
            <Link to={"/rbmphoto/portfolio"} className="btn">
              Photo booth pics
            </Link>{" "}
            <br />
            <a href="https://wordpress.org/" className="btn">
              Blog
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
