import { GoMail } from "react-icons/go";

export const Footer = () => {
  return (
    <div className="flex justify-around p-8">
      <div className="flex items-center gap-2">
          <GoMail />
        <p>
          E-mail
        </p>
      </div>
      <div>
        <p>Telephone number</p>
      </div>
      <div>
        <p>Social media</p>
      </div>
    </div>
  );
};
