import ReactDOM from "react-dom";
import { useCallback, useEffect } from "react";
import { useStore } from "../../services/StoreProvider";
import { CLOSE_TOOL_TIP } from "../../services/actions/toolTip";

import "./Modal.css";

const modalRoot = document.getElementById("modal");

const Modal = ({ children }) => {
  const [state, dispatch] = useStore();

  const { isOpen } = state.toolTip;

  const onClose = useCallback(() => {
    dispatch({ type: CLOSE_TOOL_TIP });
  }, [dispatch]);

  const handleCloseByEsc = useCallback(
    (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleCloseByEsc);
    return () => {
      document.removeEventListener("keydown", handleCloseByEsc);
    };
  }, [handleCloseByEsc]);

  return ReactDOM.createPortal(
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__overlay" onClick={onClose}></div>
      <div className="modal__container">
        <button
          onClick={onClose}
          type="button"
          className="modal__close"
        ></button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
