const Modal = ({ isOpen, onClose, title, children, buttons }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header flex justify-between items-center">
          <span className="modal-title text-5xl font-bold">{title}</span>
          <button onClick={onClose} className="close-button text-3xl">
            X
          </button>
        </div>
        <div className="modal-body">{children}</div>
        <div className="modal-footer flex items-center justify-evenly">
          {buttons.map((button, index) => (
            <button
              key={index}
              onClick={button.onClick}
              className={button.className || ""}
            >
              {button.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
