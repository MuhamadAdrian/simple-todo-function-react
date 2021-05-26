import Backdrop from "./Backdrop";
function Modal(props) {
  return (
    <div>
      <Backdrop onClick={props.onCancel} />

      <div className="modal">
        <p>Are you sure ? </p>
        <button className="btn btn--alt" onClick={props.onCancel}>
          Cancel
        </button>
        <button className="btn" onClick={props.onConfirm}>
          Confirm
        </button>
      </div>
    </div>
  );
}

export default Modal;
