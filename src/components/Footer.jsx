import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const SocialMediaLinks = () => (
  <div className="px-8 pt-16 bg-[#1A1A19]">
    <div className="flex items-center justify-between border-b-2 pb-8">
      <div className="flex items-center">
        <FaInstagram className="text-white text-2xl mr-4" />
        Instagram
      </div>
      <div className="flex items-center">
        <FaFacebook className="text-white text-2xl mr-4" />
        Facebook
      </div>
      <div className="flex items-center">
        <FaLinkedin className="text-white text-2xl mr-4" />
        LinkedIn
      </div>
    </div>{" "}
    <div className="grid grid-cols-4 gap-8 px-8 py-16 bg-[#1A1A19] text-white">
      <div>
        <a href="#" className="text-lg">
          <img
            className="w-16"
            src="https://cdn.prod.website-files.com/66964d12f0212962622e6bd4/66975597026532de9a7a460b_eventplan.svg"
            alt=""
          />
        </a>
        <div className="mt-4">
          <h2>Address</h2>
          <h2>Number</h2>
        </div>
      </div>
      <div>
        <a href="#pages" className="text-2xl font-semibold">
          Pages
        </a>
        <ul className="pt-4">
          <li>
            <a href="#home" className="text-lg">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-lg">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="text-lg">
              Services
            </a>
          </li>
        </ul>
      </div>
      <div>
        <a href="#utility-pages" className="text-2xl font-semibold">
          Utility Pages
        </a>
        <ul className="pt-4">
          <li>
            <a href="#privacy" className="text-lg">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#terms" className="text-lg">
              Terms of Service
            </a>
          </li>
        </ul>
      </div>
      <div>
        <a
          href="mailto:contact@example.com"
          className="text-2xl font-semibold "
        >
          Contact us on
        </a>
        <ul className="pt-4">
          <li>
            <a href="mailto:contact@example.com" className="text-lg">
              Email
            </a>
          </li>
          <li>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg"
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default SocialMediaLinks;
