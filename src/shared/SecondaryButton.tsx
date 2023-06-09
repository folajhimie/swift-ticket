import React from "react";
// import AnchorLink from "react-anchor-link-smooth-scroll";
// import { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  // setSelectedPage: (value: SelectedPage) => void;
};

const SecondaryButton = ({ children }: Props) => {
  return (
    <div
      className="cursor rounded-md bg-[#61297F] font-medium px-8 py-2 text-white sm:text-xs sm:py-3 sm:px-6 lg:text-xs lg:w-fit xl:w-fit"
    >
      {children}
    </div>
  );
};

export default SecondaryButton;
