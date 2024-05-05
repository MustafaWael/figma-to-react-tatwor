const StarBloom = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={60}
    height={60}
    fill="none"
    {...props}
  >
    <rect
      width={61.872}
      height={22.421}
      x={0.396}
      y={43.75}
      fill="#F9DEC9"
      rx={11.211}
      transform="rotate(-45 .396 43.75)"
    />
    <circle cx={21.396} cy={22.98} r={4} fill="#3A405A" />
    <circle cx={38.397} cy={22.98} r={4} fill="#3A405A" />
    <circle cx={4.396} cy={22.98} r={4} fill="#3A405A" />
    <circle cx={21.396} cy={39.98} r={4} fill="#3A405A" />
    <circle cx={21.396} cy={5.979} r={4} fill="#3A405A" />
  </svg>
)
export default StarBloom
