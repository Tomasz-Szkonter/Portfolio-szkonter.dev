import { useEffect } from "react";

const Modal = ({ isOpen, onClose, title, titleAlt, text, buttonText }) => {
  const modalClasses = isOpen ? "block" : "hidden";

  useEffect(() => {
    if (isOpen) {
      // Add code here to perform actions when the modal is turned on on page load.
      console.log("Modal is turned on!");
    }
  }, [isOpen]);

  return (
    <div className={`modal ${modalClasses}`}>
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="text-[32px] text-dark-100 font-semibold">{title}<span className="text-primary">{titleAlt}</span></h2>
        </div>
        <div className="modal-body">
          <p>{text}</p>
        </div>
        <div className="modal-footer">
          <button
            className="bg-primary text-white px-4 py-2"
            onClick={onClose}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
