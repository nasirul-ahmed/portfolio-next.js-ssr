"use client";

import * as React from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [hoveredTheme, setHoveredTheme] = React.useState<string | null>(null);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="relative w-[140px] h-10 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-xl animate-pulse" />
    );
  }

  const themes = [
    { name: "light", icon: Sun, label: "Light" },
    { name: "dark", icon: Moon, label: "Dark" },
    { name: "system", icon: Monitor, label: "System" },
  ];

  const getIconColor = (themeName: string) => {
    if (theme === themeName) {
      return themeName === "dark"
        ? "text-yellow-400"
        : themeName === "light"
          ? "text-amber-500"
          : "text-blue-500";
    }
    return "text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300";
  };

  return (
    <div className="relative p-1 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-full shadow-inner">
      {/* Animated background slider */}
      <div
        className="absolute w-[34px] h-[34px] bg-white dark:bg-gray-700 rounded-full shadow-md transition-all duration-300 ease-in-out"
        style={{
          transform: `translateX(${
            theme === "light" ? "1px" : theme === "dark" ? "41px" : "81px"
          })`,
          opacity: 0.8,
        }}
      />

      <div className="relative flex gap-1">
        {themes.map(({ name, icon: Icon, label }) => (
          <button
            key={name}
            onClick={() => setTheme(name)}
            onMouseEnter={() => setHoveredTheme(name)}
            onMouseLeave={() => setHoveredTheme(null)}
            className="group relative p-2 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95"
            aria-label={`Switch to ${name} theme`}
          >
            {/* Hover effect */}
            <div
              className={`absolute inset-0 rounded-full transition-opacity duration-200 ${
                hoveredTheme === name && theme !== name
                  ? "bg-black/5 dark:bg-white/10 opacity-100"
                  : "opacity-0"
              }`}
            />

            {/* Icon with animated rotation */}
            <div
              className={`relative transition-transform duration-300 ${
                hoveredTheme === name ? "rotate-12" : ""
              }`}
            >
              <Icon
                size={20}
                className={`${getIconColor(name)} transition-colors duration-200`}
              />
            </div>

            {/* Tooltip */}
            <div
              className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 
              bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs rounded-md
              whitespace-nowrap transition-all duration-200 ${
                hoveredTheme === name
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-1 pointer-events-none"
              }`}
            >
              {label}
              <div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 
                w-2 h-2 bg-gray-900 dark:bg-gray-100"
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
