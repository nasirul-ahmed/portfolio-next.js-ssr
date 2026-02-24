"use client";

import NavLink from "./NavLink";
import { Menu } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { config } from "@/config/config";
import { Route } from "next";
import { useTheme } from "next-themes";

export default function Header() {
  const { theme } = useTheme();
  return (
    <header className="fixed relative top-6 right-0 left-0 z-99 flex justify-end md:justify-center px-4">
      <nav
        className="
        w-full md:w-auto
        backdrop-blur-md 
        border border-white/20 dark:border-blue-500/30 
        rounded-full px-6 py-3 
        shadow-[0_0_15px_rgba(59,130,246,0.3)] 
        transition-all duration-300
      "
      >
        <div className="flex justify-between items-center">
          {/* Navigation Links */}
          <div className="hidden md:flex gap-4 items-center">
            {config.headerNavs.map(({ item, href }) => (
              <NavLink key={item} href={href as unknown as Route<string>}>
                {item}
              </NavLink>
            ))}
            <ThemeToggle />
          </div>
        </div>

        <div className="md:hidden flex justify-between items-center">
          <h1 className="font-quintessential text-3xl">
            {config.name.split(" ")[0]}
          </h1>
          <div className="md:hidden flex gap-4 justify-center items-center">
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>
            <button className="p-2">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
