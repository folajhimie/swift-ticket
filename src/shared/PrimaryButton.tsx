import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
};

function PrimaryButton({ children, setSelectedPage }: Props) {
    return (
        <AnchorLink
          className="rounded-md bg-white border font-semibold px-8 py-2 text-[#61297F] sm:text-xs sm:py-3 sm:px-6 mr-4 lg:text-xs lg:w-fit xl:w-fit"
          onClick={() => setSelectedPage(SelectedPage.ContactUs)}
          href={`#${SelectedPage.ContactUs}`}
        >
          {children}
        </AnchorLink>
      );
}

export default PrimaryButton