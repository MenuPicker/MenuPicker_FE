import { useState } from "react";
import QRModal from "../components/QR_Modal";
import { isMobile } from "react-device-detect";
import indexStyle from "../css/page/index.module.css";
import { useNavigate } from "react-router-dom";
import foodIcon from "../assets/food-icon.png";
import mapIcon from "../assets/map-icon.png";
import drinkIcon from "../assets/drink-icon.png";

export default function Index() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const clickDownloadBtn = () => {
    setIsOpen(true);
  };

  return (
    <div className={indexStyle.pageContainer}>
      {isOpen && <QRModal setIsOpen={setIsOpen} />}
      {!isMobile && (
        <div className={indexStyle.qrDiv}>
          <button onClick={clickDownloadBtn}>앱으로 열기</button>
        </div>
      )}
      <header className={indexStyle.header}>
        <em>MenuPicker</em>
      </header>
      <div className={indexStyle.content}>
        <div className={indexStyle.iconDiv}>
          <img
            src={foodIcon}
            alt="음식 아이콘"
            className={indexStyle.foodIcon}
          />
          <img src={mapIcon} alt="지도 아이콘" className={indexStyle.mapIcon} />
          <img
            src={drinkIcon}
            alt="술집 아이콘"
            className={indexStyle.drinkIcon}
          />
        </div>
        <div className={indexStyle.titleDiv}>
          <span className={indexStyle.title1}>나만을 위한</span>
          <span className={indexStyle.title2}>선택</span>
        </div>
        <div className={indexStyle.textDiv}>
          <span className={indexStyle.text1}>오늘 어디갈 지 고민일 때,</span>
          <span className={indexStyle.text2}>
            원하는 분위기, 음식을 찾을 때,
          </span>
          <span className={indexStyle.text3}>
            <strong>
              <em>MenuPicker</em>
            </strong>
            로 선택해보세요.
          </span>
        </div>
        <div className={indexStyle.btnDiv}>
          <button
            onClick={() => {
              navigate("/category");
            }}
          >
            선택하기
          </button>
        </div>
      </div>
    </div>
  );
}
