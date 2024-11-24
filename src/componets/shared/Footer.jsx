const Footer = () => {
  return (
    <div className="w-[1440px] mx-auto bg-base-200">
      <div className="w-[1140px] mx-auto">
        <footer className="footer bg-base-200 text-base-content p-10">
          <nav className="gap-8">
            <h6 className="  text-black text-[24px] font-bold">Funiro.</h6>
            <p className="font-normal text-base ">
              400 University Drive Suite 200 Coral <br /> Gables, <br />
              FL 33134 USA
            </p>
          </nav>
          <nav className="gap-8">
            <h6 className="font-medium text-base text-[#9F9F9F]">Company</h6>
            <a className="link link-hover font-medium text-base text-black ">
              Home
            </a>
            <a className="link link-hover font-medium text-base text-black ">
              Shop
            </a>
            <a className="link link-hover font-medium text-base text-black ">
              About
            </a>
            <a className="link link-hover font-medium text-base text-black ">
              Contact
            </a>
          </nav>
          <nav className="gap-8">
            <h6 className="font-medium text-base text-[#9F9F9F]">Help</h6>
            <a className="link link-hover font-medium text-base text-black ">
              Payment Options
            </a>
            <a className="link link-hover font-medium text-base text-black ">
              Returns
            </a>
            <a className="link link-hover font-medium text-base text-black ">
              Privacy Policies
            </a>
          </nav>
          <nav className="gap-8">
            <h6>Newsletter</h6>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                class="email-input"
                required
              />
              <h6 className="underline font-medium text-[14px]">Subscribe</h6>
            </div>
          </nav>
        </footer>
        <footer className="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4">
          <aside className="grid-flow-col items-center">
            <p>2024 furino. All rights reverved</p>
          </aside>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
