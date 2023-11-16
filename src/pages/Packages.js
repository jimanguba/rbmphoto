import React from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { transition1 } from "../transitions.js";

import GuestBook from "../img/packages/audio-guestbook.jpg";
const Pricing = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="section pt-32"
    >
      <motion.h1
        initial={{ opacity: 0, y: "-50%" }}
        animate={{ opacity: 1, y: "0%" }}
        exit={{ opacity: 0, y: "-50%" }}
        transition={transition1}
        className="h1 text-6xl text-center"
      >
        Packages
      </motion.h1>
      {/* Packages!!! */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 mt-10">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-primary font-bold mb-4 text-blue-600">
            Package A
          </h2>
          <p className="text-gray-800">
            Includes:
            <ul className="list-disc list-inside">
              <li>2 hours of operation</li>
              <li>Up to one 4x6 or two 2x6 prints per photo session</li>
              <li>Unlimited photo sessions with max. 120 prints</li>
              <li>Customized photo booth template</li>
              <li>Booth Attendant included</li>
              <li>Instant digital photo copy after each photo session!</li>
              <li>Premium props</li>
            </ul>
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-primary font-bold mb-4 text-green-600">
            Package B
          </h2>
          <p className="text-gray-800">
            Includes:
            <ul className="list-disc list-inside">
              <li>3 hours of operation</li>
              <li>Up to three 4x6 or six 2x6 prints per photo session</li>
              <li>Unlimited photo sessions and prints</li>
              <li>Free audio guest book for 3 hours</li>
              <li>Customized photo booth template</li>
              <li>Booth Attendant included</li>
              <li>Instant digital photo copy after each photo session!</li>
              <li>Choose your backdrop</li>
              <li>Premium props</li>
            </ul>
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-primary font-bold mb-4 text-purple-600">
            Package C
          </h2>
          <p className="text-gray-800">
            Includes:
            <ul className="list-disc list-inside">
              <li>4 hours of operation</li>
              <li>Up to five 4x6 or ten 2x6 prints per photo session</li>
              <li>Unlimited photo sessions and prints</li>
              <li>Free audio guest book for 4 hours</li>
              <li>Customized photo booth template</li>
              <li>Booth Attendant included</li>
              <li>Instant digital photo copy after each photo session!</li>
              <li>Choose your backdrop</li>
              <li>Premium props</li>
              <li>Remove rbmphotobooth.ca from your photo template</li>
            </ul>
          </p>
        </div>
      </div>

      {/* Add-ons */}
      <h1 className="h1 text-4xl text-center mt-16">Add-ons</h1>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 mt-10">
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-center">
  <div className="mb-4 md:mb-0 md:mr-4">
    <img
      src={GuestBook}
      alt="Description of your image"
      width="100%" // Set the width to 100% for responsiveness
      className="rounded"
    />
  </div>
  <div>
    <h2 className="text-2xl font-primary font-bold mb-4 text-grey">
      Add-on: Audio Guest Book
    </h2>
    <p className="text-gray-800">
      Your guests will have the opportunity to share their voices by picking up
      the phone and leaving heartfelt recordings for you. Following the event,
      we'll send you a downloadable link containing all the memorable messages.
      Get ready to experience a mix of laughter and tears as you listen to the
      touching and humorous moments captured in these recordings.
    </p>

    <p className="text-gray-600 mt-4 text-xl font-bold">Price: $120</p>
  </div>
</div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-primary font-bold mb-4 text-grey">
            Add-on: Extended Fun
          </h2>
          <p className="text-gray-800">
            Keep the celebration going with our Extended Fun add-on! Treat your
            guests to an additional hour of photo booth joy, capturing more
            precious memories.
          </p>
          <p className="text-gray-600 mt-4 text-xl font-bold">Price: $100</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-primary font-bold mb-4 text-grey">
            Add-on: Outside Winnipeg
          </h2>
          <p className="text-gray-800">
            Planning an event outside of Winnipeg? Don't worry, we've got you
            covered! With our Outside Winnipeg add-on, we extend our services to
            reach your destination.
            <p className="text-gray-600 mt-4 text-xl font-bold">Price:</p>
            <ul className="list-disc list-inside">
              <li>Within Winnipeg: No additional charge</li>
              <li>
                Outside Winnipeg: <b>+$0.75/km</b>
              </li>
            </ul>
          </p>
        </div>

        {/* <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-primary font-bold mb-4 text-grey">
            Add-on: Online Gallery
          </h2>
          <p className="text-gray-800">
            Receive a complete online gallery after your event, showcasing all
            the photos taken directly from the photobooth camera and/or printed
            photos with the custom template. Easily access and share the full
            set of photos, capturing the essence of your event.
            <br />
            Optionally, you can include password protection for your online
            gallery.
            <p className="text-gray-600 mt-4 text-xl font-bold">Price:</p>
            <ul className="list-disc list-inside">
              <li>
                Photos taken from camera: <b>+$20</b>
              </li>
              <li>
                Printed photos with the personalized template design:{" "}
                <b>+$20</b>
              </li>
            </ul>
          </p>
        </div> */}
      </div>
      <Link to={"/contact"} className="btn mb-[30px]">
        get a quote!
      </Link>
    </motion.section>
  );
};

export default Pricing;
