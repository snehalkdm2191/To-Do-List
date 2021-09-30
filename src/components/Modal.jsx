import ReactDOM from "react-dom";

export default function Modal({ state }) {
  const [modal, setModal] = state;

  // safeguard
  if (modal === null) return null;

  return ReactDOM.createPortal(
    <>
      <div className="overlay-style" />
      <div className="modal-style">
        <button className="btn btn-close-modal" onClick={() => setModal(null)}>
          X
        </button>
        {modal}
      </div>
    </>,
    document.getElementById("modal")
  );
}
