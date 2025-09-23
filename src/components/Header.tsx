import { IoIosArrowBack } from "react-icons/io";
import categoryStyle from "../css/page/categoryPage.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const navigate = useNavigate();
  const handleBackBtn = () => {
    navigate(-1);
  };
  // const [showLocation, setShowLocation] = useState(false);
  return (
    <>
      <header className={categoryStyle.header}>
        <IoIosArrowBack
          className={categoryStyle.backIcon}
          onClick={handleBackBtn}
        />
      </header>
    </>
  );
}
