"use client";

import AppLogo from "@/components/ui/app-logo/app-logo";
import { cn } from "@/lib/utils";
import { navRoutes } from "./route";
import BaseButton from "@/components/ui/buttons/base-button";
import MobileNavMenu from "./mobile-nav-menu";
import { useEffect, useState } from "react";

interface HeaderProps {
  where: "home" | "others";
}

export default function Header({ where = "home" }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "w-full overflow-hidden px-4",
        where === "home"
          ? "home-header"
          : "border-Gray-25 sticky top-0 z-50 border-b py-4 lg:py-0",
        isScrolled ? "bg-white !pb-2" : "",
      )}
    >
      <div className="flex-between lg:pl-14">
        <div
          className={cn(
            "flex-start gap-16",
            !isScrolled && where === "home" ? "lg:my-8" : "lg:my-4",
          )}
        >
          <AppLogo />
          <nav className="hidden items-center space-x-8 lg:flex">
            {navRoutes.map((link, idx) => (
              <a
                key={idx}
                href={link.path}
                className={cn(
                  "hover:text-Purple-500 text-Gray-900 text-base font-medium transition-colors duration-300",
                )}
              >
                {link.text}
              </a>
            ))}
          </nav>
        </div>
        <div className="relative hidden h-20 w-[35%] items-center justify-end space-x-4 rounded-bl-2xl bg-white pr-12 lg:flex">
          <BaseButton
            href="#"
            className="!text-Gray-900 border-Gray-50 border !bg-white px-8 !text-base"
          >
            Log In
          </BaseButton>
          <BaseButton href="#" className="px-8 !text-base">
            Own a Bloc
          </BaseButton>
        </div>
        <MobileNavMenu />
      </div>
    </header>
  );
}
