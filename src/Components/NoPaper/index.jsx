import "./Popup.css";
import { Link } from "react-router-dom";
const NoPaper = (props) => {
  return props.trigger ? (
    <div className="popup-background">
      <div className="popup-warning">
        <h1>Bạn đã hết giấy, bạn có muốn mua thêm?</h1>
        <div className="popup-warning-button">
          <Link to="/BuyPaper">
            <h2>Có</h2>
          </Link>
          <h2 onClick={() => props.setTrigger(false)}>Không</h2>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default NoPaper;
