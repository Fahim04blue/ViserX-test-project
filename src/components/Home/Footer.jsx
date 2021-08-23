import logo from "asset/svg/logo.svg";
import rectangle8 from "asset/svg/rectangle8.svg";
import blueheart from "asset/svg/blueheart.svg";

const Footer = () => {
  return (
    <footer className="container mx-auto ">
      <div className="grid grid-cols-5 gap-14 mt-24">
        <div className="flex flex-col gap-10">
          <img className="w-24" src={logo} alt="" />
          <span>Build a modern and creative website with crealand</span>
          <div className="flex gap-3">
            <img src={rectangle8} alt="" />
            <img src={rectangle8} alt="" />
            <img src={rectangle8} alt="" />
            <img src={rectangle8} alt="" />
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <h1 className="footer__heading">Product</h1>
          <ul className="flex flex-col gap-4">
            <li>LandingPage</li>
            <li>Features</li>
            <li>Documentation</li>
            <li>Referral Program</li>
            <li>Pricing</li>
          </ul>
        </div>

        <div className="flex flex-col gap-10">
          <h1 className="footer__heading">Services</h1>
          <ul className="flex flex-col gap-4">
            <li>Documentation</li>
            <li>Design</li>
            <li>Themes</li>
            <li>Illustrations</li>
            <li>UI Kit</li>
          </ul>
        </div>

        <div className="flex flex-col gap-10">
          <h1 className="footer__heading">Company</h1>
          <ul className="flex flex-col gap-4">
            <li>About</li>
            <li>Terms</li>
            <li>Privacy Policy</li>
            <li>Careers</li>
          </ul>
        </div>

        <div className="flex flex-col gap-10">
          <h1 className="footer__heading">More</h1>
          <ul className="flex flex-col gap-4">
            <li>Documentation</li>
            <li>License</li>
            <li>Changelog</li>
          </ul>
        </div>
      </div>

      <div className="mt-20 pb-10 ">
        <div className="flex justify-center">
          <img src={blueheart} alt="" />
        </div>
        <p className="text-center font-semibold text-blueBayoux mt-4">
          Copyright © {new Date().getFullYear()}. Crafted with love.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
