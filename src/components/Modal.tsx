import modalStyle from "../css/components/modal.module.css";
import CloseBtn from "../assets/x.svg";

type Props = {
  setIsOpen: (isOpen: boolean) => void;
  text: string;
  title: string;
};

export default function Modal({ setIsOpen, text, title }: Props) {
  return (
    <div className={modalStyle.modalContainer}>
      {/* <div className={modalStyle.modalHeader}>
        <span className={modalStyle.headerText}>{title}</span>
        <img
          src={CloseBtn}
          alt="close"
          className={modalStyle.closeBtn}
          onClick={() => setIsOpen(false)}
        />
      </div> */}
      <div className={modalStyle.modalContent}>
        <span className={modalStyle.contentText}>{text}</span>
      </div>
      <div className={modalStyle.modalBtnDiv}>
        <button
          className={modalStyle.modalBtn}
          // style={{ backgroundColor: btnColor }}
          onClick={() => setIsOpen(false)}
        >
          확인
        </button>
      </div>
    </div>
  );
}
