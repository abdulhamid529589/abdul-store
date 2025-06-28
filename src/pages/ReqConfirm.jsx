import { useNavigate } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
const ReqConfirm = () => {
  const navigate = useNavigate();
  return (
    <div className="cardboxx">
      <div className="cardBoxmain">
        <div className="checkTick">
          <i className="checkmark">✓</i>
        </div>
        <h1 className="successmsg">Success</h1>
        <p className="msgbox">
          We received your purchase request;
          <br /> we'll be in touch shortly!
        </p>
        <button
          className="confirmThenContinueBtn"
          onClick={() => navigate("/")}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default ReqConfirm;
