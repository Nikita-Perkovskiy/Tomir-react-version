import "./index.scss";

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="prevArrow-wrapper" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="31"
        viewBox="0 0 18 31"
        fill="none"
      >
        <path d="M16.5 1L2 15.5L16.5 30" stroke="white" stroke-width="2" />
      </svg>
    </div>
  );
};

export default PrevArrow;
