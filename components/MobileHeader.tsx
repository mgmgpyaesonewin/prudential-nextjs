import React from "react";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";
import logo from "../public/assests/logo.png";

const MobileHeader: React.FC = () => {
  return (
    <div className="tw-block md:tw-block lg:tw-hidden xl:tw-hidden">
      <header className="tw-flex tw-items-center tw-justify-between tw-bg-white tw-px-4 tw-py-2 tw-shadow-lg">
        <div>
          <Image src={logo} alt="logo" width={76} height={48} />
        </div>
        <div className="tw-block">
          <LanguageSwitcher />
        </div>
      </header>
    </div>
  );
};

export default MobileHeader;
