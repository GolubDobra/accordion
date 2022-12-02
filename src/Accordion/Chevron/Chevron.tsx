import { h } from 'preact'

export const Chevron = ({ className = '' }: { className?: string }) => (
  <svg
    className={className}
    width="31"
    height="31"
    viewBox="0 0 31 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="15.5" cy="15.5" r="15.5" fill="url(#paint0_linear_260_580)" />
    <path
      d="M9 14L15.5 20L22 14"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_260_580"
        x1="0"
        y1="31"
        x2="31"
        y2="31"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#0340F5" />
        <stop offset="1" stop-color="#3585F8" />
      </linearGradient>
    </defs>
  </svg>
)
