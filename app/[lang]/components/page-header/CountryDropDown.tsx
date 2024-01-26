"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/app/[lang]/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import React from "react";
import USA from "@/assets/icons/usa.png";
import China from "@/assets/icons/china.png";
import India from "@/assets/icons/india.png";
import Germany from "@/assets/icons/germany.png";
import Image, { StaticImageData } from "next/image";
import { usePathname } from "next/navigation";
import { languages } from "@/lib/i18n";

const countries: { [x: string]: StaticImageData } = {
  en: USA,
  de: Germany,
  zh: China,
  "hi-IN": India,
};

export const CountryDropDown = () => {
  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const currentLocale = pathName.split("/")[1];

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="px-2 py-0">
            <Image
              src={countries[currentLocale]}
              alt={"countryName"}
              width={28}
              height={18}
            />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 py-4 px-4 w-fit">
              {languages.map((locale) => (
                <ListItem
                  className="p-0 w-[70px] h-10 flex items-center justify-center m-0 overflow-hidden"
                  key={locale}
                  href={redirectedPathName(locale)}
                >
                  <div className="flex gap-1 items-center uppercase text-overline text-primaryText">
                    <Image
                      src={countries[locale]}
                      alt={locale}
                      width={28}
                      height={18}
                    />
                    <p>{locale}</p>
                  </div>
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
