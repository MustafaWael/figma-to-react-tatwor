const Box = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={60}
    height={50}
    fill="none"
    {...props}
  >
    <rect width={60} height={29} y={20.5} fill="#F9DEC9" rx={14.5} />
    <circle cx={30} cy={20.5} r={17} stroke="#3A405A" strokeWidth={4} />
    <path
      stroke="#3A405A"
      strokeLinecap="round"
      strokeWidth={4}
      d="M48.5 39 42 32.5M48.5 2 42 8.5M11.5 2 18 8.5M11.5 39l6.5-6.5"
    />
    <circle cx={30} cy={20.5} r={4} fill="#3A405A" />
  </svg>
)
export default Box
