import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-center mt-40 w-[90%] mx-auto">
      <h2 className="text-3xl">Student Special: Discounted rates</h2>
      <h2 className="text-3xl">on tropical getaways!</h2>
      <p className="mt-8">Let’s embody your beautiful ideas together, simplify the</p>
      <p>way you visualize your next big things.</p>
      <div className="grid grid-cols-1 lg:grid-cols-9 gap-2 lg:gap-8 mt-8">
        <div>
          <Link to="/">Privacy Policy</Link>
        </div>
        <div>
          <Link to="/">Terms of Use</Link>
        </div>
        <div>
          <Link to="/">Sales and Refunds</Link>
        </div>
        <div>
          <Link to="/">Legal</Link>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
        <div>
          <Link to="/">Schedules</Link>
        </div>
        <div>
          <Link to="/">Membership</Link>
        </div>
        <div>
          <Link to="/">Pricing</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
