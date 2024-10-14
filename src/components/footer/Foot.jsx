import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const Foot = () => {
  return (
    <Footer container className=" bg-[#101418] my-10">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="flex items-center gap-5">
            <img className="w-24" src="/logo1.png" alt="Foodies Restaurant Logo" />

            <div>
                <p className="text-[#FFC] md:text-3xl text-lg">Foodies Restaurant</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" className="text-[#FFC]" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-[#FFC]">Flowbite</Footer.Link>
                <Footer.Link href="#" className="text-[#FFC]">Tailwind CSS</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" className="text-[#FFC]" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-[#FFC]">Github</Footer.Link>
                <Footer.Link href="#" className="text-[#FFC]">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" className="text-[#FFC]" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-[#FFC]">Privacy Policy</Footer.Link>
                <Footer.Link href="#" className="text-[#FFC]">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="/" by="Emperal Tech" year={2024} className="text-[#FFC]" />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" className="text-[#FFC]" icon={BsFacebook} />
            <Footer.Icon href="#" className="text-[#FFC]" icon={BsInstagram} />
            <Footer.Icon href="#" className="text-[#FFC]" icon={BsTwitter} />
            <Footer.Icon href="#" className="text-[#FFC]" icon={BsGithub} />
            <Footer.Icon href="#" className="text-[#FFC]" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default Foot;
