import * as React from "react";

function Grid(props) {
  return (
    <svg
      width={702}
      height={612}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <g
        clipPath="url(#prefix__clip0_193_3903)"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M0 37v575M54 37v575M108 37v575M162 37v575M216 37v575M270 37v575M324 37v575M378 37v575M432 37v575M486 37v575M540 37v575M594 37v575M648 37v575M702 37v575M0 612h702M0 544h702M0 476h702M0 408h702M0 340h702M0 272h702M0 204h702M0 136h702M0 68h702M0 0h702" />
      </g>
      <defs>
        <clipPath id="prefix__clip0_193_3903">
          <path fill="#fff" d="M0 0h702v612H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Grid;
