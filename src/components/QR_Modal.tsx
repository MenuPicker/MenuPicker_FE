import { QRCodeCanvas } from "qrcode.react";
import qrModalStyle from "../css/components/qrModal.module.css";

export default function QRModal() {
  return (
    <div className={qrModalStyle.overlay}>
      <div className={qrModalStyle.container}>
        <QRCodeCanvas value="https://menu-picker-fe.vercel.app" size={200} />
      </div>
    </div>
  );
}
