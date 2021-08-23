import logo from "asset/svg/logo.svg";
import arrow from "asset/svg/arrow.svg";

const Navbar = () => {
  return (
    <nav className="container mx-auto flex items-center justify-between py-4">
      <div>
        <img src={logo} alt="logo" />
      </div>

      <ul className="flex justify-end items-center gap-6">
        <li>Home</li>
        <div className="flex gap-1">
          <li>Landings</li>
          <img src={arrow} alt="arrow" />
        </div>
        <div className="flex gap-1">
          <li>Pages</li>
          <img src={arrow} alt="arrow" />
        </div>

        <li>Docs</li>
        <li>Help</li>
        <li>
          <button className="text-denim border-2 py-2 px-5 rounded-lg border-denim">
            Get it now
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
