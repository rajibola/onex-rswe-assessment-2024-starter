"use client";
import EVFYLogo from "@/assets/icons/evfy-logo.svg";
import Image from "next/image";

import { TextNavigationDropDown } from "./text-nav-dropdown";
import Link from "next/link";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
];

export const PageHeader = () => {
  return (
    <header className="h-16 px-[120px] flex items-center justify-between sticky top-0 bg-white z-30">
      <div className="flex gap-8 items-center">
        <Image src={EVFYLogo} alt="EVFY logo" />
        <TextNavigationDropDown title="Find EV Cars" data={components} />
        <TextNavigationDropDown title="EV Guides" data={components} />
      </div>
      <div className="flex gap-8 items-center">
        <TextNavigationDropDown title="Find EV Cars" data={components} />
        <Link className="text-subtitle2" href={"#"}>
          Log In / Sign Up
        </Link>
      </div>
    </header>
  );
};
