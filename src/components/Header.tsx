import { IoIosArrowBack } from "react-icons/io";
import categoryStyle from "../css/page/categoryPage.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

type Props = {
  showLocation: boolean;
  setShowLocation: (value: boolean) => void;
};

export default function Header({ showLocation, setShowLocation }: Props) {
  const navigate = useNavigate();
  const handleBackBtn = () => {
    if (showLocation) {
      setShowLocation(false);
      return;
    }
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
