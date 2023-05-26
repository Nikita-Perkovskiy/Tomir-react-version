import "./index.scss";
import { WindMillLoading } from "react-loadingg";

const LoaderComponent = () => {
  return (
    <div className="loader-wrapper">
      <WindMillLoading color="#f2ad27" size="large" />
    </div>
  );
};

export default LoaderComponent;
