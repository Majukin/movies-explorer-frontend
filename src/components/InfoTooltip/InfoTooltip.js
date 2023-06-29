import union from "../../images/union.svg";
import unionErr from "../../images/error.svg";

import "./InfoTooltip.css";

function InfoTooltip({ onClose, status: { isOpen, isSucess, text } }) {
  return (
    <div className={isOpen ? "popup popup_opened" : "popup"}>
      <div className="popup__container">
        <div className="popup__content">
          <button
            className="popup__button-close"
            type="button"
            onClick={onClose}
          ></button>

          <img
            className="popup__image"
            alt="иконка"
            src={isSucess ? union : unionErr}
          />

          <p className="popup__subtitle">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default InfoTooltip;
