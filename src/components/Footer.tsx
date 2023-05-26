import { FiPhone, FiMail } from "react-icons/fi";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { IoShareSocialOutline } from "react-icons/io5";

export const Footer = () => {
  return (
    <section id="footer" className="flex flex-col items-center lg:p-8">
      <p className="text-3xl tett-bold my-8 font-bold">Contacts</p>
      <div className="flex w-full justify-center flex-wrap gap-2 md:gap-0">
        <div className="flex flex-col items-center gap-2 w-full md:w-1/3">
          <div className="flex items-center gap-2">
            <FiMail />
            <p className="font-bold">E-mail</p>
          </div>
          <p className="h-full">eddie.andersson@gmail.com</p>
        </div>
        <div className="flex flex-col items-center gap-2 w-full md:w-1/3">
          <div className="flex items-center gap-2">
            <FiPhone />
            <p className="font-bold">Telephone number</p>
          </div>
          <p className="h-full">073-25344XX</p>
        </div>

        <div className="flex flex-col items-center gap-2 w-full md:w-1/3">
          <div className="flex items-center gap-2">
            <IoShareSocialOutline />
            <p className="font-bold">Social media</p>
          </div>
          <div className="flex gap-2 h-full items-center">
            <BsLinkedin />
            <BsGithub />
          </div>
        </div>
      </div>
    </section>
  );
};
