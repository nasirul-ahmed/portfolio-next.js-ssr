"use client";
import { LucideIcon } from "lucide-react";
import React from "react";

interface SectionHeaderProps {
  title: string;
  icon?: React.ReactNode;
  underlineWidth?: string;
  underlineColor?: string;
  iconBg?: string;
  className?: string;
}

function SectionHeader({
  title,
  icon,
  underlineWidth = "w-2/3",
  underlineColor = "bg-blue-500",
  iconBg = "bg-gray-900 dark:bg-blue-900",
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`text-4xl font-bold flex gap-4 items-center ${className}`}>
      {icon && <div className={`p-4 rounded-2xl ${iconBg}`}>{icon}</div>}

      <div className="relative">
        <h1 className="text-gray-900 dark:text-white">{title}</h1>
        <div
          className={`absolute left-0 -bottom-2 h-1 ${underlineWidth} ${underlineColor} rounded-full`}
        />
      </div>
    </div>
  );
}

export default SectionHeader;
