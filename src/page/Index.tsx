import { useState } from "react";
import QRModal from "../components/QR_Modal";
import { isMobile } from "react-device-detect";
import indexStyle from "../css/page/index.module.css";

export default function Index() {
  const [isOpen, setIsOpen] = useState(false);

  const clickDownloadBtn = () => {
    setIsOpen(true);
  };

  return (
    <div className={indexStyle.pageContainer}>
      {isOpen && <QRModal setIsOpen={setIsOpen} />}
      {!isMobile && (
        <header className={indexStyle.qrDiv}>
          <button onClick={clickDownloadBtn}>앱으로 열기</button>
        </header>
      )}
      <div>
        <div className={indexStyle.titleDiv}>
          <span className={indexStyle.title1}>가장 효율적인</span>
          <span className={indexStyle.title2}>선택</span>
        </div>
      </div>
    </div>
  );
}
