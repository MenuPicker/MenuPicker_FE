import { IoIosArrowBack } from "react-icons/io";
import categoryStyle from "../css/page/categoryPage.module.css";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();
  return (
    <>
      <header className={categoryStyle.header}>
        <IoIosArrowBack
          className={categoryStyle.backIcon}
          onClick={() => {
            navigate(-1);
          }}
        />
      </header>
    </>
  );
}
