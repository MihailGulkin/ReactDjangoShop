import React from "react";

import { SvgBase } from "@/@types/ui/UiSvg";

import style from "./Twitter.module.scss";

export const Twitter: React.FC<SvgBase> = ({ stringClass, width, height }) => {
  return (
    <a href="" className={`${stringClass} ${style.root}`}>
      <svg
        fill="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width={width}
        height={height}
      >
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
      </svg>
    </a>
  );
};
