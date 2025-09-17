import { QRCodeCanvas } from "qrcode.react";
import qrModalStyle from "../css/components/qrModal.module.css";
import CloseBtn from "../assets/x.svg";

type Props = {
  setIsOpen: (isOpen: boolean) => void;
};

export default function QRModal({ setIsOpen }: Props) {
  return (
    <div className={qrModalStyle.overlay}>
      <div className={qrModalStyle.container}>
        <div className={qrModalStyle.header}>
          <img
            src={CloseBtn}
            alt="close"
            className={qrModalStyle.closeBtn}
            onClick={() => setIsOpen(false)}
          />
        </div>
        <div className={qrModalStyle.body}>
          <QRCodeCanvas value="https://menu-picker-fe.vercel.app" size={200} />
        </div>
      </div>
    </div>
  );
}
