"use client";

import Image from "next/image";
import React from "react";
import { Phone, Mail, LocateFixedIcon, CalendarCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import ProfileImage from "@/public/images/profile2.jpg";
import { config } from "@/config/config";
import { useTheme } from "next-themes";

function Profile() {
  const { theme } = useTheme();
  const contactIcons: Record<string, LucideIcon> = {
    phone: Phone,
    email: Mail,
    address: LocateFixedIcon,
    birthday: CalendarCheck,
  };

  return (
    <div className="relative w-full mx-auto mt-25">
      <div className="absolute overflow-hidden top-1 left-1/2 -translate-x-1/2 -translate-y-1/2 w-38 h-38 md:w-46 md:h-46 rounded-full border-4 border-white dark:border-gray-800 z-10">
        <Image
          quality={100}
          priority
          src={ProfileImage}
          alt="my profile"
          className="object-cover"
          fill
        />
      </div>
      <div className="bg-white dark:bg-black text-center rounded-2xl p-8 pt-24 shadow-xl border border-gray-100 dark:border-gray-700">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">
          {config.name}
        </h2>
        <div className="text-gray-800 dark:text-gray-50 mb-4 font-bold tracking-widest rounded-lg mt-1 text-sm">
          {config.role}
        </div>
        {/* Contact Details */}
        {Object.entries(config.contact).map(([key, value]) => {
          const capitalised = key.charAt(0).toLocaleUpperCase() + key.slice(1);
          const Icon = contactIcons[key.toLowerCase()];
          return (
            <div
              key={key}
              className="flex w-full justify-between items-center gap-2 py-4 px-4 my-2 rounded-lg bg-gray-300 dark:bg-gray-800/50"
            >
              <div className="flex gap-2 text-sm text-gray-900 dark:text-white">
                {Icon && <Icon size={18} />}
                <div className="lg:hidden xl:flex ">{capitalised}</div>
              </div>
              <div className="text-gray-900 dark:text-white">{`${value}`}</div>
            </div>
          );
        })}

        <a
          href="/resume.pdf"
          download
          className="flex items-center justify-center gap-2 mx-4 mt-4 px-4 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg text-sm hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
        >
          Download Resume
        </a>
        <div className="flex gap-6 mt-2 justify-center items-center p-2 rounded-md">
          {config.socials.map((social) => {
            return (
              <a
                key={social.name}
                className="flex w-full h-full max-w-6 max-h-6"
                target="_blank"
                href={social.url}
              >
                <svg
                  role="img"
                  viewBox={social.viewBox}
                  fill={social.color ?? "currentColor"}
                  className="w-full h-full"
                >
                  {social.iconPath}
                </svg>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Profile;
