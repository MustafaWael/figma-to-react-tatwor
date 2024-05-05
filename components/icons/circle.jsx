const Circle = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={69}
    height={62}
    fill="none"
    {...props}
  >
    <circle cx={31} cy={31} r={31} fill="#F9DEC9" />
    <circle cx={42} cy={30} r={17} stroke="#3A405A" strokeWidth={4} />
    <path
      stroke="#3A405A"
      strokeLinecap="round"
      strokeWidth={4}
      d="M61 13c4.528 5.578 10.867 19.986 0 33"
    />
  </svg>
)
export default Circle
