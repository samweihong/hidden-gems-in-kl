export default function HalfStadium({ className }) {
  return (
    <div className={className}>
      <svg
        className="fill-secondary-200"
        width="100%"
        viewBox="0 0 120 110"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M 0 56 a 60 56 0 0 1 120 0 v 72 h -120 v -72" />
      </svg>
    </div>
  );
}
