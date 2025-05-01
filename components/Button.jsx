import GsapMagnetic from "./GsapMagnetic";

export default function Button({
  text,
  className,
  className2
}) {
  return (
    <GsapMagnetic>
      <button
        style={{ color: className? "black !important" : "white !important" }}
        className={className?`${className}`:`${className2}`}
      >
        {text}
      </button>
    </GsapMagnetic>
  );
}
