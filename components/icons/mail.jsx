const Mail = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={26}
    fill="none"
    {...props}
  >
    <rect
      width={25}
      height={22}
      x={-1.5}
      y={1.5}
      stroke="#3A405A"
      strokeWidth={3}
      rx={3.5}
      transform="matrix(-1 0 0 1 25 .417)"
    />
    <path
      stroke="#3A405A"
      strokeLinecap="round"
      strokeWidth={2}
      d="M20 8.417c-4 5.5-7.9 5.2-11.5 0"
      opacity={0.5}
    />
  </svg>
);
export default Mail;
