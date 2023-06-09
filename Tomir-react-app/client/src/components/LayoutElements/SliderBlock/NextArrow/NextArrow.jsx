import "./index.scss";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="NextArrow-wrapper" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="31"
        viewBox="0 0 18 31"
        fill="none"
      >
        <path d="M1.5 1L16 15.5L1.5 30" stroke="white" strokeWidth="2" />
      </svg>
    </div>
  );
};

export default NextArrow;
