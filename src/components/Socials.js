import React from "react";

import { ImFacebook, ImInstagram, ImWordpress } from "react-icons/im";

const Socials = () => {
  return (
    <div className="hidden xl:flex ml-24">
      <ul className="flex gap-x-4">
        <li>
          <a href="https://www.facebook.com/photographyrbm/" target="_blank">
            <ImFacebook />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/rbmbooth/" target="_blank">
            <ImInstagram />
          </a>
        </li>
        <li>
          <a href="https://blogphotobooth.wordpress.com/" target="_blank">
            <ImWordpress />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
