import React, { useState } from "react";
import { ImPhone, ImMail, ImLocation } from "react-icons/im";

import { motion } from "framer-motion";
import { transition1 } from "../transitions.js";

const Contact = () => {
  const initialFormState = {
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    eventType: "",
    howHear: "",
    eventDetails: "",
    selectedPackage: "",
    selectedAddons: {
      "Extra Hour": 0,
      "Online Gallery: Printed photos with the personalized template design": false,
      "Online Gallery: Photos taken from camera": false,
    },
  };

  const [formValues, setFormValues] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleAddonChange = (e) => {
    const { name, type, checked, value } = e.target;
    if (type === "checkbox") {
      setFormValues((prevValues) => ({
        ...prevValues,
        selectedAddons: {
          ...prevValues.selectedAddons,
          [name]: checked,
        },
      }));
    } else if (type === "number") {
      const addonCount = parseInt(value);
      setFormValues((prevValues) => ({
        ...prevValues,
        selectedAddons: {
          ...prevValues.selectedAddons,
          [name]: addonCount,
        },
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic here (e.g., sending data to Formspree)
    console.log(formValues);

    // Reset the form after successful submission
    resetForm();
  };

  const resetForm = () => {
    setFormValues(initialFormState);
  };

  const getAddonPrice = (addon) => {
    if (addon === "Extra Hour") return 100;
    if (addon === "Online Gallery: Photos taken from camera") return 20;
    if (
      addon ===
      "Online Gallery: Printed photos with the personalized template design"
    )
      return 20;
    return 0;
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="section pt-32"
    >
      <div className="container mx-auto flex items-center justify-center">
        <div className="max-w-lg w-full">
          <motion.h1
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: "-50%" }}
            transition={transition1}
            className="h1 text-6xl text-center"
          >
            Contact me
          </motion.h1>
          {/* Contact me! */}
          <div className="flex items-center justify-center">
            <a href="tel:+12042271224">
              <ImPhone className="cursor-pointer" />
            </a>
            <a href="tel:+12042271224" className="ml-6">
              (204) 227-1224
            </a>
          </div>
          <div className="flex items-center justify-center">
            <a href="mailto:rbmphotobooth@gmail.com" rel="noopener noreferrer">
              <ImMail className="cursor-pointer" />
            </a>
            <a href="mailto:rbmphotobooth@gmail.com" className="ml-4">
              rbmphotobooth@gmail.com
            </a>
          </div>
          <div className="flex items-center justify-center">
            <a
              href="https://goo.gl/maps/wjUAfDxsjcnQjmwS7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImLocation className="cursor-pointer" />
            </a>
            <a
              href="https://goo.gl/maps/wjUAfDxsjcnQjmwS7"
              target="_blank"
              className="ml-4"
              rel="noopener noreferrer"
            >
              Fort Richmond Area, Winnipeg, MB
            </a>
          </div>
          {/* The form */}
          <form action="https://formspree.io/f/mbjvlbvp" method="POST">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="mt-1 px-4 py-2 block w-full border rounded-md focus:ring-accent focus:border-accent"
                value={formValues.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email *
              </label>
              <input
                type="email"
                name="Email"
                id="email"
                required
                className="mt-1 px-4 py-2 block w-full border rounded-md focus:ring-accent focus:border-accent"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                name="Phone Number"
                id="phone"
                className="mt-1 px-4 py-2 block w-full border rounded-md focus:ring-accent focus:border-accent"
                placeholder="E.g. 541 444 0755"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="event-date"
                className="block text-sm font-medium text-gray-700"
              >
                Event Date
              </label>
              <input
                type="date"
                name="Event Date"
                id="event-date"
                className="mt-1 px-4 py-2 block w-full border rounded-md focus:ring-accent focus:border-accent"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="event-type"
                className="block text-sm font-medium text-gray-700"
              >
                What type of event are you looking for?
              </label>
              <select
                name="Event Type"
                id="event-type"
                className="mt-1 px-4 py-2 block w-full border rounded-md focus:ring-accent focus:border-accent"
              >
                <option value="">Select an option</option>
                <option value="Wedding">Wedding</option>
                <option value="Birthday">Birthday</option>
                <option value="Corporate Event">Corporate Event</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Baptism">Baptism</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="how-hear"
                className="block text-sm font-medium text-gray-700"
              >
                How did you hear about us?
              </label>
              <select
                name="How Did You Hear About Us?"
                id="how-hear"
                className="mt-1 px-4 py-2 block w-full border rounded-md focus:ring-accent focus:border-accent"
              >
                <option value="">Select an option</option>
                <option value="Social Media">Social Media</option>
                <option value="Word of Mouth">Word of Mouth</option>
                <option value="Search Engine">Search Engine</option>
                <option value="Advertisement">Advertisement</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="selectedPackage"
                className="block text-sm font-medium text-gray-700"
              >
                Select a Pricing Package *
              </label>
              <select
                name="selectedPackage"
                id="selectedPackage"
                required
                className="mt-1 px-4 py-2 block w-full border rounded-md focus:ring-accent focus:border-accent"
                onChange={handleChange}
                value={formValues.selectedPackage}
              >
                <option value="">Select a package</option>
                <option value="A">Package A - $279 + TAX</option>
                <option value="B">Package B - $519 + TAX</option>
                <option value="C">Package C - $759 + TAX</option>
                <option value="undecided">Undecided</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="selectedAddons"
                className="block text-sm font-medium text-gray-700"
              >
                Select Add-ons
              </label>
              <div className="space-y-2 flex flex-col">
                {Object.entries(formValues.selectedAddons).map(
                  ([addon, value]) => (
                    <label key={addon} className="inline-flex items-center">
                      {addon === "Extra Hour" ? (
                        <>
                          <input
                            type="number"
                            name={addon}
                            value={value}
                            className="form-input h-10 w-20 border rounded mr-2 focus:border-black focus:shadow-outline-black"
                            onChange={handleAddonChange}
                            min="0"
                          />
                          <span className="text-gray-600 ml-2">
                            {addon} - Price: ${getAddonPrice(addon)}
                          </span>
                        </>
                      ) : (
                        <>
                          <input
                            type="checkbox"
                            name={addon}
                            checked={value}
                            className="form-checkbox h-5 w-5 text-accent border-gray-300 rounded mr-2 focus:border-black focus:shadow-outline-black"
                            onChange={handleAddonChange}
                          />
                          <span className="text-gray-600 ml-2">
                            {addon} - Price: ${getAddonPrice(addon)}
                          </span>
                        </>
                      )}
                    </label>
                  )
                )}
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="event-details"
                className="block text-sm font-medium text-gray-700"
              >
                Tell me more about your event!
              </label>
              <textarea
                name="eventDetails"
                id="event-details"
                rows={4}
                className="mt-1 px-4 py-2 block w-full border rounded-md focus:ring-accent focus:border-accent"
                placeholder="What do I need to know? Is it outside the city?"
                value={formValues.eventDetails}
                onChange={handleChange}
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
