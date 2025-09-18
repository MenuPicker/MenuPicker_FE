import { useState } from "react";
import QRModal from "../components/QR_Modal";
import { isMobile } from "react-device-detect";

export default function Index() {
  const [isOpen, setIsOpen] = useState(false);

  const clickDownloadBtn = () => {
    setIsOpen(true);
  };

  return (
    <div>
      {isOpen && <QRModal setIsOpen={setIsOpen} />}
      {!isMobile && (
        <button onClick={clickDownloadBtn}>핸드폰으로 다운로드</button>
      )}
    </div>
  );
}
