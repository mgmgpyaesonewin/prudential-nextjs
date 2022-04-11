import Image from "next/image";
import logo from "../public/assests/logo_white.png";

const Sidebar: React.FC = () => {
  return (
    <div className="tw-hidden md:tw-hidden lg:tw-block xl:tw-block lg:tw-w-1/4 ">
      <div className="tw-flex tw-flex-col tw-items-center tw-justify-between tw-bg-primary-500 tw-h-full">
        <div className="tw-my-16">
          <Image src={logo} alt="logo" width={192} height={126} />
        </div>
        <div className="tw-block tw-my-16">
          <ul className="tw-flex tw-list-none">
            <li className="tw-h-4 tw-m-2 tw-rounded-full tw-bg-white tw-w-4"></li>
            <li className="tw-h-4 tw-m-2 tw-rounded-full tw-bg-white tw-w-4"></li>
            <li className="tw-h-4 tw-m-2 tw-rounded-full tw-bg-white tw-w-4"></li>
            <li className="tw-h-4 tw-m-2 tw-rounded-full tw-bg-white tw-w-8"></li>
            <li className="tw-h-4 tw-m-2 tw-rounded-full tw-bg-white tw-w-4"></li>
          </ul>
        </div>
      </div>
    </div>
  )
};

export default Sidebar;
